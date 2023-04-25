var canvas;
var  player2;
var player1, player1running,player_1_wating;
var run1,defeat1Img,punch1Img,punched1Img;
var run2,defeat2Img,punch2Img,punched2Img;
var run1,defeat1,punch1,punched1;
var run2,defeat2,punch2,punched2;
var backgroundimage;
var database, gameState;
var playerCount, form, player;
var player1Img,player2Img;
var allPlayers;
var players = [];


function preload(){

  //player1 = loadAnimation("esperando1.png");
  //player1running = loadAnimation("corriendo1_1.png","corriendo2_1.png");

  player1running = loadAnimation('../assets/corriendo1_1.png','../assets/corriendo1_2.png');
  //player_1_wating = loadAnimation("esperando1.png");
 
backgroundimage = loadImage("/assets/fondo.png");
player1Img = loadImage("/assets/esperando1.png");
defeat1Img = loadImage("/assets/derrota1.png");
punch1Img = loadImage("/assets/golpeando1.png");
punched1Img = loadImage("/assets/golpeado1.png");
//run1 = loadImage("/assets/corriendo1_1.png");
//run2 = loadImage("/assets/corriendo2_1.png");

player2Img = loadImage("/assets/esperando2.png");
defeat2Img = loadImage("/assets/derrota2.png");
punch2Img = loadImage("/assets/golpeador2.png");
punched2Img = loadImage("/assets/golpeado2.png");


} 

function setup(){
  player1 = createSprite(212,320);
  player1.addAnimation("running", player1running);
  //player1.addAnimation("wating", player_1_wating);
  player1.addImage("wating",player1Img);
  //player1.addAnimation("running",run1an);
  player1.scale=0.5;
  player1.shapeColor="red";
  
  

}



function draw() {
  createCanvas (850,500)
  background(backgroundimage);

  if (keyDown("RIGHT_ARROW")) {
    player1.velocityX = +10;
    //player1.addImage(run1);
    //player1.changeAnimation("running");
    
  }else{
    player1.velocityX = 0;
    //player1.addImage(player1Img);
  }
  if (keyDown("LEFT_ARROW")) {
    player1.velocityX = -10;
    //player1.addImage(run2);
  }

  /*if(keyDown("space")){
    player1.velocity.x=-5
  }*/
  
  drawSprites();
}