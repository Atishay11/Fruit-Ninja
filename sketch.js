var sword;
var gameState=1;
var PLAY=1;
var END=0;
function preload(){
  swordImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
   fruit2=loadImage("fruit2.png");
   fruit3=loadImage("fruit3.png");
   fruit4=loadImage("fruit4.png");
  monsterImage=loadImage("alien1.png");
  swordImage1=loadImage("gameover.png")
  gameover=loadSound("gameover.mp3");
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  
}
function setup() {
  createCanvas(400, 400);
  sword=createSprite(200,200,0,0);
sword.addImage("1",swordImage); 
  sword.scale=0.5;
fruitGroup=new Group();
  monsterGroup=new Group();
  score=0;
}

function draw() {
  background("lightBlue");
  if(gameState==PLAY){
    fruits();
  monsters();
    sword.y=World.mouseY;
  sword.x=World.mouseX;
    if(sword.isTouching(fruitGroup)){
 fruitGroup.destroyEach();
      knifeSwooshSound.play();
  score=score+1;
}
  
  else
    {
      if(monsterGroup.isTouching(sword)){
        gameState=END;
        fruitGroup.destroyEach();
        monsterGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        monsterGroup.setVelocityXEach(0);
        gameover.play();
        sword.addImage("1",swordImage1);
      }
    }
  } 
  
  
  
  drawSprites();
   text("Score: "+score, 200,50);
}
function fruits(){
  if(World.frameCount%80==0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4))
      if(r==1){
        fruit.addImage(fruit1);
    fruit.velocityX=-(7+score/2);
        
      }
   else if(r==2){
      fruit.addImage(fruit2);
    fruit.velocityX=-(10+score/2);
     
      
    }
    else if(r==3){
      fruit.addImage(fruit3);
    fruit.velocityX=-(10+score/2);
      
    }
    if(r==4){
      fruit.addImage(fruit4);
    fruit.velocityX=-(10+score/2);
      
    }
    fruit.y=Math.round(random(50,340));
    fruit.setLifetime=100;
    fruitGroup.add(fruit);
  }
}
  

function monsters(){
  if(World.frameCount%200==0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300))
    monster.velocityX=-(10+score/4);
    monster.setLifetime=100;
    monsterGroup.add(monster);
  }
  
}

