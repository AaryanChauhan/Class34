const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var rope;
var ball;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground (200,550,1200,20);
  box1 = new Box(500,497,50,50);
  box2 = new Box(500,444,50,50);
  box3 = new Box(500,391,50,50);
  box4 = new Box(500,338,50,50);
  box5 = new Box(500,285,50,50);
  box6 = new Box(500,232,50,50);
  box7 = new Box(500,179,50,50);
  box8 = new Box(500,126,50,50);

  box9 = new Box(580,497,50,50);
  box10 = new Box(580,444,50,50);
  box11 = new Box(580,391,50,50);
  box12 = new Box(580,338,50,50);
  box13 = new Box(580,285,50,50);
  box14 = new Box(580,232,50,50);
  box15 = new Box(5800,179,50,50);
  box16 = new Box(580,126,50,50);

  ball = new Ball(200,200,30,30);
  rope = new Rope(ball.body,{x:300,y:50});
}

function draw() {
  background(220);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  ball.display();
  rope.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}