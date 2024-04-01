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