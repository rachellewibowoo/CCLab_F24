let s;
let img; 
let img2;
let x; 
let y; 
function preload() {
  img = loadImage("../assets/angry-stickman.png");
  img2 = loadImage("../assets/text.png"); 
}
let decrease = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  s = round(random(50, 100));
  x = windowWidth/2
  y = windowHeight/2
}



function draw() {
  
  background(255);
  
  image(img2, width/2 - 150, height/2 - 20, 300, 100*s*0.01);
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


  image(img, random((width/2 - 150) + 1, (width/2-150) + 1), random((height/2-150) - 1, (height/2-150) + 1), 300, 300); 
  
  fill(0, 1);
  text("press me", width/2 + 10, height/2 + 200);
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

function windowResized() {
    // Resize the canvas whenever the window or container is resized
    resizeCanvasToParent();
}

function resizeCanvasToParent() {
    // Get the size of the parent div
    const parent = canvas.parent();
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    // Resize the canvas to match the parent div's dimensions
    resizeCanvas(width, height);
}

