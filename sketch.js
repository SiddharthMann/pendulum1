const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var hanger;

textSize(20);
fill(0);
textFont(Georgia);


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var hanger_options={
    isStatic: true
  }

  hanger = Bodies.rectangle(200,100,200,20,hanger_options);
World.add(world,hanger);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : hanger,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("lightblue");
}


function draw() {
  background("pink"); 
  Engine.update(engine);

text("Press space to control the pendulum",50,20);
text("Press enter to stop the pendulum",50,40);

  

  fill (0);
rectMode(CENTER);
rect(hanger.position.x,hanger.position.y,200,20);

fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,hanger.position.x,hanger.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

}