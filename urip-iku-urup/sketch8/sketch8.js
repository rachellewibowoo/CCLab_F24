let vid;
let playing = true;

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent("sketch8"); 
  // noCanvas();

  vid = createVideo("sketch.mp4");
  vid.size(600, 500);
  vid.volume(0.1);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);
}

function draw() {
  background(220);
    let img = vid.get();
    image(img, 0, 0); // redraws the video frame by frame in  p5
}

function mousePressed() {
 if (playing) {
   vid.pause();
 }
  else {
    vid.play();
  }
  playing = !playing;
}