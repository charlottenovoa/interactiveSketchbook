function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  noStroke();
  describe(
    'Horizontal stripes fading between light green at the top and dark blue at the bottom. The top stripe is labeled Color A, and the bottom stripe is labeled Color B.'
  );

  let colorA = color(205, 11, 11);


  let colorB = color(122, 180, 213);

  let stripeCount = 20;

  let stripeHeight = height / stripeCount;

  for (let y = 0; y < height; y += stripeHeight) {

    let fadeAmount = y / height;

    let betweenColor = lerpColor(colorA, colorB, fadeAmount);

    fill(betweenColor);
    rect(0, y, width, stripeHeight);
  }
}

function draw () {
  rect(mouseX, mouseY, 400, 20)
}