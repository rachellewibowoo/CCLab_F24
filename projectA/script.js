let x;
let x2;
let y = 0;
let y2 = 0;
let y0;
let y02;
let s = [];
let s2 = []; 
let decrease = false;

let o; 
let a;
let b;

let z;

let x1;
let y1;
let speedX;
let speedY;
let s1;

let w = 10;
let speedw = 1;

let w1 = 790;
let speedw1 = 1;

let w2= 1800;
let speedw2 = 1;

function setup() {  
x1 = 200;
y1 = 200;
speedX = 3;
speedY = 2;
s1 = 100;  
createCanvas(800, 800);
colorMode(HSB); 
let o = 50;

  
//variable for the blobby interaction(expanding when touched)
z = round(random(50, 100));

//variables for the clouds
   x = random(-width);
  y0 = random(50, 200);
  x2 = random(-width);
  y02 = random(50, 200);
  
  for (let i = 0; i < 5; i++) {
    s[i] = random(10, 100);
  }
  for (let i = 0; i < 5; i++) {
    s2[i] = random(10, 100);
  }
}

function draw() {
  background(255);
  
   
//grey rainy sky
  fill( 45);
  rect(-20, 0, 900, 400);

//adding campus buildings
  fill(270, 100, 100, 100);
  rect(50, 280, 300, 150);
  
  //nyush writing
  fill(255);
   rect(190, 370, 30, 10);
   quad(190, 350, 210, 190, 210, 350, 190, 370);
  
  
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
  line(30+w, 490, 50+w, 460);
  //right leg
  line(50+w, 460, 60+w, 490);
  noStroke();
 
  //bringing a backpack
  fill(0);
  quad(5 + w, 450, 30+w, 450, 30+w, 480, 5 + w, 480);
     
  
//nyush student 2
  w1 = w1 - 2*speedw1;
  console.log(w1);
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
  line(30+w1, 490, 50+w1, 460);
  //right leg
  line(50+w1, 460, 60+w1, 490);
  noStroke();
  
  //bringing a backpack
  fill(200, 50, 50);
  quad(5 + w1, 450, 30+w1, 450, 30+w1, 480, 5 + w1, 480);
  
//nyush student 3
  w2 = w2 - 2*speedw2;
  console.log(w2);
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
  line(45+w2, 490, 50+w2, 460);
  //right leg
  line(50+w2, 460, 55+w2, 490);
  noStroke();
  
//the nyush quad grass 
  fill(100, 50, 70, 255);
  rect(-20, 500, 900, 400);
  
//the nyush quad area 
  stroke(40);
  strokeWeight(2);
  fill(50);
  quad(250, 500, 100, 700, 700, 700, 550, 500);
  noStroke();
  fill(random(25,30), random (85, 90), random (25, 35));
  quad(280, 505, 150, 670, 650, 670, 520, 505);
  fill(50);
  stroke(40);
  strokeWeight(2);
  rect(100, 700, 600, 45);
  
  noStroke();
  drawFace(x1, y1, z);

//making blobby bounce and jump accross the canvas
  x1+=speedX;
  y1+=speedY;
  
  if (x1 < s1/2|| x1 > width-s1/2){
    speedX = -speedX;
  }
  if (y1 < s1/2 || y1 > height-s1/2){
    speedY = -speedY;
  }

   
//making rain
  noStroke();
  rain(random(width), random(height), 10, 10)
  circle(random(width), random(height), 5, 5);
  circle(random(width), random(height), 8, 8);

  
//clouds
  cloud1(x, y);
  cloud2(x2, y2);
  updateCloud();
  updateCloud2();

//adding interaction (if blobby is pressed, it expands) 
   if (mouseIsPressed && checkMouse(x1, y1)){
     fill(random(255), random(255), random(255));
     z = z + 1;
   }
    console.log(decrease);
  if(decrease && z > 50 | z < 30){
  z = z - 10;
   }
   if(z==50){
     decrease = false;
   }
}

//making random clouds reappear again and again
function cloud1(x, y) {
  noStroke();
  circle(x, y, 50);
  for (let angle = 0; angle < 2 * PI; angle += PI /    4) {
    let i = round(map(angle, 0, 2 * PI, 0,      s.length));
    let u = x + 25 * cos(angle);
    let v = y + 25 * sin(angle);
    fill(random(50, 255));
    circle(u, v, s[i]);
    console.log(i);
  }
}

function cloud2(x, y) {
  noStroke();
  circle(x, y, 50);
  for (let angle = 0; angle < 2 * PI; angle += PI /    4) {
    let i = round(map(angle, 0, 2 * PI, 0,  s.length));
    let u = x + 25 * cos(angle);
    let v = y + 25 * sin(angle);
    fill(random(70, 255));
    circle(u, v, s2[i]);
    console.log(i);
  }
}

function updateCloud() {
  x = x + 2;
  y = y0 + 10 * noise(frameCount * 0.1);
  if (x > width + 100) {
    x = random(-width);
    y0 = random(50, 200);
    for (let i = 0; i < 5; i++) {
      s[i] = random(10, 100);
    }
  }
}

function updateCloud2() {
  x2 = x2 + 2;
  y2 = y02 + 10 * noise(frameCount * 0.1);
  if (x2 > width + 100) {
    x2 = random(-width);
    y02 = random(50, 200);
    for (let i = 0; i < 5; i++) {
      s2[i] = random(10, 100);
    }
  }
}

function drawFace(x1, y1, z, o, p) {
  push();
  translate(x1, y1);
  //rotate(frameCount * 0.1);
  fill(190, 80, 200, 400);
  noStroke(); 
  strokeWeight(0.5);
  stroke(255);
  ellipse(0, 0, z*1.5, z*1.5);
  fill(255);
  circle(-z * 0.25, 0, z * 0.08);
  circle(z * 0.25, 0, z * 0.08);
  noFill();
  stroke(255);
  strokeWeight(3.5); 
  arc(0, 9, z * 0.18, z * 0.1, 0, PI);
  pop();
}


//adding interaction (if blobby is pressed, it will expand);
function checkMouse(x1, y1) {
  let d = dist(mouseX, mouseY, x1, y1);
  if (d < z) {
    //the radius of the face
    return true;
  } 
     else {
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

  




