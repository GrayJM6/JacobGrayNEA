function setup(){
    createCanvas(800,800);
    background(175,238,238)
  }
  function draw(){
    let titleBox;
    let SGBox;
    let randfBox;
    let lBoardBox;
  
    fill(70,130,180)
    titleBox = rect(50,75,700,100);
    fill(255)
    textSize(50);
    text("JS.Chess",290,145)
  
    fill(70,130,180)
    SGBox = rect(25,400,230,200);
    randfBox = rect(285,400,230,200)
    lBoardBox = rect(545,400,230,200)
  
    fill(255);
    textSize(30);
    text("Start Game", 55, 500)
    text("Rules and \nFeatures", 320, 490)
    text("Leaderboard", 570, 500)

    fill(70,130,180)
    rect(0,750,100,50);
    fill(255)
    textSize(20)
    text('Log Out', 10, 780)
   
  }
  function mousePressed(){
    if(mouseX>25 && mouseX<245 && mouseY>400 && mouseY<600){
      window.location.href = "startGame.html"
    }
    else if(mouseX>285 && mouseX<485 && mouseY>400 && mouseY<600){
      window.location.href = "rules.html"
    }
    else if(mouseX>545 && mouseX<745 && mouseY>400 && mouseY<600){
      window.location.href = "leaderboard.html"
    }
    else if(mouseX>0 && mouseX<100 && mouseY>750 && mouseY<800){
      window.location.href = "index.html"
    }
  }