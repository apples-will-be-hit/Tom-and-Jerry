var canvas;
var garden;
var tom, jerry;
var tomImg1, tomImg2,tomImg3, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    garden=loadImage("images/garden.png");

    tomImg1=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png", "images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");

    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
  canvas=  createCanvas(1000,800);
    tom=createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale=0.2;

    jerry=createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale=0.1;
}

function draw() {

    background(garden);
     
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomLast",tomImg3);
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("tomLast");

        jerry.addAnimation("jerryLast",jerryImg2);
        jerry.scale=0.1;
        jerry.changeAnimation("jerryLast");

    }
    
    drawSprites();
}

function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomRunning", tomImg2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryTeasing");
}
 


}
