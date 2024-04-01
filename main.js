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

function colisao(){
    
}

function desenha(){    
    

}

function atualiza(){
 
}

function main(){
    des.clearRect(0,0,508,607)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()