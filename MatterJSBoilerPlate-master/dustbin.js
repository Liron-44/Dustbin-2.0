class Dustbin{
  constructor(x,y,width, height){
  var options={
    isStatic:true,
    friction:0
  }
  
  this.dustin = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.dustbin);
  }
  display(){
    fill("red");
    rectMode(CENTER);
    
rect(this.dusbin.position.x, this.dustin.position.y, this.width, this.height);

  }
}