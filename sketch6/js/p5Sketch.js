let steps=1;
let maxSteps=2;
var a = 1;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  strokeWeight(30);
  
}

function mousePressed() {
  if (steps < maxSteps) {
    steps += 1;
  }
  
}


function draw() {
  background(0); 

  noStroke();
  for (let i =0; i<steps; i++) {
    ellipse(200, 200, 120);
  }

  if (steps>= maxSteps) {
    fill("#d79fac");

  } else {
    fill("#FFFFFF");
  }

  
}

function keyPressed() {
  steps = a;
}



