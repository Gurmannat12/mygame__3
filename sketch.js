const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ship;
var fire;
var alien;
var alien1Img;
var alien2Img;
var alien3Img;
var alien4Img;
var alien5Img;
var shipImg;
var fireImg;
var spaceImg;
var fireGroup;
var alien1Group;
var alien2Group;
var alien3Group;
var alien4Group;
var alien5Group;
var divisionHeight=300;
var f1Sound;
var s1Sound;
var s2Sound;

var score = 0;

function preload()
{
    alien1Img = loadImage("a1.png");
    alien2Img = loadImage("a2.png");
    alien3Img = loadImage("a3.png");
    alien4Img = loadImage("a4.png");
    alien5Img = loadImage("a5.png");

    shipImg = loadImage("ufo.png");
    fireImg = loadImage("fire.png");
    spaceImg = loadImage("space.png");

    f1Sound = loadSound("s1.mp3");
    s1Sound = loadSound("s2.mp3");
    s2Sound = loadSound("s3.mp3");
}

function setup() {
  createCanvas(655,1000);

  engine = Engine.create();
  world = engine.world;
  
  ship = createSprite(380,820,50);
  ship.addImage(shipImg);
  ship.scale=0.5;
  
  fireGroup=new Group();
  alien1Group=new Group();
  alien2Group=new Group();
  alien3Group=new Group();
  alien4Group=new Group();
  alien5Group=new Group();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(spaceImg);
  fill("white");
  stroke("white");
  textSize(20);
  text("Score:"+score,550,50);
  
  spawnAliens1();
  spawnAliens2();
  spawnAliens3();
  spawnAliens4();
  spawnAliens5();
  
  if(keyIsDown(RIGHT_ARROW)){
      ship.x += 10;
  }

  if(keyIsDown(LEFT_ARROW)){
      ship.x -= 10;
  }

  if (keyDown("space")) {
    createFire();
  }
  
  //100
  
  // if(score>10){
  //   s1Sound.play();
  // }

  if(score===20)
    {
      stroke("white");
      textSize(40);
      text("CONGRATULATIONS",150,200);
      
      stroke("white");
      textSize(30);
      text("YOU WON",250,240);

      alien1Group.destroyEach();
      alien2Group.destroyEach();
      alien3Group.destroyEach();
      alien4Group.destroyEach();
      alien5Group.destroyEach();
      ship.destroy();
      s1Sound.play();
      stopSound();
      
    }
  
  if (fireGroup.isTouching(alien1Group)){
  fireGroup.destroyEach();
  alien1Group.destroyEach(); 
  s2Sound.play();
  score = score+2;
 }
  
  if (fireGroup.isTouching(alien2Group)){
  fireGroup.destroyEach();
  alien2Group.destroyEach(); 
  s2Sound.play();
  score = score+2;
 }
  
  if (fireGroup.isTouching(alien3Group)){
  fireGroup.destroyEach();
  alien3Group.destroyEach(); 
  s2Sound.play();
  score = score+2;
 }
  
  if (fireGroup.isTouching(alien4Group)){
  fireGroup.destroyEach();
  alien4Group.destroyEach(); 
  s2Sound.play();
  score = score+2;
 }
  
  if (fireGroup.isTouching(alien5Group)){
  fireGroup.destroyEach();
  alien5Group.destroyEach();
  s2Sound.play(); 
  score = score+2;
 }
  
  ship.display();
  drawSprites();
 
}

function spawnAliens1(){
 if (frameCount % 70 === 0){
   var a1 = createSprite(65,100,10,10);
   a1.velocityY = 4;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: a1.addImage(alien1Img);
              break;
              
      case 2: a1.addImage(alien2Img);
              break;
      
      default: break;
    }
             
    a1.scale = 0.2;
    //alien.lifetime = 180;
    alien1Group.add(a1);
 }
}

function spawnAliens2(){
 if (frameCount % 90 === 0){
   var a2 = createSprite(195,100,10,10);
   a2.velocityY = 4;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: a2.addImage(alien3Img);
              break;
              
      case 2: a2.addImage(alien4Img);
              break;
      
      default: break;
    }
             
    a2.scale = 0.2;
    //alien.lifetime = 180;
    alien2Group.add(a2);
 }
}

function spawnAliens3(){
 if (frameCount % 110 === 0){
   var a3 = createSprite(325,100,10,10);
   a3.velocityY = 4;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: a3.addImage(alien5Img);
              break;
              
      case 2: a3.addImage(alien1Img);
              break;
      
      default: break;
    }
             
    a3.scale = 0.2;
    //alien.lifetime = 180;
    alien3Group.add(a3);
 }
}

function spawnAliens4(){
 if (frameCount % 130 === 0){
   var a4 = createSprite(455,100,10,10);
   a4.velocityY = 4;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: a4.addImage(alien4Img);
              break;
              
      case 2: a4.addImage(alien2Img);
              break;
      
      default: break;
    }
             
    a4.scale = 0.2;
    //alien.lifetime = 180;
    alien4Group.add(a4);
 }
}

function spawnAliens5(){
 if (frameCount % 90 === 0){
   var a5 = createSprite(585,100,10,10);
   a5.velocityY = 4;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: a5.addImage(alien5Img);
              break;
              
      case 2: a5.addImage(alien3Img);
              break;
      
      default: break;
    }
             
    a5.scale = 0.2;
    //alien.lifetime = 180;
    alien5Group.add(a5);
 }
}

function createFire() {
    var fire= createSprite(100, 100, 60, 10);
    fire.addImage(fireImg);
    fire.y = 800;
    fire.x=ship.x;
    fire.velocityY = -5;
    fire.lifetime = 200;
    fire.scale = 0.2;
    fireGroup.add(fire); 
    return fire;
  }

