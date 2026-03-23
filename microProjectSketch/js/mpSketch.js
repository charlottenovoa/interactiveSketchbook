let pic;
let successImg;
let failImg;

let bites = [];
let maxBites;

let state = "playing"; 

function preload() {
    pic = loadImage("../microProjectSketch/img/neo.png");
    successImg = loadImage("../microProjectSketch/img/popUp2.png"); 
    failImg = loadImage("../microProjectSketch/img/popUp.png"); 
}

function setup() {
    createCanvas(1000, 600);
    imageMode(CENTER);
    textSize(20);

    maxBites = int(random(30, 50));
}

function draw() {
    background(0);

    image(pic, width/2, height/2);

    
    noStroke();
    fill("#f2f2ed");
    for (let b of bites) {
        ellipse(b.x, b.y, 200, 200);
    }


    if (state === "playing") {
        if (isCovered()) {
            state = "success";
        } else if (bites.length >= maxBites) {
            state = "fail";
        }
    }

   
    if (state === "success") {
        drawOverlay();
        image(successImg, width/2, height/2);


    }


    if (state === "fail") {
        drawOverlay();
        image(failImg, width/2, height/2);

    }

   
    if (state === "playing") {
        fill("#4e372e");
        textAlign(CENTER, TOP);
        text("press mouse to bite!", width/2, 40);
    } else {
        textSize(16);
        text("press any key to restart", width/2, height - 40);
    }
}

function mousePressed() {
    if (state === "playing") {
        bites.push({ x: mouseX, y: mouseY });
    }
}

function keyPressed() {
    bites = [];
    state = "playing";
    maxBites = int(random(30, 50));
}

function drawOverlay() {
    fill(0, 150);
    rect(0, 0, width, height);
}

function isCovered() {
    let step = 40;
    let covered = 0;
    let total = 0;

    for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
            total++;

            for (let b of bites) {
                let d = dist(x, y, b.x, b.y);
                if (d < 100) {
                    covered++;
                    break;
                }
            }
        }
    }

    return covered / total > 0.9;
}



  