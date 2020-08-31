class Box{
  constructor(x, y, width, height){
    var options = {
      'restitution':0.5,
      'friction':0.5,
      'density':1.0,
      mass:0.1
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.visibility = 255;
  World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(212, 255, 176);
    rect(0, 0, this.width, this.height);
    pop();
    }else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      pop();
    }
  }
};
