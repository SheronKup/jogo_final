class Obj {
    constructor(x,y,w,h,at){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.at = at
    }


des_obj(){

}

colid(objeto){
    if((this.x < objeto.x + objeto.w)&&
    (this.x + this.w > objeto.x)&&
    (this.y < objeto.y + objeto.h)&&
    (this.y + this.h > objeto.y)){
    return true       
}else{
    return false
}
}

}

class Nave extends Obj{



    des_obj(){

    }

    anim(nome){

    }

    mov(){

    }
}

class Disco2 extends Obj{
    des_obj(){

    }
}

class Disco3 extends Obj{
    des_obj(){
        
    }
}
class Disco4 extends Obj{
    des_obj(){
        
    }
}

class Tiro extends Obj{
    des_tiro(){
        des.fillStyle = this.at
        des.fillRect(this.x, this.y, this.w, this.h)
    }

    mov(){
        this.y -= 10
    }
}

class BG extends Obj{
    mov(bg, speed) {
        bg.y += speed;
        if (bg.y >= bg.h) {
          bg.y = -508
        }
    }
}

class Texto1{
    des_text(){
        
    }
}
class Texto2{
    des_text(){
        
    }

getTextWidth(texto){

}}
   