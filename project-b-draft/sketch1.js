let vid;
let playing = true;
let scene1 = true; // default scene (ur landing page now)
let scene2 = false; // the new scene to change into

function setup() {
  createCanvas(600, 500);
  // noCanvas();

  vid = createVideo("project-b-2.mp4");
  vid.size(600, 500);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);

}

function draw() {
  background(220);
  let img = vid.get();
  image(img, 0, 0); // redraws the video frame by frame in  p5
  if ((scene1 == true)) {
    
    
    let mouseDist = dist(mouseX, mouseY, width / 2, height / 2);
    // mouse's distance to the circle => detecting whether the button is clicked ^
    if (mouseDist <= 30 / 2 && mouseIsPressed) {
      scene2 = true;
      scene1 = false;
    }
      } else if (scene2 == true) {
    rect(width / 2, height / 2, 100, 100);
  }
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