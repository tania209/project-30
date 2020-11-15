class Ground{
    constructor(x, y, w, h){
        var ground_options={
            isStatic : true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h,ground_options)
        World.add(world,this.body);
    
    }

    display(){
        var pos= this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    
    }
}