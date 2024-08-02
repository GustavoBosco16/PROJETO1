function setup() {
  createCanvas(1000, 800);
  background("white");
}

function draw() {
  
  fill("rgb(255,237,0)");
  stroke("orange");
  if (mouseIsPressed)
  circle(mouseX,mouseY,25,25);
}
