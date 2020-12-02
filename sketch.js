var square1, square2;
function setup() {
  createCanvas(800,400);
  square1 = createSprite(400, 200, 50, 50);
  square2 = createSprite(500, 300, 50, 50)
  square3 = createSprite(100, 100, 200, 50);
  square3.velocityY = 1;

  square1.velocityY = -5;
  square1.velocityX = -8;
}

function draw() {
  background(0);  
  //square1.x = World.mouseX;
  //square1.y = World.mouseY;
  square1.shapeColor = "white";
  square2.shapeColor = "white";
  square3.shapeColor = "white";
  if(isTouchingAlgorithm(square1, square3)){

      square1.shapeColor = "red";
      square3.shapeColor = "red";

  }

  bounceOffAlgorithm(square1, square3);
  drawSprites();
}
