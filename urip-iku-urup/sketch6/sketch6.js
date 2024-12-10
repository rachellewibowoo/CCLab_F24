function setup() {

    let canvas = createCanvas(w, h);
    canvas.parent("sketch6"); 

    // Webcam setup
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function () {
        console.log('capture ready.');
    });
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

    // Video setup
    vid = createVideo("assets/13.mp4");
    vid.size(w, h); // Full canvas video
    vid.volume(0.1);
    vid.loop();
    vid.hide();
}

function draw() {
    background(220);

    // Display video as the background
    let img = vid.get();
    image(img, 0, 0, w, h); // Full canvas video

    // Display webcam feed on top, centered, with padding
    let camWidth = w / 2; // Half the canvas width
    let camHeight = h / 2; // Half the canvas height
    let camX = (w - camWidth) / 2; // Centered horizontally
    let camY = (h - camHeight) / 2 + 30; // Centered vertically
    image(capture, camX, camY, camWidth, camHeight);

    // Face tracking
    var positions = tracker.getCurrentPosition();

    noFill();
    stroke(255);

        // Center face message
        let noseTip = positions[62];
        if (noseTip) {
            let noseX = camX + noseTip[0] * (camWidth / w);
            let noseY = camY + noseTip[1] * (camHeight / h);

            let centerX = camX + camWidth / 2;
            let centerY = camY + camHeight / 2;

            let tolerance = 20; // Adjust for smaller camera size
            if (dist(noseX, noseY, centerX, centerY) > tolerance) {
                fill(255, 0, 0);
                textAlign(CENTER, CENTER);
                textSize(20);
                text("SMILEE!", centerX, centerY - 80);
            } else {
                fill(0, 255, 0);
                textAlign(CENTER, CENTER);
                textSize(20);
                text("yay!!", centerX, centerY - 80);
            }
        }
    }


function mousePressed() {
    if (playing) {
        vid.pause();
    } else {
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