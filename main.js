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