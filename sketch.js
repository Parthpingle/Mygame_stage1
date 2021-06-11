var space,spaceImage;

function preload(){
  spaceImage = loadImage("background.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight-100);
  space = createSprite(displayWidth/2,displayHeight/2);
  space.addImage("spaceImage",spaceImage);
  space.scale = 3;
  space.velocityY = 1;
}

function draw() {
  background(0);  
  if(space.y>(displayHeight-200)){
    space.y = displayHeight/2;
  }
  drawSprites();
}