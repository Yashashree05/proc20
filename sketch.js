var bgImg;
var cat,catimg1,catimg2,catimg3,catimg4 ;
var mouse, mouseimg1, mouseimg2, mouseimg3, mouseimg4;

function preload() {
    //load the images here
    bgImg = loadImage ("garden.png") ;
    catimg1 = loadAnimation ("images/cat1.png");
    mouseimg1 = loadAnimation ("images/mouse1.png")
    catimg2 = loadAnimation ("images/cat2.png");
    catimg3 = loadAnimation ("images/cat3.png");
    catimg4 = loadAnimation ("images/cat4.png");
    mouseimg2 = loadAnimation ("images/mouse2.png");
    mouseimg3 = loadAnimation ("images/mouse3.png");
    mouseimg4 = loadAnimation ("images/mouse4.png");
     


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
   cat = createSprite(900,100,60,30);
   cat.addAnimation = catimg1;
   cat.scale = 0.5;

   mouse = createSprite(900,100,20,40);
   mouse.addAnimation = mouseimg1;
   mouse.scale = 0.3;



}

function draw() {

    background("bgImg");


if (cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    //Write condition here to evalute if tom and jerry collide
    cat.addAnimation("catRunning", catimg2);
    cat.changeAnimation("catRunning");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

}

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

    }
}
