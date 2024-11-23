// // Starting code from Kyle McDonald https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

let noseX, noseY; 
let p_noseX, p_noseY; 

let osc, envelope;

let attackTime = 0.001;
let sustainTime = 0.5;
let sustainLevel = 0.8;
let releaseTime = 0.01;


var capture;
var tracker;
var w = 640,
    h = 480;

function setup() {

  osc = new p5.TriOsc(); // set frequency and type
  envelope = new p5.Envelope(attackTime, sustainTime, sustainLevel, releaseTime); 

  // osc.start(); 

    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function () {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    let canvas = createCanvas(w, h);
    canvas.parent("p5-container");

    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

function draw() {
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();

    noFill();
    stroke(255);

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        ellipse(positions[62][0], positions[62][1], 4, 4); 
        text(62, positions[62][0], positions[62][1]);
    }

    if (positions.length > 0) {
      noseX = positions[62][0]; 
      noseY = positions[62][1];

 // change oscillator frequency based on mouseX

//  let freq = map(noseX, 0, width, 40, 880);
//  osc.freq(freq); 
  // let freq = map(mouseX, 0, width, 40, 880);
  // osc.freq(freq);

  // let amp = map(mouseY, 0, height, 1, 0.01);
  // osc.amp(amp);

  let d = dist(noseX, noseY, p_noseX, p_noseY); 
  textSize(30); 
  text(d, 100, 100); 

  if (d > 10){
    osc.start();
   let f = map(noseX, 0, width, 40, 800);
   osc.freq(f);
   envelope.play(osc);
 }

 //p_noseX and p_noseY represent the previouse x and y coordinates of the nose before it moves
p_noseX = noseX; 
p_noseY = noseY; 
}
}
