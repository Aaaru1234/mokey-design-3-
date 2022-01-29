
var monkeyrun , mokeyrunImg;
var monkeystand , momkeystandImg;
var modiImg
var potholeImg
var Music
function preload(){
  bgImage = loadImage("bg.jpg");
  monkeyrunImg = loadImage("monkeyrun.png");
  modiImg = loadImage("Modiji.png");
  potholeImg= loadImage("pothole.png");
  music = loadSound("music.mp3");
 
}

function setup(){
  createCanvas(600,1200)
  
bg =createSprite(300,600,600,1200)
bg.addImage("bg",bgImage); 
bg.scale = 3.5
bg.velocityY = 3;

monkeyrun =createSprite(300,500,10,10);
monkeyrun.scale = 0.8
monkeyrun.addImage("monkeyrun",monkeyrunImg);
music.play()
}

function draw(){
  background("white");
 if(bg.y>600)
 {
  bg.y = bg.height/2
 }
 
  spawnmodi()
  spawnpothole()
drawSprites()
}
function spawnmodi(){
if(frameCount%300==0){
modi = createSprite(random(100,500), 0,10,10)
modi.velocityY = 3;
modi.scale = 0.6
modi.addImage("modi",modiImg)
}

}
function spawnpothole(){
  if(frameCount%200==0){
  pothole = createSprite(random(200,400), 0,10,10)
  pothole.velocityY = 2;
  pothole.scale = 0.6
  pothole.addImage("pot",potholeImg);
  }
  
  }