let s;
let x;
let y;
let a=30;
let b=55;
let c=80;
let d=70;
let e=40; 
let f=-200; 
let g=-170;
let h=-140;
let i=-120; 
let j=-115;
let o=2; 
function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("p5-canvas-container");
  colorMode(HSB); 
  let o = 50;
  }

function draw() {
background(100, 50, 70, 255);
  drawFace(width/2, height/2, o);
  o = sin(frameCount*0.05);
  console.log(o)
  o = map(o, -1, 1, 0, 100);
  
  console.log(checkMouse());
  if (checkMouse()) {
    fill(random(255), random(255), random(255));
  } else {
    fill(255);
  }
  
//making rain
  noStroke();
  rain(random(width), random(height), 10, 10)
//cloud 1 
    noStroke(); 
  clouds(a, 30, 50);
  clouds(b, 30, 50); 
  clouds(c, 30, 50); 
  clouds(d, 50, 40);
  clouds(e, 45, 40); 
a = a + 1
b = b + 1
c = c + 1
d = d + 1
e = e + 1
//cloud 2
  clouds(f, 30, 50);
  clouds(g, 30, 50);
  clouds(h, 30, 50);
  clouds(i, 50, 40);
  clouds(j, 45, 40); 
f = f + 1
g = g + 1
h = h + 1
i = i + 1
j = j + 1 
  
//the plant pot in the nyu quad 
// stroke(0); 
// fill(100, 100, 50);
// rect(50, 300, 300, 50);
// 

}


function drawFace(x, y, s, o, p) {
  push();
  translate(x, y);
  //rotate(frameCount * 0.1);
  fill(180, 60, 200, 300);
  noStroke(); 
  strokeWeight(0.5);
  stroke(255);
  ellipse(0, 0, s*1.5, s*1.5);
  fill(255);
  circle(-s * 0.25, 0, s * 0.08);
  circle(s * 0.25, 0, s * 0.08);
  noFill();
  stroke(255);
  strokeWeight(3.5); 
  arc(0, 9, s * 0.18, s * 0.1, 0, PI);
  pop();
}

function rain(){
  fill(180, 60, 250, 300);
      rect(random(width), random(height), 5, 50);
  fill(180, 60, 150, 280);
      rect(random(width), random(height), 5, 50);
  fill(180, 60, 100, 250);
      rect(random(width), random(height), 5, 50);
  fill(180, 60, 200, 300);
      rect(random(width), random(height), 5, 50);
}

function checkMouse() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < 10) { //the radius of the face
    return true;
  } else {
    return false;
  }
}

//how to make random clouds reappear again and again?
function clouds(x, y, s){
  fill(255);
  circle(x, y, s); 
}

function creatureSizeChange(){
  
//need to randomly reccur
//size becomes bigger when it rains more and more (it starts small)
//it jumps from one place to another
//
}
