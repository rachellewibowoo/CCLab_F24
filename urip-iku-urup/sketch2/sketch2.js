let playing = true;
let scene1 = true; // default scene (ur landing page now)
let scene2 = false; // the new scene to change into
let scene3 = false; 
let scene4 = false; 
let scene5 = false; 
let scene6 = false; 
let allVideos = ["../assets/6.mp4", "../assets/7.mp4", "../assets/9.mp4", "../assets/8.mp4", "../assets/10.mp4"];
let videos = [];
let videoPlay;

function preload() {
  // videos.push[i];
  // videos.play();
  for (let i = 0; i < allVideos.length; i++) {
    videos.push(createVideo(allVideos[i]));
    // videos[i].size(600, 500);
    videos[i].volume(0.1);
    videos[i].loop();
    videos[i].hide();
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  background(255);

}

function draw() {
//   fill(0, 1);
//   text("loading... click anywhere on the screen to make it load faster", width/2-100, height/2);
  

 
  if (scene1 == true) {
    videoPlay = videos[0];
    videos[1].volume(0); 
    videos[2].volume(0); 
    videos[3].volume(0); 
    videos[4].volume(0); 
 
    
  } else if (scene2 == true) {
    videoPlay = videos[1];
    videos[1].volume(0.1); 
    videos[0].volume(0); 
    videos[2].volume(0); 
    videos[3].volume(0); 
    videos[4].volume(0); 
 
  }
   if (scene3 == true){
      videoPlay = videos[2];
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(1);
     videos[3].volume(0); 
     videos[4].volume(0); 
  
   }
     else if(scene4 == true){
       videoPlay = videos[3];
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0); 
     videos[3].volume(0.1); 
     videos[4].volume(0); 

     }
  
     if (scene5 == true){
      videoPlay = videos[4];
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0); 
     videos[3].volume(0); 
     videos[4].volume(0.1); 
    
       
   }
     else if(scene6 == true){
       videoPlay = videos[5];
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0); 
     videos[3].volume(0); 
     videos[4].volume(0); 
     videos[5].volume(0.1); 
     }
  videoPlay.play();
  image(videoPlay, 0, 0, width, height);
}

function mousePressed() {
    if (scene1 == true && mouseX > 0.4*6*width && mouseX < 0.7*6*width) {
      scene1 = false;
      scene2 = true;
    } else if (scene2 == true && mouseX > 0.7*6*width && mouseY > 0.5*8*height) {
      scene2 = false;
      scene3 = true;
    } else if (scene3 == true && mouseX > 0.7*6*width && mouseY < 0.5*8*height) {
      scene3 = false;
      scene4 = true;
    } else if (scene4 == true && mouseX < 0.4*6*width && mouseY < 0.6*8*height) {
      scene4 = false;
      scene5 = true;
    }
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
//   if (scene3 == true && mouseX > 400 && mouseY < 200 ){
//     scene3 = false; 
//     scene4 = true; 
//   }
//   if (scene4 == true && mouseX < 300 && mouseY < 300){
//     scene4 = false; 
//     scene5 = true; 
//   }

// }

// function mousePressed() {
//     if (scene1 == true && mouseX > 0.2 * windowWidth && mouseX < 0.4 * windowWidth) {
//       scene1 = false;
//       scene2 = true;
//     }
//     if (scene2 == true && mouseX > 0.4 * windowWidth) {
//       scene2 = false; 
//       scene3 = true; 
//     }
//     if (scene3 == true && mouseX > 0.4 * windowWidth && mouseY < 0.2 * windowHeight) {
//       scene3 = false; 
//       scene4 = true; 
//     }
//     if (scene4 == true && mouseX < 0.3 * windowWidth && mouseY < 0.3 * windowHeight) {
//       scene4 = false; 
//       scene5 = true; 
//     }
//   }


function windowResized() {
    // Resize the canvas whenever the window or container is resized
    resizeCanvasToParent(windowWidth, windowHeight);
}

function resizeCanvasToParent() {
    // Get the size of the parent div
    const parent = canvas.parent();
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    // Resize the canvas to match the parent div's dimensions
    resizeCanvas();
}