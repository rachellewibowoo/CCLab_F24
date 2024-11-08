let mySound;
let myothersound;

let mic;

function preload() {
    mySound = loadSound("assets/song.mp3");
}

function setup() {
   let canvas = createCanvas(400, 400);
   canvas.parent("p5-container");
   mic = new p5.AudioIn();
   mic.start();
// mySound.play();
// mySoung.loop();
  }
  
  function draw() {
    background(220, 50);
    let level = mic.getLevel();
    text(level, width/2, height/2);
    let s = map(level, 0, 1, 0, 10*width);
    circle(width/2, height/2, s);
  }

// making the sound play if it is pressed, and paused if it is pressed as well 
//   function mousePressed()[
//     circle(width/2, height/2, 100);
//     if(mySound.isPlaying()==false){
//         mySound.play();
//         ]else{
//         mySound.pause();
//     }