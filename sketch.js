var backgroundImg;
var dogImg,dog;
var frogImg,frog;
var penguinImg,penguin;
var button;
var shoppingcart;
var min = 1;
var time = min*60;
var countdown;
var boxImg;
var plant1Img;
var plant2Img;
var plant3Img;
var gameState = 0;
var clicked = false;
var plant1,plant2,plant3

function preload(){

  backgroundImg = loadImage("assets/background.jpg");
  dogImg = loadImage("assets/dog.png");
  boxImg = loadImage("assets/box.jpg");
  plant1Img = loadImage("assets/plant1.jpg");
  plant2Img = loadImage("assets/plant2.jpg");
  plant3Img = loadImage("assets/plant3.jpg");
  frogImg = loadImage("assets/frog.png");
  penguinImg = loadImage("assets/penguin.png");

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  dog = createSprite(width/2+135,height-300,10,10);
  dog.addImage(dogImg);
  dog.scale = 1.5;
  dog.visible = false;

  frog = createSprite(width/2+135,height-300,10,10);
  frog.addImage(frogImg);
  frog.scale = 1.5;
  frog.visible = false;

  penguin = createSprite(width/2+135,height-300,10,10);
  penguin.addImage(penguinImg);
  penguin.scale = 1.5;
  penguin.visible = false;

  button = createImg("assets/clockImg.png");
  button.position(width-444,140);
  button.size(100,100);
  button.mouseClicked(timer);

  shoppingcart = createImg("assets/cart.png");
  shoppingcart.position(5,80);
  shoppingcart.size(150,150);
  

  coinbutton = createImg("assets/goldcoin2.jpg");
  coinbutton.position(210,110);
  coinbutton.size(100,130);


  if(gameState === 0){
    game = new Game();
    game.start();
  }
  imageMode(CENTER);

  
   
  
}

function draw() {

  background(255,255,255); 

  image(backgroundImg,width/2,height/2,width,height) ;

  

  if(time === 0 && gameState == 1){
    button.hide();
    score();
  }

  if(gameState == 2){
    coinbutton.mouseClicked(collectCoins);
  
  }

  if(gameState == 3){
    
    shoppingcart.mouseClicked(shop);
    if(mousePressedOver(plant1)){
      plant1.visible = false;
      gameState = 4;
    }

    
    if(mousePressedOver(plant2)){
      plant2.visible = false;
      gameState = 4;
    }
    
    if(mousePressedOver(plant3)){
      plant3.visible = false;
      gameState = 4;
    }
    //game.final();
   
  }
  if(gameState == 4){
    gameOver();
  }
  drawSprites();
}

function timer(){
   
  game.hide1();
  
  countdown = document.getElementById('countdown1');
  setInterval(updateCountdown,1000)
}

function updateCountdown(){
 const minutes = Math.floor(time/60);
 var sec = time % 60;
 sec = sec<10?'0'+sec:sec;
 countdown.innerHTML = `${minutes}:${sec}`;
 time = time-1;
 time = time<0? 0:time;

}

function shop(){
  var box = createSprite(450,350,20,20);
  box.addImage(boxImg);
  box.scale = 0.5;

  plant1 = createSprite(box.x-200,box.y-100,10,10);
  plant1.addImage(plant1Img);
  plant1.scale = 0.5;
  

  plant2 = createSprite(box.x+200,box.y-100,10,10);
  plant2.addImage(plant2Img);
  plant2.scale = 0.5;

  plant3 = createSprite(box.x,box.y,10,10);
  plant3.addImage(plant3Img);
  plant3.scale = 0.5;


}

function score(){
  gameState = 2;
  swal({
    title: `Collect your coins!`,
    text: "Yupi you made it!!!Click on the coins on the frame to collect",
    imageUrl:
      "assets/goldcoin.gif",
    imageSize: "500x500",
    confirmButtonText: "collect coins"
  });
}

function collectCoins(){
  gameState = 3;
  swal({
    title: `GOOD JOB!`,
    text: "you get 10 coins,click on the shopping cart to choose accessories for the pet",
    imageUrl:
      "assets/goldcoin.gif",
    imageSize: "500x500",
    confirmButtonText: "DONE"
  });
}

function gameOver(){
  gameState=5;
  swal({
    title: `BYE!!!! SEE YOU FOR THE NEXT STUDY TIME`,
   
   
    confirmButtonText: "OK"
  });
}