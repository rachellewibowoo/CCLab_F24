/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new voodoo(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class voodoo {
  constructor(startX, startY) {

    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..s
    this.color = color(random(10), random(150), random(200));
    this.s = random(50, 100); 
    
  }
  update() {
    // this.x = this.x/95 * noise(frameCount*0.01)
    // this.y = this.y/95 * noise(frameCount*0.01)
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    //updating the y-values
    this.h = this.y/45 * noise(frameCount *0.027);
    //updating the x-values
    this.l = this.x/95 + 3/4 * this.x/95 * noise(frameCount*0.01)
    //updating the hat's y-values 
    this.hat = this.y/300 + this.y/50 * noise(frameCount * 0.009);
    //making the color of blobby's hat flicker
    this.hatColor = color (random(50), random(150), random(200)); 

    //changing the eye color of the dancer if the mouse is pressed 
    if(mouseIsPressed){
      this.eyeColor = color(100, 10, 0, 255); 
      this.fangColor = color(100, 10, 0, 255);
      this.mouthColor = color(100, 10, 0, 255);

    }else{
        this.eyeColor = color(255); 
        this.fangColor = this.color; 
        this.mouthColor = color(255);
      }
    
  }

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    colorMode(HSB);
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    
    //head or hat 
    noStroke();
    fill(this.color); 
    circle(0 + this.l, 0 + this.h,  72);
    fill(this.hatColor); 
    triangle(-40 + this.l, -10 + this.hat, 40 + this.l, -10 + this.hat, 0 + this.l, -50 + this.hat);
    //hands
    fill(255); 
    circle(-40 + this.l, 10 + this.h, 13); 
    circle(40 + this.l, 10 + this.h, 13);
    //eyes
    fill(this.eyeColor); 
    circle(-12 + this.l, 0 + this.h, 5);
    circle(12 + this.l, 0 + this.h, 5);
    //mouth
    noFill();
    stroke(this.mouthColor);
    arc(0 + this.l, 3 + this.h, 7, 4, 0, PI);
    noStroke();
    //fangs
    fill(this.fangColor);
    triangle(-3 + this.l, 5 + this.h, -1 + this.l, 5 + this.h, -2 + this.l, 10 + this.h); 
    triangle(1 + this.l, 5 + this.h, 3 + this.l, 5 + this.h, 2 + this.l, 10 + this.h); 
    //cloud below voodoo 
    fill(random(30, 40));
    circle(-10 + this.l, 35 + this.h, 12);
    circle(10 + this.l, 45 + this.h, 12);
    circle(15 + this.l, 50 + this.h, 13);
    circle(-25 + this.l, 50 + this.h, 20);
    circle(13 + this.l, 35 + this.h, 10); 
    circle(-30 + this.l, 40 + this.h, 15); 
    circle(20 + this.l, 50 + this.h, 20);
    circle(0 + this.l, 50 + this.h, 20);
    circle(5 + this.l, 45 + this.h, 30); 
    circle(-5 + this.l, 50 + this.h, 25);
    circle(-5 + this.l, 60 + this.h, 25);
    circle(-25 + this.l, 60 + this.h, 30);
    circle(20 + this.l, 55 + this.h, 25);
    circle(18 + this.l, 60 + this.h, 15);
    circle(15 + this.l, 65 + this.h, 20);
    circle(30 + this.l, 55 + this.h, 25);
    circle(-40 + this.l, 50 + this.h, 25);
    //feet
    fill(255);
    circle(-20 + this.l, 35 + this.h, 20);
    circle(20 + this.l, 35 + this.h, 20);
    
    
    


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
  //   // it is using "this" because this function, too, 
  //   // is a part if your Dancer object.
  //   // comment it out or delete it eventually.
  //   this.drawReferenceShapes()

  //   pop();
  // } 
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/