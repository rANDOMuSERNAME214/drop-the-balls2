const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball1, ball2,ball3,ball4,ball5;
var ball6, ball7,ball8,ball9,ball10;
var move1, move2, move3;
var log1, log2;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //created ground and log bodies
    var ground_options={
      isStatic: true
    }

    ground = Bodies.rectangle(600,height,1200,20,ground_options);
    World.add(world,ground);
    log1=Bodies.rectangle(100,400,150,20,ground_options);
    World.add(world,log1);
    log2=Bodies.rectangle(400,400,150,20,ground_options);
    World.add(world,log2);

    //created multiple of ball bodies 
    var ball_options = {
      restitution:0.4,
      friction:0.02
    }

    ball1 = Bodies.circle(220,10,10,ball_options);
    World.add(world,ball1);
    ball2 = Bodies.circle(220,10,10,ball_options);
    World.add(world,ball2);
    ball3 = Bodies.circle(225,10,10,ball_options);
    World.add(world,ball3);
    ball4 = Bodies.circle(230,10,10,ball_options);
    World.add(world,ball4);
    ball5 =Bodies.circle(230,10,10,ball_options);
    World.add(world,ball5);

    
    //created all the three move bodies
    var move_options={
      isStatic:true
    };

    move1 = Bodies.rectangle(250,200,150,20,move_options);
    World.add(world,move1);

    move2 = Bodies.rectangle(250,200,150,20,move_options);
    World.add(world,move2);

    move3 = Bodies.rectangle(250,200,150,20,move_options);
    World.add(world,move3);

    //styling the bodies here
    fill("red");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("blue");
    Engine.update(engine);

  //created shape for ground and stand
  rect(ground.position.x,ground.position.y,1200,20);
  rect(log1.position.x,log1.position.y,150,20);
  rect(log2.position.x,log2.position.y,150,20);

  //created shape for all the paticles
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);

  //created shape for all the moves
  Matter.Body.rotate(move1,angle1)
  push();
  translate(move1.position.x,move1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.1;

  Matter.Body.rotate(move2,angle2)
  push();
  translate(move2.position.x,move2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.15;

  Matter.Body.rotate(move3,angle3)
  push();
  translate(move3.position.x,move3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.2;
    
}