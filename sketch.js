var effieltowerImg, effieltower;
var hawkmothImg, hawkmoth, hawkmothGroup;
var ladybug, ladybugImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
    effieltowerImg = loadImage("eiffieltower.png");
    hawkmothImg = loadImage("hawkmoth.png");
    ladybugImg = loadImage("ladybug.png");
    funnySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  effieltower = createSprite(300,300);
  effieltower.addImage("effieltower",effieltowerImg);
  effieltower.velocityY = 1;
  
  ladybug= createSprite(200,200,20,20)
  ladybug.addImage("ladybug",ladybugImg);
  ladybug.scale=0.5

  hawkmothGroup=createGroup()




}

function draw() {
  background(200);
  if(gameState==="play"){
    if(effieltower.y > 400){
         effieltower.y = 300
    }  
    if(keyDown("space")){
        ladybug.velocityY = -10;
    }
    ladybug.velocityY = ladybug.velocityY+0.2
    if(keyDown("left")){
        ladybug.x=ladybug.x-2;
    }
    if(keyDown("right")){
        ladybug.x=ladybug.x+2
    }
    spawnhawkmoth()

    }
  
  drawSprites()
}
function spawnhawkmoth(){
  if(frameCount%240===0){
    hawkmoth=createSprite(100,100,50,50)
    hawkmoth.addImage("hawkmoth",hawkmothImg)

    
    hawkmoth.x=Math.round(random(120,400))
    hawkmoth.velocityY=1


    ladybug.depth=hawkmoth.depth
    ladybug.depth+=1

    hawkmothGroup.add(hawkmoth)





  }
}