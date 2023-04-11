var char,charImage;
var keeper1,keeper2;
var wall1,wall2;
var goal;
var score = 0;

function preload() {
  charImage = loadImage("character.png");
}

function setup() {
  createCanvas(800,400);
  char = createSprite(100,190,30,30);
  goal = createSprite(750,195,20,190);

  wall1 = createSprite(450,75,900,20);
  wall2 = createSprite(450,325,900,20);
  keeper1 = createSprite(250,125,30,30);
  keeper2 = createSprite(450,275,30,30);
}

function draw() {
  background(15,255,50);
  push();
  fill("white");
  stroke("black");
  strokeWeight(6);
  textSize(50);
  text("Points: " + score + " /50", 250, 50);
  pop();

  char.addImage(charImage);
  char.scale=0.75;

  char.bounceOff(wall1);
  char.bounceOff(wall2);

  if (char.isTouching(keeper1) || char.isTouching(keeper2)){
    score = 0;
    char.x = 100;
    char.y = 190;
    char.velocityX = 0;
    char.velocityY = 0;
  }

  if (char.isTouching(goal)){
    score += 1;
    char.x = 100;
    char.y = 190;
    char.velocityX = 0;
    char.velocityY = 0;
  }

if (score <= 10) {

  if (keyIsDown(UP_ARROW)){
    char.x -= 10;
    char.y -=10;
  }
  if (keyIsDown(RIGHT_ARROW)){
    char.velocityX = 15;
    char.velocityY = 6;
  }
}
if (score > 10 && score <= 20) {

  if (keyIsDown(UP_ARROW)){
    char.x -= 20;
    char.y -= 20;
  }
  if (keyIsDown(RIGHT_ARROW)){
    char.velocityX = 15;
    char.velocityY = -6;
  }
}
if (score > 20 && score <= 30) {

  if (keyIsDown(UP_ARROW)){
    char.velocityX = 15;
    char.velocityY = 6;
  }
  if (keyIsDown(RIGHT_ARROW)){
    char.x -= 10;
    char.y -= 10;
  }
}
if (score > 30 && score <= 40) {

  if (keyIsDown(UP_ARROW)){
    char.velocityX = 15;
    char.velocityY = -6;
  }
  if (keyIsDown(RIGHT_ARROW)){
    char.x -= 20;
    char.y -= 20;
  }
}
if (score > 40 && score < 50) {

  if (keyIsDown(UP_ARROW)){
    char.x -= 20;
    char.y -= 20;
  }
  if (keyIsDown(RIGHT_ARROW)){
    char.x += 20;
    char.y += 20;
  }
}
if (score === 50) {
  fill("white");
  stroke("black");
  strokeWeight(6);
  textSize(100);
  text("YOU WIN!", 200, 225);
}
  drawSprites();
}