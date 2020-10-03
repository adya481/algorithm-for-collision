var fixedrectangle,movingrectangle



function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400,200,100,80);
movingrectangle=createSprite(600,200,30,80);
movingrectangle.shapeColor="green";
fixedrectangle.shapeColor="green";
fixedrectangle.debug=true;
movingrectangle.debug=true;
}

function draw() {
  background(0);  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;

if (movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 && 
  fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 && 
  movingrectangle.y-fixedrectangle.y<fixedrectangle.width/2+movingrectangle.width/2 && 
  fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2 ){
  movingrectangle.shapeColor="red";
  fixedrectangle.shapeColor="red";
}
else {
  movingrectangle.shapeColor="green";
  fixedrectangle.shapeColor="green";
}

  

  drawSprites();
}