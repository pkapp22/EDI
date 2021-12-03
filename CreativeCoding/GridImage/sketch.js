let img;

function preload(){
img = loadImage ('AIBG/Assets/Snowflake1.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('blue')
  strokeWeight(1);
}

function draw() {
  image (img,0,0);
var num=10
var sideLen = windowWidth/num // variable for the side length of each square

  for (var y=0; y < windowHeight; y=y+sideLen)
  for (var x=0; x < windowWidth; x=x+sideLen)

  quad(x,y,
     x+ sideLen,y,
     x+ sideLen,y+sideLen,
     x,y+sideLen);


  noloop();
}
