function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  strokeWeight(30);
  
}

function mouseDragged() {
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function draw() {
  background(0); 

  ellipse(mouseX, mouseY, 120, 20, 40);
  rect(mouseX, -mouseY, 140, 300, 40);
  quad(-mouseX, -mouseY, 130, 250, 40, 40)
  triangle (-mouseX, mouseY, 130, 130, 130, 50)

  

}