var particles = [];

function setup() {
  createCanvas(1000, 1000, WEBGL);
  noStroke();
  smooth();
  frameRate(200);
  background(0);

}

function draw() {
  

  if (frameCount % 1 == 0) {
    particles.push(new Particle);
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();

    if (particles[i].yPos < 100) {
      particles.splice(i, 1);
    }

  }

}

function Particle() {
  this.xPos = (random(800) - 400);
  this.cSize = 100;
  this.yPos = (random(800) - 600);
  this.cColor = random(255);
  this.cSpeed = random(50);

  this.display = function () {
    fill(random(200), random(255), random(255));
    this.cSize = map(this.yPos, 0, height, 100, 255)
    this.yPos = this.yPos - this.cSpeed;
    this.xPos = this.xPos * this.cSpeed;
    this.cSpeed = map(this.yPos, 0, height, 0, 20)    
    box(this.xPos, this.yPos, this.xPos, this.yPos);
    rotate(5);
  }
}