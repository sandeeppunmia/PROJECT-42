var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(200,200);

  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //stroke(255,0,255);
  //point(0,0);

  //drawing the arcs
  strokeWeight(10);
  noFill();
  //seconds - red
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //minutes - blue
  stroke(0,0,255);
  arc(0,0,270,270,0,mnAngle);
  //hours- green
  stroke(0,255,0);
  arc(hour%12,0,240,240,0,scAngle);


  drawSprites();
}