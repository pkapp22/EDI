var randDrawing;

function preload() { // all photos 150 pixel width

    img = loadImage('Assets/Snowflake1.png');
    img2 = loadImage('Assets/Snowflake2.png');
    img3 = loadImage('Assets/Snowflake3.png');
    img4 = loadImage('Assets/Snowflake4.png');
    img5 = loadImage('Assets/Snowflake5.png');
    img6 = loadImage('Assets/Snowflake6.png');

}

function setup() { //runs once
    createCanvas(windowWidth, windowWidth);
    noStroke();
    frameRate(.5);

}

function draw() {

    var num = 12; //variable for the number of squares in the array

    var sideLen = windowWidth / num; //variable for the side length of each square

    for (var y = 0; y < windowWidth; y = y + sideLen) { //loop to create rows in the y direction

        for (var x = 0; x < windowWidth; x = x + sideLen) { // loop to create a row of squares in the x direction

            var pics = [img, img1, img2, img3, img4, img5, img6];

            quad(x, y,
                x + sideLen, y,
                x + sideLen, y + sideLen,
                x, y + sideLen);
            image(pics[int(random(0, 5))], x + (sideLen / 2 - 75), y + (sideLen / 2 - 75));

        }

    }
    noLoop();
}
