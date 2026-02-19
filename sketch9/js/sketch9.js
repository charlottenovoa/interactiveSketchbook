let images = [];
let currentIndex = 0;

function preload() {
    images[0] = loadImage("../sketch8/img/image1.png");
    images[1] = loadImage("../sketch8/img/image2.png");
    images[2] = loadImage("../sketch8/img/image3.png");
    images[3] = loadImage("../sketch8/img/image4.png");
    images[4] = loadImage("../sketch8/img/image5.png");

}

function setup() {
    createCanvas(windowWidth,windowHeight);
    imageMode(CENTER);

}

function draw() {
    background(0);

    let img = images[currentIndex];
    image(img, windowWidth/2, windowHeight/2);

    fill(255);
    textAlign(CENTER, TOP);
    textSize(24);
    text("State" + (currentIndex + 1) + "/" + images.length, width/2, 20);

    textSize(16);
    text("use left and right arrows to navigate", width/2, 50);

}

function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        currentIndex++;
        if(currentIndex >= images.length) {
            currentIndex = 0;
        }
    }

    if(keyCode === LEFT_ARROW) {
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = images.length-1;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}