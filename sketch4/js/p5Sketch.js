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
  fill("#00ff00");
  for (let i =0; i<steps; i++) {
    rect(i * sectionWidth, 0, sectionWidth, height);
  }

  if (steps>= maxSteps) {
    textSize(16);
    fill(0);
    text("Task:Complete", width -150, height -20);

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




