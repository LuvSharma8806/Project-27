
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3;
var bobObject5,bobObject4;
var roof,rope1,rope2,rope3;
var rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(300,600,30,30);
	bobObject2= new Bob(330,600,30,30);
	bobObject3= new Bob(360,600,30,30);
	bobObject4= new Bob(390,600,30,30);
	bobObject5= new Bob(420,600,30,30);

	roof = new Roof(360,450,170,10);
	rope1 = new Rope(330,450,10,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  roof.display();
  rope1.display();
}



