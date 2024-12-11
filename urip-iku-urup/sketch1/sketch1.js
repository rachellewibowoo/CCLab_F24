let playing = true;
let scene1 = true; // default scene (ur landing page now)
let scene2 = false; // the new scene to change into
let scene3 = false; 
let allVideos = ["../assets/main.mp4", "../assets/2.mp4", "../assets/3.mp4"];
let videos = [];
let videoPlay;


function preload() {
  // videos.push[i];
  // videos.play();
  for (let i = 0; i < allVideos.length; i++) {
    videos.push(createVideo(allVideos[i]));
    //videos[i].size(944â€ŠÃ—â€Š754);
    videos[i].volume(0.1);
    videos[i].play();
    videos[i].hide();
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  //let canvas = createCanvas(944, 754);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  background(220);
  
}

function draw() {
  // fill(0, 1);
  // text("loading... click anywhere on the screen to make it load faster", width/2-100, height/2);
  
  if (scene1 == true) {
    videoPlay = videos[0];
    videos[1].volume(0); 
    videos[2].volume(0);  
  } else if (scene2 == true) {
    videoPlay = videos[1];
    videos[1].volume(0.1); 
    videos[0].volume(0); 
    videos[2].volume(0); 
  }
   else if (scene3 == true){
    videoPlay = videos[2];
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0.1); 
   }
   
  videoPlay.play();
  image(videoPlay, 0, 0, width, height);
  
}

// function mousePressed() {
//   if (scene1 == true && mouseX > 200 && mouseX < 400) {
//     scene1 = false;
//     scene2 = true;
//   }
//   if (scene2 == true && mouseX > 400 ){
//     scene2 = false; 
//     scene3 = true; 
//   }
// }

function mousePressed() {
  if (scene1 == true && mouseX > 0.2*windowWidth && mouseX < 0.4*windowHeight) {
    scene1 = false;
    scene2 = true;
  }
  if (scene2 == true && mouseX > 0.4*windowHeight ){
    scene2 = false; 
    scene3 = true; 
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

