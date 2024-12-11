let vid;
let playing = true;
let videoPlay; 

function preload(){
    vid = createVideo("../assets/1.mp4");
}


function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  //let canvas = createCanvas(944, 754);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  // vid = createVideo("../assets/12.mp4");
  // vid.size(600, 500);
  vid.volume(0.1);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);
}

function draw() {

  // fill(0, 1);
  // text("click anywhere on the screen", width/2 - 20, height/2);
  //background(220);

  
  vid.play();
  image(vid, 0, 0, width, height);
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
