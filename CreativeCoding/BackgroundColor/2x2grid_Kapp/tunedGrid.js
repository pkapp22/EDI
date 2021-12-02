let img;

function preload(){
img=loadImage('2x2grid_Kapp/square2.png')
}

function setup() {
  createCanvas(windowWidth, windowWidth);
  fill('red')
  strokeWeight(1);
}

function draw() {
var num=2
var sideLen = windowWidth/num // variable for the side length of each square

  image(img,0,0);

  for (var y=0; y < windowWidth; y=y+sideLen)
  for (var x=0; x < windowWidth; x=x+sideLen)

  quad(x,y,
     x+ sideLen,y,
     x+ sideLen,y+sideLen,
     x,y+sideLen);


  noloop();
}
