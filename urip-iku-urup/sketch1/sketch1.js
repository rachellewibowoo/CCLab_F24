let vid;
let playing = true;
let scene1 = true; // default scene (ur landing page now)
let scene2 = false; // the new scene to change into
let scene3 = false; 
let allVideos = ["assets/main.mp4", "assets/2.mp4", "assets/3.mp4"];
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
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch1'); 
}

function draw() {
  background(220);
 
  if (scene1 == true) {
    videoPlay = videos[0].get();
    videos[1].volume(0); 
    videos[2].volume(0);  
  } else if (scene2 == true) {
    videoPlay = videos[1].get();
    videos[1].volume(0.1); 
    videos[0].volume(0); 
    videos[2].volume(0); 
  }
   else if (scene3 == true){
      videoPlay = videos[2].get();
     videos[0].volume(0); 
     videos[1].volume(0); 
     videos[2].volume(0.1); 
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
}
