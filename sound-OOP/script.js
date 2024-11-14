
let b = [];
function preload(){
    img = loadImage("cloudimage.webp");
}

function setup() {
    let canvas = createCanvas(300, 600);
    canvas.parent("p5-container");
    // for(let i=0; i<b.length; i++){
    //     b[i] = new bubbles();
    // }

}

function draw() {
    background(0, 0, 255);
    Image(img, 0, 0, 100, 50); 
    for(let i=0; i< b.length; i++){
        b[i].update();
        b[i].display(); 
        b[i].putBack(); 
    }
}

function mousePressed(){
    b.push(new bubbles(mouseX, mouseY));
}

class bubbles {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.d = random(5, 50); 
        this.speed = map(this.d, 5, 50, 3, 0.5); 
        this.osc = new p5.TriOsc();

  //Instantiate the envelope
  this.envelope = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  this.envelope.setADSR(0.001, 0.5, 0.01, 0.1);

  // set attackLevel, releaseLevel
  this.envelope.setRange(1, 0);
    }
    update(){
        this.y = this.y - this.speed;
    }
    display(){
        fill(255, 100); 
        noStroke(); 
        circle(this.x, this.y, this.d);
        
    }

    putBack(){
        if(this.y < this.d/2){
            this.osc.start(); 
            let freq = map(this.d, 5, 50, 1000, 40);
            this.osc.freq(freq);
            this.envelope.play(this.osc, 0, 0.1); 
            this.y = random(height + this.d, 2*height); 
        }
    }
}