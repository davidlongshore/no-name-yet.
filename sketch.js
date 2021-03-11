var movingRect
var nonMovingRect
function setup() {
  createCanvas(800,400);
  nonMovingRect=createSprite(400, 200, 50, 50);
  nonMovingRect.shapeColor="green";
  movingRect=createSprite(600, 200, 80, 50);
  movingRect.shapeColor="green";
  movingRect.velocityX=-5;
  nonMovingRect.velocityX=5
}

function draw() {
  background(255,255,255);
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  //console.log(movingRect.x-nonMovingRect.x);
  if(movingRect.x-nonMovingRect.x<movingRect.width/2+nonMovingRect.width/2
    &&nonMovingRect.x-movingRect.x<movingRect.width/2+nonMovingRect.width/2
    &&nonMovingRect.y-movingRect.y<movingRect.height/2+nonMovingRect.height/2
    &&movingRect.y-nonMovingRect.y<movingRect.height/2+nonMovingRect.height/2)
  {
    movingRect.shapeColor="red";
    nonMovingRect.shapeColor="red";
    movingRect.velocityX=movingRect.velocityX*(-1);
    nonMovingRect.velocityX=nonMovingRect.velocityX*(-1);
  }
  else
  {
    movingRect.shapeColor="green";
    nonMovingRect.shapeColor="green";
  }
  drawSprites();
}