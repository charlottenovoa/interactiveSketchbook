let steps=0;
let maxSteps=5;
var a = 0

function setup() {
  createCanvas(600,200);
}

function draw() {
  background(220);

  let sectionWidth = width / maxSteps;

  // sections

  noStroke();
  // fill("#00ff00");
  for (let i =0; i<steps; i++) {
    rect(i * sectionWidth, 0, sectionWidth, height);
  }

  if (steps>= maxSteps) {
    fill("#00ff00");

  } else {
    fill("#cd0b0b")
  }

  }

function mousePressed() {
  if (steps < maxSteps) {
    steps += 1;
  }
}

function keyPressed() {
    steps = a;
}




