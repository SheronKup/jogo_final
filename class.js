class Obj {
    constructor(x,y,w,h,at){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.at = at
        this.points = 0
    }


des_obj(){
    let img = new Image()
    img.src = this.at
    des.drawImage(img,this.x,this.y,this.w,this.h)
}

colid(objeto){

}

}

class Nave extends Obj{
    dir = 0
    pts = 0
    vida = 4

    speed = 4
    isLeftPressed = false
    isRightPressed = false

    mov(){
        this.dir = (this.isLeftPressed ? -1 : 0) + (this.isRightPressed ? 1 : 0);
        this.x += this.dir * this.speed;

        if(this.x <= 0){
            this.x = 0
        }else if(this.x >= 480){
            this.x = 480
        }
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

    }

    mov(){

    }
}

class BG extends Obj{
    mov(){

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
   