// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 1; // Decide the initial number of particles.
let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  colorMode(HSB); 

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
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
  }
  //  let NUM_OF_PARTICLES = n; 
  //  n = 1; 
  //  n = n + 1; 
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
    this.c = color(random (360), 50, 50); 
    this.dia = 3 + noise(frameCount *0.5); 

  }
  display() {
    // particle's appearance
    push();
    colorMode(HSB); 
    translate(this.x, this.y);
    noStroke(); 
    fill(this.c);
    //circles or stars
    circle(0, 0, this.dia);

    pop();
  }
}
