var canvas, bgImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0
var database;

var form, player, game;
var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;
var track;
var carsAtEnd;
var swimmer, swimmerImg;
var bg1, bg2, bg3;
var bg1img, bg2img, bg3img;

function preload(){

  car1Img = loadImage("../Images/car1.png");
  car2Img = loadImage("../Images/car2.png");
  car3Img = loadImage("../Images/car3.png");
  car4Img = loadImage("../Images/car4.png");

  bg1 = loadImage("../Images/2Full_Background2.png");
  bg2 = loadImage("../Images/Full_Background.png");
  bg3 = loadImage("../Images/water.png");

  swimmerImg =loadAnimation("../Images/tile000.png","../Images/tile001.png","../Images/tile002.png","../Images/tile003.png")

  bgImage = loadImage("../Images/ground.png");
  track = loadImage("../Images/track.jpg")

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("lightblue"); 
  if(playerCount === 4){
    game.update(1);
  } 
  if(gameState === 1){
    clear();
    game.play();
  }
      
  
  if(gameState === 2 && carsAtEnd === 4){
    clear();
    game.displayRanks();
  }

  //drawSprites();
}