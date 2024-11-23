let img; 
let cam; 
let s = 10; 
function preload(){
    img = loadImage("hokusai.jpg"); 
}

function setup() {
    let canvas = createCanvas(1000, 1000, WEBGL);
    canvas.parent("p5-container");
    cam = createCapture(VIDEO);
    cam.hide(); 

}

function draw() {
    background(0);
    // image(img, 0, 0, width, height); 
    // img.loadPixels(); 
    cam.loadPixels(); 
    for(let x = 0; x < cam.width ; x += s){
    for(let y = 0; y < cam.height; y += s){
        noStroke(); 
        let i = (x + y * cam.width)*4; 
        let r = cam.pixels[i + 0]; 
        let g = cam.pixels[i + 1]; 
        let b = cam.pixels[i + 2]; 
        fill(r, g, b); 
        let br = (r+g+b)/3; 
        let d = dist(mouseX, mouseY, x, y); 
        let circleSize = map(d, 0, width*1.5, 1, 2*s); 
        let angle = map(d, 0, width*1.2, 0, 2*PI); 
        // let z = map(br, 0, 255, 0, 300); 
        push(); 
        // translate(x-width/2, y-height/2, z); 
        translate(x, y); 
        rotate(angle); 
        rect(0, 0, circleSize); 
        pop(); 
    }
}
    // for(let i=0; i<100; i++){
    // let x = int(random(cam.width)); 
    // let y = int(random(cam.height)); 

    // let index = (x + y * cam.width)*4; 
    // let r = cam.pixels[index+0]; 
    // let g = cam.pixels[index+1]; 
    // let b = cam.pixels[index+2]; 
    // // let c = cam.get(x, y); 
    // fill(r, g, b); 
    // push(); 
    // translate(x, y); 
    // noStroke(); 
    // circle(x, y, random(1, 20)); 
    // pop(); 
}

//pixel's index: x + y*width, the first pixel is always 0, 0