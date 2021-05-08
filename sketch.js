
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var r1,r2,r3,r4,r5;
var b1,b2,b3,b4,b5,ceiling;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     ceiling= new Ceiling(300,100,300,20);

	//Create the Bodies Here.
    b1= new Bob(250,300);
	b2= new Bob(300,300);
	b3= new Bob(350,300);
	b4= new Bob(400,300);
	b5= new Bob(450,300);
    
	r1= new Rope(b1.body,ceiling.body,-100,100);
	World.add(world,r1);
	r2= new Rope(b2.body,ceiling.body,-50,100);
	World.add(world,r2);
	r3= new Rope(b3.body,ceiling.body,0,100);
	World.add(world,r3);
	r4= new Rope(b4.body,ceiling.body,50,100);
	World.add(world,r4);
	r5= new Rope(b5.body,ceiling.body,100,100);
	World.add(world,r5);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
    ceiling.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();
 
}



