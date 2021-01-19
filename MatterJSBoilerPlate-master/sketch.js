
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, engine, world, paper, log1, log2, log3;



function setup() {	
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	

paper = new Paper(50, 400, 20);
ground = new Ground(700, 350, 1000, 10);
log1 = new Dustbin(1000, 550, 200, 20);
log2 = new Dusbin(1090, 490, 20, 100);
log3 = new Dusbin(910, 490, 20, 100);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  log1.display();
  log2.display();
  log3.display();
  
  drawSprites();
 
}



