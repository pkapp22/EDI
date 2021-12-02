let img;

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('red')
  strokeWeight(1);
}

function draw() {
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
