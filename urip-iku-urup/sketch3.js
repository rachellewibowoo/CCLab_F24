let s;
let img; 
let img2;
function preload() {
  img = loadImage("angry-stickman.png");
  img2 = loadImage("text.png"); 
}
let decrease = false;
function setup() {
  createCanvas(400, 400);
  s = round(random(50, 100));
}


function draw() {
  background(255);
  image(img2, 50, 170, 300, 100*s*0.01);
  RedCircle(width / 2, height / 2, s);
  if (mouseIsPressed && checkMouse(width / 2, height / 2)) {
    s = s + 1;
  }
  console.log(decrease);
  if(decrease && s > 50 | s < 30){
    s = s -10;
  }
  if(s==50){
    decrease = false;
  }
  image(img, random(58, 60), random(49, 51), 300, 300); 
}

function mouseReleased() {
  if (checkMouse(width / 2, height / 2)) {
    decrease = true;
  }
}

function RedCircle(x, y, s, o, p) {
  push();
  translate(x, y);
  //rotate(frameCount * 0.1);
  fill(255, 0, 0, 130);
  noStroke(); 
  ellipse(0, 0, s * 1.5, s * 1.5);
  pop();
}

function checkMouse(x, y) {
  let d = dist(mouseX, mouseY, x, y);
  if (d < s / 2) {
    //the radius of the face
    return true;
   } else {
    return false;
 }
}



