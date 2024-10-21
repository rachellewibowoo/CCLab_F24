//cloud variables
let x = [];
let y = [];
let y0 = [];
let cloudSize = [];
//min and max size of the cloud
let minSize = 20;
let maxSize = 100;
let numberOfClouds = 50;

//face variables
let s = [];
let s2 = [];
let h = 190;
let decrease = false;
let z;
let x1;
let y1;
//mouth
let r1;
let r2;
let f1;
let f2;


//variables for nyush students
let w = 10;
let speedw = 1;
let w1 = 790;
let speedw1 = 1;
let w2 = 1800;
let speedw2 = 1;

function setup() {
  let canvas = createCanvas(800, 800);
  //canvas.parent("p5-canvas-container");
  colorMode(HSB);
  let o = 50;

  //creating the clouds
  for (let i = 0; i < numberOfClouds; i++) {
    x[i] = random(-width);
    y[i] = 0;
    y0[i] = random(50, 150);
    cloudSize[i] = random(minSize, maxSize);
  }

  //variable for the blobby interaction(expanding when touched)
  z = 50;

  for (let i = 0; i < 5; i++) {
    s[i] = random(10, 100);
  }
  for (let i = 0; i < 5; i++) {
    s2[i] = random(10, 100);
  }
}

function draw() {
  background(255);

  //pink sunset sky
  fill(random(0, 45));
  fill(300, 60, 100, 250);
  rect(-20, 0, 900, 400);
  //adding triangle for landscape
  fill(15);
  triangle(-3000, 0, 200, 480, 600, 400);

  fill(300, 23, 100);
  triangle(800, 0, 800, 430, 400, 378);

  //adding campus buildings
  stroke(20);
  strokeWeight(3);
  fill(50, 40, 30, 100);
  rect(450, 150, 380, 280);

  stroke(20);
  strokeWeight(4);
  quad(30, 350, 30, 210, 330, 200, 330, 350);
  quad(30, 350, 30, 250, -50, 100, -50, 330);
  quad(30, 250, 316, 200, -310, 160, -50, 250);
  fill(255);
  stroke(20);
  strokeWeight(4);
  quad(-10, 275, 15, 280, 15, 320, -10, 315);

  //windows
  stroke(20);
  strokeWeight(4);
  fill(random(80, 200));
  rect(452, 152, 50, 20);
  rect(550, 200, 50, 50);
  rect(750, 300, 50, 50);
  rect(650, 200, 150, 50);
  rect(460, 300, 130, 50);
  noStroke();

  //nyush writing
  fill(270, 100, 100, 100);
  rect(50, 280, 300, 150);
  //N
  fill(255);
  quad(90, 385, 80, 385, 80, 335, 90, 335);
  quad(120, 385, 110, 385, 80, 335, 90, 335);
  quad(120, 385, 110, 385, 110, 335, 120, 335);
  //Y
  quad(155, 360, 145, 360, 130, 335, 140, 335);
  quad(155, 360, 145, 360, 160, 335, 170, 335);
  quad(155, 360, 145, 360, 145, 385, 155, 385);
  //U
  quad(190, 385, 180, 385, 180, 335, 190, 335);
  quad(215, 385, 205, 385, 205, 335, 215, 335);
  rect(180, 377, 30, 8);
  //S
  rect(228, 377, 35, 8);
  rect(228, 355, 35, 8);
  rect(228, 335, 35, 8);
  rect(254, 357, 9, 27);
  rect(228, 335, 9, 27);
  //H
  rect(276, 335, 10, 50);
  rect(306, 335, 10, 50);
  rect(276, 355, 35, 8);

  //creating nyu students
  //nyush student 1
  fill(0);
  stroke(0);
  strokeWeight(5);

  //head
  w = w + speedw;
  fill(random(255), random(255), random(255));
  noStroke();
  circle(50 + w, 435, 20);
  stroke(0);
  strokeWeight(4);
  //body
  line(25 + w, 450, 70 + w, 455);
  line(50 + w, 460, 50 + w, 448);
  //left leg
  line(30 + w, 490, 50 + w, 460);
  //right leg
  line(50 + w, 460, 60 + w, 490);
  noStroke();

  //bringing a backpack
  fill(0);
  quad(5 + w, 450, 30 + w, 450, 30 + w, 480, 5 + w, 480);

  //making sure the student comes back
  if (w > 1000) {
    speedw = -speedw;
  }
  if (w < -100) {
    speedw = -speedw;
  }

  //nyush student 2
  w1 = w1 - 2 * speedw1;
  //console.log(w1);
  //head
  fill(55, 150, 150);
  noStroke();
  circle(50 + w1, 435, 25);
  stroke(250, 10, 10);
  strokeWeight(4);
  //body
  line(25 + w1, 455, 70 + w1, 450);
  line(50 + w1, 460, 50 + w1, 448);
  //left leg
  line(30 + w1, 490, 50 + w1, 460);
  //right leg
  line(50 + w1, 460, 60 + w1, 490);
  noStroke();

  //bringing a backpack
  fill(200, 50, 50);
  quad(5 + w1, 450, 30 + w1, 450, 30 + w1, 480, 5 + w1, 480);

  //making sure the student comes back
  if (w1 > 1500) {
    speedw1 = -speedw1;
  }
  if (w1 < -200) {
    speedw1 = -speedw1;
  }

  //nyush student 3
  w2 = w2 - 2 * speedw2;
  //console.log(w2);
  //head
  fill(100, 60, 10);
  noStroke();
  circle(50 + w2, 435, 25);
  stroke(250, 10, 10);
  strokeWeight(4);
  //body
  line(25 + w2, 450, 70 + w2, 458);
  line(50 + w2, 460, 50 + w2, 448);
  //left leg
  line(45 + w2, 490, 50 + w2, 460);
  //right leg
  line(50 + w2, 460, 55 + w2, 490);
  noStroke();

  //making sure the student comes back
  if (w2 > 2000) {
    speedw2 = -speedw2;
  }
  if (w2 < -1000) {
    speedw2 = -speedw2;
  }

  //the nyush quad grass
  fill(100, 50, 70, 255);
  rect(-20, 500, 900, 400);

  //the nyush quad area
  stroke(40);
  strokeWeight(2);
  fill(50);
  quad(250, 500, 100, 700, 700, 700, 550, 500);
  noStroke();
  fill(random(25, 30), random(85, 90), random(25, 35));
  quad(280, 505, 150, 670, 650, 670, 520, 505);
  fill(50);
  stroke(40);
  strokeWeight(2);
  rect(100, 700, 600, 45);

  //grass
  //stroke(120, 100, 30);
  noStroke();
  fill(random(80, 100), random(40, 50), random(70, 100));
  triangle(400, 550, 410, 550, 410, 530);
  triangle(390, 510, 410, 550, 410, 530);
  triangle(390, 510, 410, 510, 420, 530);

  triangle(350, 600, 360, 600, 360, 580);
  triangle(340, 560, 360, 600, 360, 580);
  triangle(340, 560, 360, 560, 330, 580);

  fill(random(80, 100), random(40, 50), random(70, 100));
  triangle(310, 640, 330, 650, 320, 630);
  triangle(320, 640, 340, 600, 320, 610);

  fill(random(80, 100), random(40, 50), random(70, 100));
  triangle(310, 550, 298, 550, 300, 530);
  triangle(310, 550, 310, 510, 300, 530);

  triangle(500, 560, 500, 540, 490, 520);
  triangle(500, 560, 500, 540, 510, 520);

  triangle(480, 660, 480, 640, 470, 620);
  triangle(480, 650, 480, 640, 500, 620);

  triangle(430, 610, 430, 590, 420, 570);
  triangle(430, 610, 450, 590, 450, 570);

  triangle(540, 610, 540, 590, 530, 570);
  triangle(540, 610, 540, 590, 560, 570);

  //draw and update clouds
  for (let i = 0; i < numberOfClouds; i++) {
    cloud(x[i], y[i], y0[i], cloudSize[i]);
    updateCloud();
  }

  //blobby
  noStroke();
  h = map(z, 50, 100, 190, 360);
  console.log(z);
   
  drawFace(x1, y1, z, r1, r2);
  //adding conditionals to make blobby die when it is poked and     expands to a certain point
  if(z > 500){
   z =0.00001
  }
  //making the mouth change downwards when blobby expands to a certain point
  if(z > 80){
    r1 = PI;
    r2 = 0;
  }
  if(z < 80){
    r1 = 0;
    r2 = PI; 
  }


  //making blobby bounce and jump accross the canvas
  x1 = width / 4 + (1 / 2) * width * noise(frameCount * 0.007);
  y1 = (1 / 2) * height + (3 / 8) * height * noise(frameCount * 0.005);

  //making rain
  noStroke();
  rain(random(width), random(height), 10);
  circle(random(width), random(height), 5);
  circle(random(width), random(height), 8);

  //adding interaction (if blobby is pressed, it expands)
  if (mouseIsPressed && checkMouse(x1, y1)) {
    fill(random(255), random(255), random(255));
    z = z + 1;
  }
  console.log(decrease);
  if (decrease && z > 50) {
    z = lerp(z, 50, 0.2);
    //z = z - 10;
  }
  if (z < 51) {
    decrease = false;
  }

}

