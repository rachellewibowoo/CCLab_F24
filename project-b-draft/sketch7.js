let vid;
let playing = true;

function setup() {
  createCanvas(600, 500);
  // noCanvas();

  vid = createVideo("project-b-16.mp4");
  vid.size(600, 500);
  vid.volume(1);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0. 0);

}

function draw() {
  background(255);
  let img = vid.get();
  image(img, 0, 0); // redraws the video frame by frame in                           p5
  // textSize(40);
  // counter = nf(vid.time(), 0, 2); // first argument is decimal places to the left (use zero to default to places necessary)
  // text(counter, 10, 300);
}

// function keyPressed() {
//  vid.time(random(vid.duration())) 
// }

function mousePressed() {
 if (playing) {
   vid.pause();
 }
  else {
    vid.play();
  }
  playing = !playing;
}