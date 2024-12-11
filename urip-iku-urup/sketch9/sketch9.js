class Cat {
  constructor(x, y) {
    this.bodyColor = color(255, 165, 0);
    this.eyeColor = color(0, 0, 0);
    this.noseColor = color(255, 100, 100);
  }


  draw() {
    c = random(c-2, c+2);
    fill(this.bodyColor);
    //cat mouth
    fill(0);
    stroke(0);
    strokeWeight(2);
    arc(c + 20, u + 300, 40, 20, 0, PI);
    //cat body
    fill(this.bodyColor);
    noStroke();
    ellipse(c + 180, u + 160, 180, 130);

    noFill();
    //cat head
    fill(this.bodyColor);
    noStroke();
    ellipse(c + 100, u + 140, 100, 100);
    //cat eyes
    stroke(200, 100, 50);
    strokeWeight(2.5);
    fill(this.eyeColor);
    ellipse(c + 75, u + 123, 15, 15);
    ellipse(c + 120, u + 123, 15, 15);
    //cat nose 
    stroke(0);
    strokeWeight(0.5);
    fill(this.noseColor);
    triangle(c + 85, u + 143, c + 105, u + 143, c + 95, u + 153);


    //cat ears
    stroke(0);
    strokeWeight(2);
    fill(this.bodyColor);
    triangle(c + 50, u + 105, c + 80, u + 100, c + 65, u + 80);
    triangle(c + 115, u + 100, c + 145, u + 105, c + 130, u + 80);

    //cat legs 
    noStroke();
    fill(this.bodyColor);
    ellipse(c + 220, u + 215, 20, 20);
    ellipse(c + 210, u + 214, 20, 20);
    ellipse(c + 150, u + 220, 20, 20);
    ellipse(c + 140, u + 220, 20, 20);


    //cat tail
    strokeWeight(12);
    stroke(this.bodyColor);
    noFill();
    arc(c + 210, u + 110 + s, 150, 80, -QUARTER_PI, HALF_PI);
  }


  //adding texts
  displayText() {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Humans also adore pets - CATS!", width/2, height/2 - 100);
    text("go ahead... & pet the cat", width/2, height/2 + 130);
  }

}

let myCat;
let c;
let u;
let mySound;
let s = 0;

function preload() {
  mySound = loadSound("../assets/catpurring.mp3");
}

function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  //let canvas = createCanvas(944, 754);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  myCat = new Cat(windowWidth / 2, windowHeight / 2);
  u = windowHeight*0.1;
  c = windowWidth*0.17;

}

function draw() {


  background(0);
  //draw the cat and the text
  myCat.draw();
  myCat.displayText();
}

//allowing the song to play and stop each time the mouse Is Pressed
function mousePressed() {
  if (mySound.isPlaying() == false) {
    mySound.play();
  } else {
    mySound.stop();
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
