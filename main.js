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
 
}

function main(){
    des.clearRect(0,0,508,607)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()