function drawFace(x1, y1, z, r1, r2) {
  push();
  translate(x1, y1);
  //rotate(frameCount * 0.1);
  fill(h, 80, 200);
  noStroke();
  strokeWeight(0.5);
  stroke(255);
  ellipse(0, 0, z * 1.5, z * 1.5);
  //eyes
  fill(255);
  circle(-z * 0.25, 0, z * 0.08);
  circle(z * 0.25, 0, z * 0.08);
  noFill();
  stroke(255);
  strokeWeight(3.5);
  //mouth 
  arc(0, 9, z * 0.18, z * 0.1, r1, r2);
  //eyebrows
  arc(-16 - z*0.002, -12, z * 0.08, z * 0.03, r2, r1);
  arc(16 + z*0.03, -10, z * 0.08, z * 0.02, r2, r1); 
  pop();
  
}

//adding interaction (if blobby is pressed, it will expand);
function checkMouse(x1, y1) {
  let d = dist(mouseX, mouseY, x1, y1);
  if (d < z) {
    //the radius of the face
    return true;
  } else {
    return false;
  }
}

//adding interaction (if blobby is pressed, it will expand);
function mouseReleased() {
  if (checkMouse(x1, y1)) {
    decrease = true;
  }
}

//adding rain effects
function rain() {
  fill(180, 60, 250, 300);
  rect(random(width), random(height), 5, 50);
  fill(180, 60, 150, 280);
  rect(random(width), random(height), 5, 50);
  fill(180, 60, 100, 250);
  rect(random(width), random(height), 5, 50);
  fill(180, 60, 200, 300);
  rect(random(width), random(height), 5, 50);
}

function cloud(x, y, y0, s) {
  push();
  colorMode(RGB);
  noStroke();
  fill(255);
  translate(x, y);
  circle(0, 0, s * 0.5);

  for (let angle = 0; angle < 2 * PI; angle += PI / 15) {
    rotate(angle);
    //use different opacities
    fill(255, 50 * noise(angle * y0) + 100);
    circle(s * 0.4, 0, 1.2 * s * noise(angle * y0));
  }
  pop();
}

function updateCloud() {
  for (let i = 0; i < numberOfClouds; i++) {
    //it will move faster if it is smaller
    let speedCloud = map(cloudSize[i], minSize, maxSize, 0.02, 0.005);
    x[i] = x[i] + speedCloud;
    //will move more if it is smaller
    y[i] = y0[i] + (500 / cloudSize[i]) * noise(frameCount * 0.03);
    if (x[i] > width + 100) {
      x[i] = random(-width);
      y0[i] = random(50, 150);
      cloudSize[i] = random(minSize, maxSize);
    }
  }
}
