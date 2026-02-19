let posX;
let posY;

let distance;
let threshold = 100;


function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    
    posX = 200;
    posY = 200;
  }

  function draw() {
    background(205, 11, 11);
    
    rect(posX, posY, 50, 50);

    fill(123, 181, 110)
    
    distance = dist(mouseX, mouseY, posX, posY);
    
    if (distance < threshold) {
      if (mouseX < posX) {
        posX = posX + 1;
      } else if (mouseX > posX) {
        posX = posX - 1;
      }
      
      if (mouseY < posY) {
        posY = posY + 1;
      } else if (mouseY > posY) {
        posY = posY - 1;
      }
    }
  }