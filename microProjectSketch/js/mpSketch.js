let images = [];
let currentIndex = 0;

function preload() {
    images[0] = loadImage("../microProjectSketch/img/neopolitan.png");
    images[1] = loadImage("../microProjectSketch/img/neopolitan1.png");
    images[2] = loadImage("../microProjectSketch/img/neopolitan2.png");
    images[3] = loadImage("../microProjectSketch/img/neopolitan3.png");
    images[4] = loadImage("../microProjectSketch/img/neopolitan4.png");
    images[5] = loadImage("../microProjectSketch/img/neopolitan5.png");
    images[6] = loadImage("../microProjectSketch/img/neopolitan6.png");
    images[7] = loadImage("../microProjectSketch/img/neopolitan7.png");


}

function setup() {
    createCanvas(600,300);
    textSize(16);

}

function draw() {
    background(0);

    let img = images[currentIndex];
    image(img, 0, 0);

    fill("#4e372e");
    textAlign(CENTER, TOP);
    textSize(20);
    text("press mouse to bite!", width/2, 20);

}

function mousePressed() {
        currentIndex++;
        if(currentIndex >= images.length) {
            currentIndex = 0;
        }
}
  