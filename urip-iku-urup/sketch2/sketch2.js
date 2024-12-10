let vid;
let playing = true;
let scene1 = true; // default scene (ur landing page now)
let scene2 = false; // the new scene to change into
let scene3 = false; 
let scene4 = false; 
let scene5 = false; 
let scene6 = false; 
let allVideos = ["assets/6.mp4", "assets/7.mp4", "assets/8.mp4", "assets/9.mp4", "assets/10.mp4"];
let videos = [];
let videoPlay;

function preload() {
  // videos.push[i];
  // videos.play();
  for (let i = 0; i < allVideos.length; i++) {
    videos.push(createVideo(allVideos[i]));
    videos[i].size(600, 500);
    videos[i].volume(0.1);
    videos[i].loop();
    videos[i].hide();
  }
}

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent('sketch2'); 

}

function draw() {
  background(220);
 
  if (scene1 == true) {
    videoPlay = videos[0].get();
    videos[1].volume(0); 
    videos[2].volume(0); 
    videos[3].volume(0); 
    videos[4].volume(0); 
 
    
  } else if (scene2 == true) {
    videoPlay = videos[1].get();
    videos[1].volume(0.1); 
    videos[0].volume(0); 
    videos[2].volume(0); 
    videos[3].volume(0); 
    videos[4].volume(0); 
 
  }
   if (scene3 == true){
      videoPlay = videos[2].get();
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(1);
     videos[3].volume(0); 
     videos[4].volume(0); 
  
   }
     else if(scene4 == true){
       videoPlay = videos[3].get();
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0); 
     videos[3].volume(0.1); 
     videos[4].volume(0); 

     }
  
     if (scene5 == true){
      videoPlay = videos[4].get();
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0); 
     videos[3].volume(0); 
     videos[4].volume(0.1); 
    
       
   }
     else if(scene6 == true){
       videoPlay = videos[5].get();
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0); 
     videos[3].volume(0); 
     videos[4].volume(0); 
     videos[5].volume(0.1); 
     }
  
  image(videoPlay, 0, 0);
}

function mousePressed() {
  if (scene1 == true && mouseX > 200 && mouseX < 400) {
    scene1 = false;
    scene2 = true;
  }
  if (scene2 == true && mouseX > 400 ){
    scene2 = false; 
    scene3 = true; 
  }
  if (scene3 == true && mouseX > 400 && mouseY < 200 ){
    scene3 = false; 
    scene4 = true; 
  }
  if (scene4 == true && mouseX < 300 && mouseY < 300){
    scene4 = false; 
    scene5 = true; 
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
