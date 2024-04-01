let des = document.getElementById('des').getContext('2d')

let bg1 = new BG(0,0,508,700,'assets/bg-1-1.png')
let bg2 = new BG(0,-700,508,700,'assets/bg-1-2.png')
let bg3 = new BG(0,-1400,508,700,'assets/bg-1-1.png')
let bg4 = new BG(0,-2100,508,700,'assets/bg-1-2.png')

let bg1_2 = new BG(0,0,508,700,'assets/bg-2-1.png')
let bg2_2 = new BG(0,-700,508,700,'assets/bg-2-2.png')
let bg3_2 = new BG(0,-1400,508,700,'assets/bg-2-1.png')
let bg4_2 = new BG(0,-2100,508,700,'assets/bg-2-2.png')

let bg1_3 = new BG(0,0,508,700,'assets/bg-3-1.png')
let bg2_3 = new BG(0,-700,508,700,'assets/bg-3-2.png')
let bg3_3 = new BG(0,-1400,508,700,'assets/bg-3-1.png')
let bg4_3 = new BG(0,-2100,508,700,'assets/bg-3-2.png')

const kill = new Audio('assets/kill.mp3')
const fire = new Audio('assets/fire.mp3')
const bg = new Audio('assets/background.wav')
const gameOver = new Audio('assets/gameOver.wav')

let vida0 = new Image()
vida0.src = './assets/vida0.png'
let vida1 = new Image()
vida1.src = './assets/vida1.png'
let vida2 = new Image()
vida2.src = './assets/vida2.png'
let vida3 = new Image()
vida3.src = './assets/vida3.png'

let flag0 = new Image()
flag0.src = './assets/flag0.png'
let flag1 = new Image()
flag1.src = './assets/flag1.png'
let flag2 = new Image()
flag2.src = './assets/flag2.png'
let flag3 = new Image()
flag3.src = './assets/flag3.png'

let nav1 = new Nave(200,520,28,29,'assets/nave.png')
let txt_pts = new Texto1()
let pts = new Texto2()
let txt_vidas = new Texto1()
let n_vidas = new Texto1()
let gameover = new Texto1()

bg.loop = true
bg.volume = 1.0
kill.volume = 0.9
fire.volume = 0.7
gameOver.volume = 1.0

let podeAtirar = true
let jogar = true

function game_over(){
    if(nav1.vida <= 0){
        jogar = false
        bg.pause()
        kill.pause()
        fire.pause()
        gameOver.play()
    }
}

let currentStage = 1
let enemyDefeatedCount = 0 // Track defeated enemy count
let totalEnemies = 0 // Placeholder, set this based on your enemy creation logic

document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'a'){
        nav1.isLeftPressed = true
    }else if(ev.key === 'd'){
        nav1.isRightPressed = true
    }else if(ev.key === 'ArrowLeft'){
        nav1.isLeftPressed = true
    }else if(ev.key === 'ArrowRight'){
        nav1.isRightPressed = true
    }   
})
document.addEventListener('keyup', (ev)=>{
    if(ev.key === 'a'){
        nav1.isLeftPressed = false
    }else if(ev.key === 'd'){
        nav1.isRightPressed = false
    }else if(ev.key === 'ArrowLeft'){
        nav1.isLeftPressed = false
    }else if(ev.key === 'ArrowRight'){
        nav1.isRightPressed = false
    }
})



document.addEventListener('keypress', (ev)=>{
    if (ev.key === ' ' && podeAtirar && grupoTiros.length === 0) {
        podeAtirar = false;
        grupoTiros.push(new Tiro(nav1.x - 4 + nav1.w / 2, nav1.y, 8, 16, 'red'))
        fire.play()
        setTimeout(() => { podeAtirar = true; }, 1000)
    }

})

function checkForStageCompletion() {
    if(enemyDefeatedCount != 0){
        if (totalEnemies === enemyDefeatedCount) {
        currentStage +=  1 // Move to next stage
        enemyDefeatedCount = 0; // Reset defeated count
        }
    }
}

function colisao(){
    grupoDiscos.forEach((disc)=>{
        if(nav1.colid(disc)){
            grupoDiscos.splice(grupoDiscos.indexOf(disc), 1)
            nav1.vida -=1
            enemyDefeatedCount += 1
            kill.play()
        }
    })
}

function desenha(){    
    if(jogar){
        bg.play()
        drawBackground()   
        nav1.des_obj()    
        tiros.des()
        discos.des()
    }else{
        drawBackground()  
        nav1.des_obj()    
        tiros.des()
        discos.des()
        gameover.des_text('Game Over', 115, 300, 'aliceblue', '60px Times')
    }
    
    txt_pts.des_text('Pontos:',215,25,'white','26px Times');
    pts.des_text(nav1.pts,245,55,'white','26px Times');
    drawVidas(des)
    drawFlags(des)
}

function atualiza(){
    bg1.mov(bg1, 5);
    bg2.mov(bg2, 5);
    bg3.mov(bg3, 5);
    bg4.mov(bg4, 5);
    bg1_2.mov(bg1_2, 5);
    bg2_2.mov(bg2_2, 5);
    bg3_2.mov(bg3_2, 5);
    bg4_2.mov(bg4_2, 5);
    bg1_3.mov(bg1_3, 5);
    bg2_3.mov(bg2_3, 5);
    bg3_3.mov(bg3_3, 5);
    bg4_3.mov(bg4_3, 5);
    discos.destroiDisco();
    nav1.mov();
    tiros.atual();
    discos.atual();
    checkForStageCompletion();
    colisao();
    game_over();
}

function main(){
    des.clearRect(0,0,508,607)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()