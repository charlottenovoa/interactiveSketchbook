let bite=0;


function setup() {
    createCanvas(600, 300);
  }
  
  function draw() {
    background(200);
    fill("#df9fb3");
    rect(0, 0, 200, 300);
  
    fill("#faf9eb");
    rect(150, 0, 200, 300);
  
    fill("#4e372e");
    rect(300, 0, 200, 300);

    fill(150);
    ellipse(0,0,200);

    drawSpoon(mouseX, mouseY, 100);
    
    // push();
    // ellipse(155, 150, 20); 
    // rect(150, 155, 10, 50);
    // pop();
    
  
  }

  function drawSpoon() {
    ellipse(155, 150, 20); 
    rect(150, 155, 10, 50);

  }
  

  function mousePressed() {
    bite += 1;
  }