class Game {
    constructor() {
        this.playButton = createImg("assets/frog.png");
        this.playButton2 = createImg("assets/dog.png");
        this.playButton3 = createImg("assets/penguin.png")

    this.greeting = createElement("h2");
    this.greeting1 = createElement("h2");

    this.price1 = createElement("h4");
    this.price2 = createElement("h4");
    this.price3 = createElement("h4");
    }
  
    start() {
      
        this.playButton.position(width / 2 +30, height -100);
        this.playButton.size(100,100);

        this.playButton2.position(width / 2 + 130 , height -100);
        this.playButton2.size(100,100);

        this.playButton3.position(width / 2 +230, height -100);
        this.playButton3.size(100,100);


        this.greeting.position(width / 2-300 , height / 2-250);
        this.greeting.class("greeting")

        this.price1.position(box.x-200,box.y-80);
        this.price2.position(box.x+200,box.y-80);
        this.price2.position(box.x,box.y+20);


        var message = `Welcome to study time<br>Choose your pet !!!`;
        this.greeting.html(message);

        this.handleMousePressed();
        this.handleMousePressed1();
        this.handleMousePressed2();

       
    }
    hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.greeting1.hide();
      
      }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
     
      this.playButton.hide();
      this.playButton3.hide();      
      this.playButton2.hide();
      this.greeting.hide();
      gameState = 1;
      frog.visible = true;

      var message1 = `Click on the Clock to start the timer!!!`;
      

      this.greeting1.position(width / 2-30, height -90);
      this.greeting1.class("greeting")
      this.greeting1.html(message1);
      clicked = true;
    
    });
}

handleMousePressed1() {
    this.playButton2.mousePressed(() => {
     
      this.playButton2.hide();
      this.playButton3.hide();
      this.playButton.hide();
      this.greeting.hide();
      gameState = 1;
     // bunny.x=100;
      dog.visible = true;

      var message1 = `Click on the Clock to start the timer!!!`;
      

      this.greeting1.position(width / 2-30 , height -90);
      this.greeting1.class("greeting")
      this.greeting1.html(message1);

      clicked = true;

      
    });
  
}

hide1(){
  this.greeting1.hide();
}

handleMousePressed2() {
  this.playButton3.mousePressed(() => {
   
    this.playButton3.hide();
    this.playButton2.hide();
    this.playButton.hide();
    this.greeting.hide();
    gameState = 1;
    //bunny.x=100;
    penguin.visible = true;

    var message1 = `Click on the Clock to start the timer!!!`;
      

    this.greeting1.position(width / 2-30 , height -90);
    this.greeting1.class("greeting")
    this.greeting1.html(message1);

    clicked = true;
  });
}

 final(){
  this.price1.html("10 coins")
  this.price2.html("10 coins")
  this.price3.html("10 coins")
 }
}