
let inc = 0.01;
let scl = 10;
let cols, rows;
let fr;
let zoff = 0;
let particles = [];

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  cols = floor(width /scl);
  rows = floor(height /scl);
  fr = createP('');
  
   for (let i = 0; i < 100; i++){
     particles[i] = new Particle(0);
   }
  
}

function draw() {
  background(255)
  let yoff = 0;
  loadPixels();
  
  //rows
  for (let y = 0; y < rows; y++){
    let xoff = 0;
    
    //columns
    for (let x = 0; x < cols; x++){
    let index = ( x + y * width) * 4;
    let angle = noise(xoff, yoff, zoff) * TWO_PI;
    let v = p5.Vector.fromAngle(angle);
    xoff += inc;
    
    //drawing moving dots
    stroke(0);
    push();
    translate(x * scl, y * scl);
    rotate(v.heading());
    line(0, 0, scl, 0);
    pop();
    
    }  
    yoff += inc;
    zoff += 0.005;
  }
  
  particles[0].update();
  particles[0].show();
  fr.html(floor(frameRate()))
}