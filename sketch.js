var ball,ground,rect1,rect2,rect3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rect1Sprite=createSprite(610,623,30,90)
	rect2Sprite=createSprite(650,650,90,20)
	rect3Sprite=createSprite(710,623,30,90)

	ballSprite=createSprite(50,645,20,20)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}



