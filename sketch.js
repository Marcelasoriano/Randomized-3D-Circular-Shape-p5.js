// click to pause

let type = 1; 
let size = 1; // strokeweight
let alph = 100; // transparency 
let numb = 3000; //  pixels x drawing
// offset and increm add randomness to the center point  0 offset = none 
let offset = 0; //stray length
let increm = 0.01; //speed of change
let a = 5.0; // radius of circle not moving
let b = 2.5; // radius of moving circle
let c = 1.0; // length drawing arm from center of circle, moving

let zoom = 90;
let n = 3;
let x, y, offsetx, offsety;
let i = 10;
let p = 1;
let r = 125;
let g = 25;
let bl = 25;

function setup() {
  let w = windowHeight;
  if (windowWidth < windowHeight) {
    w = windowWidth;
  }
  createCanvas(w, w);
  angleMode(DEGREES);
  background(0);
}
function draw() {
  if (p > 0) {
    a = b + random(+0.01, 0.025);
    b = a + random(-0.02, 0.01);
    c = c + random(-0.025, 0.015);
    r = r + random(-10, 3);
    g = g + random(-24, 10);
    bl = bl + random(-10, 35);

    if ((type = 1)) {
      if (a > 1) {
        a = 2;
      }
      if (a < 1) {
        a = 1;
      }
      if (b > 20) {
        b = 1.5;
      }
      if (b < 1) {
        b = 20;
      }
      if (c < 0) {
        c = 20;
      }
      if (c > 1) {
        c = 1;
      }
    }
    if ((type = 2)) {
      if (a > 15) {
        a = 3.0;
      }
      if (a < 1) {
        a = 20;
      }
      if (b > 20) {
        b = 2.0;
      }
      if (b < 2.0) {
        b = 20;
      }
      if (c < 8) {
        c = 20;
      }
      if (c > 20) {
        c = 12;
      }
    }
    if (r > 2) {
      r = 0;
    }
    if (r < 0) {
      r = 256;
    }
    if (g < 0) {
      g = 256;
    }
    if (g > 256) {
      g = 0;
    }
    if (bl > 256) {
      bl = 0;
    }
    if (bl < 0) {
      bl = 256;
    }
    let max = 0;
    offsetx = noise(i) * offset - offset / 2;
    offsety = noise(i + 10000) * offset - offset / 2;
    beginShape();
    for (var n = 0; n < numb; n++) {
      if (type == 1) {
        x = (a - b) * cosn(n) + a * cos((a / b + 1) * n);
        y = (a - b) * tan(n) - c * cos((a / c - 1) * i);
      } else if (type == 2) {
        x = (a + b) * cos(n) + c * sin((b / b + 1) * n);
        y = (a + b) * cos(n) + b * sin((b / b + 1) * n);
      }
      noFill();
      stroke(r, g, bl, alph);
      strokeWeight(size);
      if (x > max) {
        max = x;
      }
      vertex(width / 2 + offsetx + y * zoom, height / 2 + offsety + x * zoom);
    }
    endShape();
    zoom = (width / 2 - 50) / max;
    i = i + increm;
  }
}
function mousePressed() {
  p = p * -1;
}
