/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
*/
var hr;
var mn;
var sc;




function setup() {
  createCanvas(800,400);
 
  /*engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  */
 hr = hour();
 mn = minute();
 sc = second();
 
 angleMode(DEGREES);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

push();
translate(0, 0);
rotate(scAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 100, 0);
pop();

push();
translate(0, 0);
rotate(mnAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 110, 0);
pop();

push();
translate(0, 0);
rotate(scAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 120, 0);
pop();

  drawSprites();
}