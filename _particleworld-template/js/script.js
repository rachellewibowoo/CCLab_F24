// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 1000; // Decide the initial number of particles.
let particles = [];
let s = 30; 

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  colorMode(HSB); 

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

  //generate mesh-like black opaque circles in the background across the canvas
  for (let i = 0; i < 3; i++) {
    circle(i, height/2, 100);
  }


}

function draw() {
  // background(random(30, 50), random(80, 80), random(190, 200));
  background(0); 

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();

  //generate mesh-like black opaque circles in the background across the canvas
    for (let i = -10; i < width; i+=random(2, 7)) {
      fill(random(250), 0.03); 
      strokeWeight(random(0.5, 2));
      circle(i*s, random(0, 600), random(20, 25));
    }

   //generate blobbish rectangles to the background
   for (let i = -10; i < width; i+=random(2, 7)) {
    circle(i*s, random(0, 600), random(20, 25));
  }
  }

 
  //adding interaction: an opaque rectangle appears when we press our mouse, 
  //and its positions will follow our mouse(mouseX,mouseY), can be seen as a frame to capture our memories & emotions
  if(mouseIsPressed){
    push();
    fill(255, 0.5); 
    stroke(250); 
    strokeWeight(3); 
    rect(mouseX, mouseY, 300, 250);
    pop(); 
  }
  
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    colorMode(HSB); 
    this.x = startX;
    this.y = startY;
    this.dia = random(10, 50);
    this.c = random(360); 
  
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    //making the stars flicker
    this.c = color(random (360), random(100), random(100)); 
    // this.dia = 5 + noise(frameCount *0.5); 
    this.dia = random(10,25 ); 
  

  }
  display() {
    // particle's appearance
    push();
    colorMode(HSB); 
    translate(this.x, this.y);
    noStroke(); 
    fill(this.c);
    //colorful circles & rectangles
    circle(0, 0, this.dia);
    rect(mouseX, mouseY, 10, 10); 
    rect(random(), mouseY, 25, 25);
    pop();

  }
}
