class Block{
  constructor(x, y, w, h) {
    var options = {
    restitution :0.4,
    friction :0.0, 
    }
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  
  display(){
    if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.w, this.h);
      pop();
    }
    else{
      World.remove(world, this.body);
      console.log(this.body.speed);
      push();
      this.visibility = this.visibility -5;
      pop();
      
    }
        
  }
}