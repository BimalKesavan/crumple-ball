
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
var dustbinpart1
var dustbinpart2
var dustbinpart3
function preload()
{
  
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
    ball = new Ball(200,450,40);
    var render = Render.create(
      { element: document.body,
         engine: engine,
         options: { width: 1200, height: 700, wireframes: false } 
     });
     dustbinpart1=createSprite(935,680,200,20,{isStatic:true});
     dustbinpart1 = Bodies.rectangle(dustbinpart1.x,dustbinpart1.y,200,20,{isStatic:true});
 	   World.add(world,dustbinpart1);
     dustbinpart2=createSprite(845,600,20,150,{isStatic:true});
     dustbinpart2 = Bodies.rectangle(dustbinpart2.x,dustbinpart2.y,20,150,{isStatic:true});
 	   World.add(world,dustbinpart2);
     dustbinpart3=createSprite(1025,600,20,150,{isStatic:true});
     dustbinpart3 = Bodies.rectangle(dustbinpart3.x,dustbinpart3.y,20,150,{isStatic:true});
 	   World.add(world,dustbinpart3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  drawSprites();
 
}
function keyPressed(){
   if (keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});
   }
}


