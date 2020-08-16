
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var ground;
var paper;
var side1, side2, side3;
function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);


	

	//Create the Bodies Here.
	paper = new Paper(100,350,10);
ground = new Ground(400,680,800,20);
side1=new Dustbin(380,635,10,70);
side2=new Dustbin(460,665,110,110);
side3=new Dustbin(500,635,10,70);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	//Engine.update(engine);
  
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){


Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});

}

}