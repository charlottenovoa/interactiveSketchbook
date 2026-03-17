let steps=0;
let maxSteps=10;
let pic;
let img;

function preload() {
    pic = loadImage("../microProjectSketch/img/neo.JPEG");
    // img = loadImage("../microProjectSketch/img/overlay.PNG");



}

function setup() {
    createCanvas(1000,600);
    textSize(16);

    imageMode(CENTER);

    


}

function draw() {
    background(0);

    image(pic, width/2, height/2);
    image(img, width/2, height/2);

//     fill("#4e372e");
//     textAlign(CENTER, TOP);
//     textSize(20);
//     text("press mouse to bite!", width/2, 20);
//   }

}

function mousePressed() {
    if (steps < maxSteps) {
        steps += 1;
      }
      
    fill("#848484");
    noStroke();
    ellipse(mouseX, mouseY, 150, 150); 
}

if (steps = 10) {
    fill("#8968a2");
    rect(400, 300, width/2, height/2);
    
    

    fill("#4e372e");
    textAlign(CENTER);
    textSize(20);
    text("I'm Full!", width/2, height/2);
//   }
}



  