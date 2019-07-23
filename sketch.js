let x = 0;
let y = 0;
let speed;
let speedY;

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
    x = 300;
    y = 30;
    speed = 25;
    speedY = 50;

}

function draw(){
    //background(0,0,0);
    fill(255, 50, 255);
    circle(x, y, 10);



     if (x > 600){
         x -= speed;
         
         speed = -speed;

    } else if (x < 0){
        x -= speed;
        speed = -speed;
    }

    if (y > 600){
        y -= speedY;
        speedY = -speedY;
    }else if (y < 0){
        y -= speedY;
        speedY = -speedY;
    }

    x += speed;
    y += speedY;

}


