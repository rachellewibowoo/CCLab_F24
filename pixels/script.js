let img; 
function preload(){
    img = loadImage("hokusai.jpg"); 
}

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent("p5-container");

}

function draw() {
    background(220);
    image(img, 0, 0, width, height); 
}
