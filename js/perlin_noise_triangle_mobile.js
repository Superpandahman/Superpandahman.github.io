let spacing;
let l = 0.35;
let scl = 0.1;
let speed = 0.00001;
let xoff, yoff;
let zoff = 0;

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight*.5).parent('artwork-container');
  spacing = min(width, height) / 20; // Adjust the divisor as needed
}

function draw() {
  background(255);
  stroke(0);
  let yoff = 0;
  for (let j = 0; j < height/ spacing; j++) {
    let xoff = 0;
    for (let i = 0; i < width / spacing; i++) {
      let angle = map(noise(xoff, yoff, zoff), 0, 1, 0, TWO_PI);
      let a = i * spacing;
      let b = j * spacing;

      let v1 = createVector(a + spacing / 2, b + spacing / 2);
      let v2 = createVector(cos(angle) * spacing * l, sin(angle) * spacing * l);
      let v3 = createVector(cos(angle + PI) * spacing * l, sin(angle + PI) * spacing * l);

      let theta = atan2(mouseY - v1.y, mouseX - v1.x);
      let v4 = createVector(cos(theta) * spacing * l, sin(theta) * spacing * l);
      v2.add(v1);
      v3.add(v1);
      v4.add(v1);
      noFill();
      line(v2.x, v2.y, v3.x, v3.y);
      line(v2.x, v2.y, v4.x, v4.y);
      line(v3.x, v3.y, v4.x, v4.y);

      xoff += scl;
      zoff += speed;
    }
    yoff += scl;
  }
}

function windowResized() {
  // Resize the canvas when the window is resized
  resizeCanvas(windowWidth, windowHeight);
  spacing = min(800, 600) / 20; // Adjust the divisor as needed
}
