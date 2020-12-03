
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	dustbin = new Dustbin(700,320,70,70);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin.display();
  dustbin = new Dustbin(700,320,70,70);
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		
	}
		
		


}


