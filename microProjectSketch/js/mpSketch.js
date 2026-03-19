let pic;
let img;
let bites = [];
let maxBites;

function preload() {
    pic = loadImage("../microProjectSketch/img/neo.png");
    img = loadImage("../microProjectSketch/img/popUp.png"); 
}

function setup() {
    createCanvas(1000, 600);
    imageMode(CENTER);
    textSize(20);

    maxBites = int(random(10, 30));
}

function draw() {
    background(0);

    image(pic, width/2, height/2);


    noStroke();
    fill("#f2f2ed");
    for (let b of bites) {
        ellipse(b.x, b.y, 200, 200);
    }

    if (bites.length >= maxBites) {
        image(img, width/2, height/2);
    }

    fill("#4e372e");
    textAlign(CENTER, TOP);
    text("press mouse to bite!", width/2, 40);
}

function mousePressed() {
    if (bites.length < maxBites) {
        bites.push({ x: mouseX, y: mouseY });
    }
}

function keyPressed() {
    bites = [];
}




  