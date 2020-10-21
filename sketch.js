var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  score=0;
   var survivalTime=0;

  
}


function draw() {
background(600,600)
  
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
 
  stroke("blue");
  textSize(20);
  fill("blue");
  text("score :" + score,200,150);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime :" + survivalTime,100,50)

  

  
  
  Food();  
  obstacle();
  
  drawSprites();
  
}

function Food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
  
    }
}

function obstacle() {
  if (frameCount % 300 === 0) {
 var   obstacle = createSprite(280,490,190,100);
    obstacle.addImage(obstacleImage);
    obstacle.y = Math.round(random(300,200));
    obstacle.scale = 0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime = 250;
  
    }
}



