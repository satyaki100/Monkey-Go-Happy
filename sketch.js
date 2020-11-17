
var monkey , monkey_running
var banana ,bananaImage
var obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleGround
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(100,355,20,50)
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey.scale = 0.1
  
  ground = createSprite(200,393,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -3
  
  invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  

  
}


function draw() {
  background(255)
  text("Score: "+ score, 250, 100);
  score = score + random(World.frameCount/75);
  
  if(keyDown("space") && monkey.y >= 351.8){
      monkey.velocityY = -20 ;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/20;
    }
  if (monkey.isTouching(FoodGroup)) {
      FoodGroup.destroyEach()
    }
  console.log(monkey.y)
monkey.collide(invisibleGround)
  
  spawnObstacles()
  spawnbanana()
  drawSprites()







  }

function spawnObstacles(){
  if(World.frameCount % 80 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + score/100);
    
    //generate random obstacles
    var rand = random(1,6);
    obstacle.addAnimation("obstacle.png",obstacleImage);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnbanana(){
  
   if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    
   
    banana.y = random(120,200);
    banana.addAnimation("banana.png",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

