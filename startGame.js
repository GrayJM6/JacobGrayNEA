let board;
let gameOverLoss = false;
let gameOverWin = false;
let inCheck = false;

let bPawn1, bPawn2, bPawn3, bPawn4,bPawn5,bPawn6,bPawn7,bPawn8;
let wPawn1, wPawn2, wPawn3, wPawn4,wPawn5,wPawn6,wPawn7,wPawn8;
let bPawnImg, wPawnImg;

let bKing, wKing, bKingImg, wKingImg;
let bRook1, bRook2, wRook1, wRook2, bRookImg, wRookImg;
let bBishop1, bBishop2, wBishop1, wBishop2, bBishopImg, wBishopImg;
let bQueen, wQueen, bQueenImg, wQueenImg;
let bKnight1, bKnight2, wKnight1, wKnight2, bKnightImg, wKnightImg



function endGame(){
  if(gameOverLoss == true){
    window.location.href = "endGameLoss.html"
  }
  else if(gameOverWin == true){
    window.location.href = "endGameWin.html"
  }
}

function preload(){
  bPawnImg = loadImage("pawnB2.png")
  wPawnImg = loadImage("pawnW2.png")

  bKingImg = loadImage("kingB2.png")
  wKingImg = loadImage("kingW2.png")

  bRookImg = loadImage("rookB2.png")
  wRookImg = loadImage("rookW2.png")

  bBishopImg = loadImage("bishopB2.png")
  wBishopImg = loadImage("bishopW2.png")

  bQueenImg = loadImage("queenB2.png")
  wQueenImg = loadImage("queenW2.png")

  bKnightImg = loadImage("knightB2.png")
  wKnightImg = loadImage("knightW2.png")
}

//bPawn x pos
let xPos1 = 80;
let xPos2 = 160;
let xPos3 = 240;
let xPos4 = 320;
let xPos5 = 400;
let xPos6 = 480;
let xPos7 = 560;
let xPos8 = 640;

//bPawn y pos
let yPos1 = 160;
let yPos2 = 160;
let yPos3 = 160;
let yPos4 = 160;
let yPos5 = 160;
let yPos6 = 160;
let yPos7 = 160;
let yPos8 = 160;

//wPawn x pos
let wxPos1 = 80;
let wxPos2 = 160;
let wxPos3 = 240;
let wxPos4 = 320;
let wxPos5 = 400;
let wxPos6 = 480;
let wxPos7 = 560;
let wxPos8 = 640;

//wPawn y pos
let wyPos1 = 560;
let wyPos2 = 560;
let wyPos3 = 560;
let wyPos4 = 560;
let wyPos5 = 560;
let wyPos6 = 560;
let wyPos7 = 560;
let wyPos8 = 560;

//bKing pos
let bKxPos = 400;
let bKyPos = 80;

//wKing pos
let wKxPos = 400;
let wKyPos = 640;

//bRook pos
let bRxPos1 = 80;
let bRyPos1 = 80;
let bRxPos2 = 640;
let bRyPos2 = 80;

//wRook pos
let wRxPos1 = 80;
let wRyPos1 = 640;
let wRxPos2 = 640;
let wRyPos2 = 640;

//bBishop pos
let bBxPos1 = 240;
let bByPos1 = 80;
let bBxPos2 = 480;
let bByPos2 = 80;

//wBishop pos
let wBxPos1 = 240;
let wByPos1 = 640;
let wBxPos2 = 480;
let wByPos2 = 640;

//bQueen pos
let bQxPos = 320;
let bQyPos = 80;

//wQueen pos
let wQxPos = 320;
let wQyPos = 640;

//bKnight pos
let bKnxPos1 = 160;
let bKnyPos1 = 80;
let bKnxPos2 = 560;
let bKnyPos2 = 80;

//wKnight pos
let wKnxPos1 = 160;
let wKnyPos1 = 640;
let wKnxPos2 = 560;
let wKnyPos2 = 640;

//number of moves made by player
let moveCount = 0;
//number of player pieces left
let playerPiece = 16;
//number of AI pieces left
let AIPiece = 16;

function setup() {
  createCanvas(800,800);
  background(175,238,238)
}

function draw() {
    fill(70,130,180)
    rect(0,750,100,50)
    fill(255);
    textSize(20)
    text('Go Back', 10, 780)

    

    endGame();

    //board
    //boarder
    fill(68,25,82)
    rect(60,60,680,680)
    //coordinates
    fill(255)
    text("A", 113, 78)
    text("B", 193, 78)
    text("C", 273, 78)
    text("D", 353, 78)
    text("E", 433, 78)
    text("F", 513, 78)
    text("G", 593, 78)
    text("H", 673, 78)

    text("8", 65, 120)
    text("7", 65, 200)
    text("6", 65, 280)
    text("5", 65, 360)
    text("4", 65, 440)
    text("3", 65, 520)
    text("2", 65, 600)
    text("1", 65, 680)
    


    //spaces
    strokeWeight(2);
    for(let k = 0; k<8  ; k++){
      for(let e=0; e<8;e++){

        if(k%2 == 0){
          if(e%2 == 0){
            fill(247,95,253);
            rect(80 + 80*k, 80 + 80*e, 80, 80);
          }
          else if(e%2 == 1){
            fill(208, 73, 253);
            rect(80 + 80*k, 80 + 80*e, 80, 80);
          }
        }
        else if(k%2 == 1){
          if(e%2 == 1){
            fill(247,95,253);
            rect(80 + 80*k, 80 + 80*e, 80, 80);
          }
          else if(e%2 == 0){
            fill(208, 73, 253);
            rect(80 + 80*k, 80 + 80*e, 80, 80);
          }
        }
      }
    }

    //selection highlighting
    fill(255,169,40)
    
    if(highlight == 1){
      rect(hlsx, hlsy, 80,  80)
    }

//potential move highlighting:

    if(highlight == 1 && bp1pressed == 1){
      //when bPawn1 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos2 && hlsy + 80 == yPos2) || (hlsx == xPos3 && hlsy + 80 == yPos3) || 
        (hlsx == xPos4 && hlsy + 80 == yPos4) || (hlsx == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx == xPos6 && hlsy + 80 == yPos6) || (hlsx == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn1SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos2 && hlsy + 160 == yPos2) || (hlsx == xPos3 && hlsy + 160 == yPos3) || 
            (hlsx == xPos4 && hlsy + 160 == yPos4) || (hlsx == xPos5 && hlsy + 160 == yPos5) || 
            (hlsx == xPos6 && hlsy + 160 == yPos6) || (hlsx == xPos7 && hlsy + 160 == yPos7) 
            || (hlsx == xPos8 && hlsy + 160 == yPos8) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }

    if(highlight == 1 && bp2pressed == 1){
      //when bPawn2 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos1 && hlsy + 80 == yPos1) || (hlsx == xPos3 && hlsy + 80 == yPos3) || 
        (hlsx == xPos4 && hlsy + 80 == yPos4) || (hlsx == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx == xPos6 && hlsy + 80 == yPos6) || (hlsx == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn2SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos1 && hlsy + 160 == yPos1) || (hlsx == xPos3 && hlsy + 160 == yPos3) || 
            (hlsx == xPos4 && hlsy + 160 == yPos4) || (hlsx == xPos5 && hlsy + 160 == yPos5) || 
            (hlsx == xPos6 && hlsy + 160 == yPos6) || (hlsx == xPos7 && hlsy + 160 == yPos7) || 
            (hlsx == xPos8 && hlsy + 160 == yPos8) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }
    if(highlight == 1 && bp3pressed == 1){
      //when bPawn3 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos1 && hlsy + 80 == yPos1) || (hlsx == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx == xPos4 && hlsy + 80 == yPos4) || (hlsx == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx == xPos6 && hlsy + 80 == yPos6) || (hlsx == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn3SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos1 && hlsy + 160 == yPos1) || (hlsx == xPos2 && hlsy + 160 == yPos2) || 
            (hlsx == xPos4 && hlsy + 160 == yPos4) || (hlsx == xPos5 && hlsy + 160 == yPos5) || 
            (hlsx == xPos6 && hlsy + 160 == yPos6) || (hlsx == xPos7 && hlsy + 160 == yPos7) || 
            (hlsx == xPos8 && hlsy + 160 == yPos8) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }
    if(highlight == 1 && bp4pressed == 1){
      //when bPawn4 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos1 && hlsy + 80 == yPos1) || (hlsx == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx == xPos3 && hlsy + 80 == yPos3) || (hlsx == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx == xPos6 && hlsy + 80 == yPos6) || (hlsx == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn4SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos1 && hlsy + 160 == yPos1) || (hlsx == xPos2 && hlsy + 160 == yPos2) || 
            (hlsx == xPos3 && hlsy + 160 == yPos3) || (hlsx == xPos5 && hlsy + 160 == yPos5) || 
            (hlsx == xPos6 && hlsy + 160 == yPos6) || (hlsx == xPos7 && hlsy + 160 == yPos7) || 
            (hlsx == xPos8 && hlsy + 160 == yPos8) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }
    if(highlight == 1 && bp5pressed == 1){
      //when bPawn5 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos1 && hlsy + 80 == yPos1) || (hlsx == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx == xPos3 && hlsy + 80 == yPos3) || (hlsx == xPos4 && hlsy + 80 == yPos4) || 
        (hlsx == xPos6 && hlsy + 80 == yPos6) || (hlsx == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn5SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos1 && hlsy + 160 == yPos1) || (hlsx == xPos2 && hlsy + 160 == yPos2) || 
            (hlsx == xPos3 && hlsy + 160 == yPos3) || (hlsx == xPos4 && hlsy + 160 == yPos4) || 
            (hlsx == xPos6 && hlsy + 160 == yPos6) || (hlsx == xPos7 && hlsy + 160 == yPos7) || 
            (hlsx == xPos8 && hlsy + 160 == yPos8) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }
    if(highlight == 1 && bp6pressed == 1){
      //when bPawn6 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos1 && hlsy + 80 == yPos1) || (hlsx == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx == xPos3 && hlsy + 80 == yPos3) || (hlsx == xPos4 && hlsy + 80 == yPos4) || 
        (hlsx == xPos5 && hlsy + 80 == yPos5) || (hlsx == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn6SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos1 && hlsy + 160 == yPos1) || (hlsx == xPos2 && hlsy + 160 == yPos2) || 
            (hlsx == xPos3 && hlsy + 160 == yPos3) || (hlsx == xPos4 && hlsy + 160 == yPos4) || 
            (hlsx == xPos5 && hlsy + 160 == yPos5) || (hlsx == xPos7 && hlsy + 160 == yPos7) || 
            (hlsx == xPos8 && hlsy + 160 == yPos8) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }
    if(highlight == 1 && bp7pressed == 1){
      //when bPawn7 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos1 && hlsy + 80 == yPos1) || (hlsx == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx == xPos3 && hlsy + 80 == yPos3) || (hlsx == xPos4 && hlsy + 80 == yPos4) || 
        (hlsx == xPos5 && hlsy + 80 == yPos5) || (hlsx == xPos6 && hlsy + 80 == yPos6) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn7SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos1 && hlsy + 160 == yPos1) || (hlsx == xPos2 && hlsy + 160 == yPos2) || 
            (hlsx == xPos3 && hlsy + 160 == yPos3) || (hlsx == xPos4 && hlsy + 160 == yPos4) || 
            (hlsx == xPos5 && hlsy + 160 == yPos5) || (hlsx == xPos6 && hlsy + 160 == yPos6) || 
            (hlsx == xPos8 && hlsy + 160 == yPos8) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }
    if(highlight == 1 && bp8pressed == 1){
      //when bPawn8 selected
      fill(238, 193, 108)
        checkPawnSP()
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == bKxPos && hlsy + 80 == bKyPos) || 
        (hlsx == xPos1 && hlsy + 80 == yPos1) || (hlsx == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx == xPos3 && hlsy + 80 == yPos3) || (hlsx == xPos4 && hlsy + 80 == yPos4) || 
        (hlsx == xPos5 && hlsy + 80 == yPos5) || (hlsx == xPos6 && hlsy + 80 == yPos6) || 
        (hlsx == xPos7 && hlsy + 80 == yPos7) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2) || (hlsx == wQxPos && hlsy + 80 == wQyPos) || 
        (hlsx == wKxPos && hlsy + 80 == wKyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          // cant highlight space
        } 
        else{
          rect(hlsx, hlsy + 80, 80,80)
          if(bPawn8SP == true){
            if((hlsx == bQxPos && hlsy + 160 == bQyPos) || (hlsx == bKxPos && hlsy + 160 == bKyPos) || 
            (hlsx == xPos1 && hlsy + 160 == yPos1) || (hlsx == xPos2 && hlsy + 160 == yPos2) || 
            (hlsx == xPos3 && hlsy + 160 == yPos3) || (hlsx == xPos4 && hlsy + 160 == yPos4) || 
            (hlsx == xPos5 && hlsy + 160 == yPos5) || (hlsx == xPos6 && hlsy + 160 == yPos6) || 
            (hlsx == xPos7 && hlsy + 160 == yPos7) || (hlsx == bRxPos1 && hlsy + 160 == bRyPos1) || 
            (hlsx == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 160 == bByPos1) || 
            (hlsx == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 160 == bKnyPos1) || 
            (hlsx == bKnxPos2 && hlsy + 160 == bKnyPos2) || (hlsx == wQxPos && hlsy + 160 == wQyPos) || 
            (hlsx == wKxPos && hlsy + 160 == wKyPos) || (hlsx == wxPos1 && hlsy + 160 == wyPos1) || 
            (hlsx == wxPos2 && hlsy + 160 == wyPos2) || (hlsx == wxPos3 && hlsy + 160 == wyPos3) || 
            (hlsx == wxPos4 && hlsy + 160 == wyPos4) || (hlsx == wxPos5 && hlsy + 160 == wyPos5) || 
            (hlsx == wxPos6 && hlsy + 160 == wyPos6) || (hlsx == wxPos7 && hlsy + 160 == wyPos7) || 
            (hlsx == wxPos8 && hlsy + 160 == wyPos8) || (hlsx == wRxPos1 && hlsy + 160 == wRyPos1) || 
            (hlsx == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 160 == wByPos1) || 
            (hlsx == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 160 == wKnyPos1) || 
            (hlsx == wKnxPos2 && hlsy + 160 == wKnyPos2)){
              // cant highlight space
            } 
            else{
              rect(hlsx, hlsy + 160, 80,80)
            }
          }
        }
      
    }

    //when king selected
    if(highlight == 1 && bKpressed == 1){
      fill(238, 193, 108)
      //highlight left
      if(hlsx>=160){
        if((hlsx - 80 == bQxPos && hlsy == bQyPos) || (hlsx - 80 == xPos1 && hlsy == yPos1) || 
        (hlsx - 80 == xPos2 && hlsy == yPos2) || (hlsx - 80 == xPos3 && hlsy == yPos3) || 
        (hlsx - 80 == xPos4 && hlsy == yPos4) || (hlsx - 80 == xPos5 && hlsy == yPos5) || 
        (hlsx - 80 == xPos6 && hlsy == yPos6) || (hlsx - 80 == xPos7 && hlsy == yPos7) || 
        (hlsx - 80 == xPos8 && hlsy == yPos8) || (hlsx - 80 == bRxPos1 && hlsy == bRyPos1) || 
        (hlsx - 80 == bRxPos2 && hlsy == bRyPos2) || (hlsx - 80 == bBxPos1 && hlsy == bByPos1) || 
        (hlsx - 80 == bBxPos2 && hlsy == bByPos2) || (hlsx - 80 == bKnxPos1 && hlsy == bKnyPos1) || 
        (hlsx - 80 == bKnxPos2 && hlsy == bKnyPos2) ||
        (hlsx - 80 == wQxPos && hlsy == wQyPos) || (hlsx - 80 == wxPos1 && hlsy == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy == wyPos2) || (hlsx - 80 == wxPos3 && hlsy == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy == wyPos4) || (hlsx - 80 == wxPos5 && hlsy == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy == wyPos6) || (hlsx - 80 == wxPos7 && hlsy == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy == wKnyPos2) || (hlsx - 80 == wKxPos && hlsy == wKyPos)){
          //cant highlight space
        }
        else{
        rect(hlsx - 80, hlsy, 80,  80)
        }
      }
      //highlight right
      if(hlsx<640){
        if((hlsx + 80 == bQxPos && hlsy == bQyPos) || (hlsx + 80 == xPos1 && hlsy == yPos1) || 
        (hlsx + 80 == xPos2 && hlsy == yPos2) || (hlsx + 80 == xPos3 && hlsy == yPos3) || 
        (hlsx + 80 == xPos4 && hlsy == yPos4) || (hlsx + 80 == xPos5 && hlsy == yPos5) || 
        (hlsx + 80 == xPos6 && hlsy == yPos6) || (hlsx + 80 == xPos7 && hlsy == yPos7) || 
        (hlsx + 80 == xPos8 && hlsy == yPos8) || (hlsx + 80 == bRxPos1 && hlsy == bRyPos1) || 
        (hlsx + 80 == bRxPos2 && hlsy == bRyPos2) || (hlsx + 80 == bBxPos1 && hlsy == bByPos1) || 
        (hlsx + 80 == bBxPos2 && hlsy == bByPos2) || (hlsx + 80 == bKnxPos1 && hlsy == bKnyPos1) || 
        (hlsx + 80 == bKnxPos2 && hlsy == bKnyPos2) || 
        (hlsx + 80 == wQxPos && hlsy == wQyPos) || (hlsx + 80 == wxPos1 && hlsy == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy == wyPos2) || (hlsx + 80 == wxPos3 && hlsy == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy == wyPos4) || (hlsx + 80 == wxPos5 && hlsy == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy == wyPos6) || (hlsx + 80 == wxPos7 && hlsy == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy == wKnyPos2) || (hlsx + 80 == wKxPos && hlsy == wKyPos)){
          //cant highlight space
        }
        else{
        rect(hlsx + 80, hlsy, 80,  80)
        }
      }
      //highlight up
      if(hlsy>=160){
        if( (hlsx == bQxPos && hlsy - 80 == bQyPos) || (hlsx == xPos1 && hlsy - 80 == yPos1) || 
        (hlsx == xPos2 && hlsy - 80 == yPos2) || (hlsx == xPos3 && hlsy - 80 == yPos3) || 
        (hlsx == xPos4 && hlsy - 80 == yPos4) || (hlsx == xPos5 && hlsy - 80 == yPos5) || 
        (hlsx == xPos6 && hlsy - 80 == yPos6) || (hlsx == xPos7 && hlsy - 80 == yPos7) || 
        (hlsx == xPos8 && hlsy - 80 == yPos8) || (hlsx == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy - 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy - 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy - 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy - 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy - 80 == bKnyPos2) || 
        (hlsx == wQxPos && hlsy - 80 == wQyPos) || (hlsx == wxPos1 && hlsy - 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy - 80 == wyPos2) || (hlsx == wxPos3 && hlsy - 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy - 80 == wyPos4) || (hlsx == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy - 80 == wyPos6) || (hlsx == wxPos7 && hlsy - 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy - 80 == wyPos8) || (hlsx == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy - 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy - 80 == wKnyPos2) || (hlsx == wKxPos && hlsy - 80 == wKyPos)){
          //cant highlight space
        }
        else{
          rect(hlsx, hlsy - 80, 80,  80)
        }
      }
      //highlight down
      if(hlsy<640){
        if((hlsx == bQxPos && hlsy + 80 == bQyPos) || (hlsx == xPos1 && hlsy + 80 == yPos1) || 
        (hlsx == xPos2 && hlsy + 80 == yPos2) || (hlsx == xPos3 && hlsy + 80 == yPos3) || 
        (hlsx == xPos4 && hlsy + 80 == yPos4) || (hlsx == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx == xPos6 && hlsy + 80 == yPos6) || (hlsx == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx == xPos8 && hlsy + 80 == yPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx == bKnxPos2 && hlsy + 80 == bKnyPos2)  || 
        (hlsx == wQxPos && hlsy + 80 == wQyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2) || (hlsx == wKxPos && hlsy + 80 == wKyPos)){
          //cant highlight space
        }
        else{
          rect(hlsx, hlsy + 80, 80,  80)
        }
      }
      //highlight top left
      if(hlsx>=160 && hlsy>=160){
        if((hlsx - 80 == bQxPos && hlsy - 80 == bQyPos) || (hlsx - 80 == xPos1 && hlsy - 80 == yPos1) || 
        (hlsx - 80 == xPos2 && hlsy - 80 == yPos2) || (hlsx - 80 == xPos3 && hlsy - 80 == yPos3) || 
        (hlsx - 80 == xPos4 && hlsy - 80 == yPos4) || (hlsx - 80 == xPos5 && hlsy - 80 == yPos5) || 
        (hlsx - 80 == xPos6 && hlsy - 80 == yPos6) || (hlsx - 80 == xPos7 && hlsy - 80 == yPos7) || 
        (hlsx - 80 == xPos8 && hlsy - 80 == yPos8) || (hlsx - 80 == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx - 80 == bRxPos2 && hlsy - 80 == bRyPos2) || (hlsx - 80 == bBxPos1 && hlsy - 80 == bByPos1) || 
        (hlsx - 80 == bBxPos2 && hlsy - 80 == bByPos2) || (hlsx - 80 == bKnxPos1 && hlsy - 80 == bKnyPos1) || 
        (hlsx - 80 == bKnxPos2 && hlsy - 80 == bKnyPos2) || 
        (hlsx - 80 == wQxPos && hlsy - 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy - 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy - 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy - 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy - 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy - 80 == wyPos8) || (hlsx - 80 == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy - 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy - 80 == wKnyPos2) || (hlsx - 80 == wKxPos && hlsy - 80 == wKyPos)){
          //cant highlight space
        }
        else{
          rect(hlsx-80, hlsy-80,80,80)
        }
      }
      //highlight bottom right
      if(hlsx<640 && hlsy<640){
        if((hlsx + 80 == bQxPos && hlsy + 80 == bQyPos) || (hlsx + 80 == xPos1 && hlsy + 80 == yPos1) || 
        (hlsx + 80 == xPos2 && hlsy + 80 == yPos2) || (hlsx + 80 == xPos3 && hlsy + 80 == yPos3) || 
        (hlsx + 80 == xPos4 && hlsy + 80 == yPos4) || (hlsx + 80 == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx + 80 == xPos6 && hlsy + 80 == yPos6) || (hlsx + 80 == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx + 80 == xPos8 && hlsy + 80 == yPos8) || (hlsx + 80 == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx + 80 == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx + 80 == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx + 80 == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx + 80 == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx + 80 == bKnxPos2 && hlsy + 80 == bKnyPos2) || 
        (hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2) || (hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          //cant highlight space
        }
        else{
          rect(hlsx+80, hlsy+80,80,80)
        }
      }
      //highlight top right
      if(hlsx<640 && hlsy>=160){
        if((hlsx + 80 == bQxPos && hlsy - 80 == bQyPos) || (hlsx + 80 == xPos1 && hlsy - 80 == yPos1) || 
        (hlsx + 80 == xPos2 && hlsy - 80 == yPos2) || (hlsx + 80 == xPos3 && hlsy - 80 == yPos3) || 
        (hlsx + 80 == xPos4 && hlsy - 80 == yPos4) || (hlsx + 80 == xPos5 && hlsy - 80 == yPos5) || 
        (hlsx + 80 == xPos6 && hlsy - 80 == yPos6) || (hlsx + 80 == xPos7 && hlsy - 80 == yPos7) || 
        (hlsx + 80 == xPos8 && hlsy - 80 == yPos8) || (hlsx + 80 == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx + 80 == bRxPos2 && hlsy - 80 == bRyPos2) || (hlsx + 80 == bBxPos1 && hlsy - 80 == bByPos1) || 
        (hlsx + 80 == bBxPos2 && hlsy - 80 == bByPos2) || (hlsx + 80 == bKnxPos1 && hlsy - 80 == bKnyPos1) || 
        (hlsx + 80 == bKnxPos2 && hlsy - 80 == bKnyPos2) || 
        (hlsx + 80 == wQxPos && hlsy - 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy - 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy - 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy - 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy - 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy - 80 == wyPos8) || (hlsx + 80 == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy - 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy - 80 == wKnyPos2) || (hlsx + 80 == wKxPos && hlsy - 80 == wKyPos)){
          //cant highlight space
        }
        else{
          rect(hlsx+80, hlsy-80,80,80)
        }
      }
      //highlight bottom left
      if(hlsx>=160 && hlsy<640){
        if((hlsx - 80 == bQxPos && hlsy + 80 == bQyPos) || (hlsx - 80 == xPos1 && hlsy + 80 == yPos1) || 
        (hlsx - 80 == xPos2 && hlsy + 80 == yPos2) || (hlsx - 80 == xPos3 && hlsy + 80 == yPos3) || 
        (hlsx - 80 == xPos4 && hlsy + 80 == yPos4) || (hlsx - 80 == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx - 80 == xPos6 && hlsy + 80 == yPos6) || (hlsx - 80 == xPos7 && hlsy + 80 == yPos7) || 
        (hlsx - 80 == xPos8 && hlsy + 80 == yPos8) || (hlsx - 80 == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx - 80 == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx - 80 == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx - 80 == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx - 80 == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx - 80 == bKnxPos2 && hlsy + 80 == bKnyPos2)  || 
        (hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2) || (hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          //cant highlight space
        }
        else{
          rect(hlsx-80, hlsy+80,80,80)
        }
      }
    }
    
    //when bKnight1 selected
    if(highlight == 1 && bKn1pressed == 1){
      fill(238, 193, 108)
      //highlight top left (-1,-2)
      if(hlsx-80>=80 && hlsy-160>=80){
        if((hlsx - 80 == bQxPos && hlsy - 160 == bQyPos) || (hlsx - 80 == xPos1 && hlsy - 160 == yPos1) || (hlsx - 80 == xPos2 && hlsy - 160 == yPos2) || 
        (hlsx - 80 == xPos3 && hlsy - 160 == yPos3) || (hlsx - 80 == xPos4 && hlsy - 160 == yPos4) || (hlsx - 80 == xPos5 && hlsy - 160 == yPos5) || 
        (hlsx - 80 == xPos6 && hlsy - 160 == yPos6) || (hlsx - 80 == xPos7 && hlsy  - 160 == yPos7) || (hlsx - 80 == xPos8 && hlsy - 160 == yPos8) || 
        (hlsx - 80 == bRxPos1 && hlsy - 160 == bRyPos1) || (hlsx - 80 == bRxPos2 && hlsy - 160 == bRyPos2) || (hlsx - 80 == bBxPos1 && hlsy - 160 == bByPos1) || 
        (hlsx - 80 == bBxPos2 && hlsy - 160 == bByPos2) || (hlsx - 80 == bKxPos && hlsy - 160 == bKyPos) || (hlsx - 80 == bKnxPos2 && hlsy - 160 == bKnyPos2) ||
        (hlsx - 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy - 160 == wyPos2) || 
        (hlsx - 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy - 160 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy - 160 == wyPos8) || 
        (hlsx - 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx - 80 == wKxPos && hlsy - 160 == wKyPos) || (hlsx - 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
        (hlsx - 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-80, hlsy-160, 80,80)
        }
      }
    
        //highlight top right (1,-2)
      if(hlsx<640 && hlsy-160>=80){
        if((hlsx + 80 == bQxPos && hlsy - 160 == bQyPos) || (hlsx + 80 == xPos1 && hlsy - 160 == yPos1) || (hlsx + 80 == xPos2 && hlsy - 160 == yPos2) || 
        (hlsx + 80 == xPos3 && hlsy - 160 == yPos3) || (hlsx + 80 == xPos4 && hlsy - 160 == yPos4) || (hlsx + 80 == xPos5 && hlsy - 160 == yPos5) || 
        (hlsx + 80 == xPos6 && hlsy - 160 == yPos6) || (hlsx + 80 == xPos7 && hlsy  - 160 == yPos7) || (hlsx + 80 == xPos8 && hlsy - 160 == yPos8) || 
        (hlsx + 80 == bRxPos1 && hlsy - 160 == bRyPos1) || (hlsx + 80 == bRxPos2 && hlsy - 160 == bRyPos2) || (hlsx + 80 == bBxPos1 && hlsy - 160 == bByPos1) || 
        (hlsx + 80 == bBxPos2 && hlsy - 160 == bByPos2) || (hlsx + 80 == bKxPos && hlsy - 160 == bKyPos) || (hlsx + 80 == bKnxPos2 && hlsy - 160 == bKnyPos2) ||
        (hlsx + 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy - 160 == wyPos2) || 
        (hlsx + 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy - 160 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy - 160 == wyPos8) || 
        (hlsx + 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx + 80 == wKxPos && hlsy - 160 == wKyPos) || (hlsx + 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
        (hlsx + 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+80, hlsy-160, 80,80)
        }
      }

        //highlight bottom right (1,2)
      if(hlsx<640 && hlsy<560){
        if((hlsx + 80 == bQxPos && hlsy + 160 == bQyPos) || (hlsx + 80 == xPos1 && hlsy + 160 == yPos1) || (hlsx + 80 == xPos2 && hlsy + 160 == yPos2) || 
        (hlsx + 80 == xPos3 && hlsy + 160 == yPos3) || (hlsx + 80 == xPos4 && hlsy + 160 == yPos4) || (hlsx + 80 == xPos5 && hlsy + 160 == yPos5) || 
        (hlsx + 80 == xPos6 && hlsy + 160 == yPos6) || (hlsx + 80 == xPos7 && hlsy  + 160 == yPos7) || (hlsx + 80 == xPos8 && hlsy + 160 == yPos8) || 
        (hlsx + 80 == bRxPos1 && hlsy + 160 == bRyPos1) || (hlsx + 80 == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx + 80 == bBxPos1 && hlsy + 160 == bByPos1) || 
        (hlsx + 80 == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx + 80 == bKxPos && hlsy + 160 == bKyPos) || (hlsx + 80 == bKnxPos2 && hlsy + 160 == bKnyPos2)  ||
        (hlsx + 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy + 160 == wyPos2) || 
        (hlsx + 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 160 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy + 160 == wyPos8) || 
        (hlsx + 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx + 80 == wKxPos && hlsy + 160 == wKyPos) || (hlsx + 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
        (hlsx + 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+80, hlsy+160, 80,80)
        }
      }

        //highlight bottom left (-1,2)
      if(hlsx>80 && hlsy<560){
        if((hlsx - 80 == bQxPos && hlsy + 160 == bQyPos) || (hlsx - 80 == xPos1 && hlsy + 160 == yPos1) || (hlsx - 80 == xPos2 && hlsy + 160 == yPos2) || 
        (hlsx - 80 == xPos3 && hlsy + 160 == yPos3) || (hlsx - 80 == xPos4 && hlsy + 160 == yPos4) || (hlsx - 80 == xPos5 && hlsy + 160 == yPos5) || 
        (hlsx - 80 == xPos6 && hlsy + 160 == yPos6) || (hlsx - 80 == xPos7 && hlsy  + 160 == yPos7) || (hlsx - 80 == xPos8 && hlsy + 160 == yPos8) || 
        (hlsx - 80 == bRxPos1 && hlsy + 160 == bRyPos1) || (hlsx - 80 == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx - 80 == bBxPos1 && hlsy + 160 == bByPos1) || 
        (hlsx - 80 == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx - 80 == bKxPos && hlsy + 160 == bKyPos) || (hlsx - 80 == bKnxPos2 && hlsy + 160 == bKnyPos2) ||
        (hlsx - 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy + 160 == wyPos2) || 
        (hlsx - 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 160 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy + 160 == wyPos8) || 
        (hlsx - 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx - 80 == wKxPos && hlsy + 160 == wKyPos) || (hlsx - 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
        (hlsx - 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-80, hlsy+160, 80,80)
        }
      }

        //highlight top left (-2,-1)
      if(hlsx-160>=80 && hlsy-80>=80){
        if((hlsx - 160 == bQxPos && hlsy - 80 == bQyPos) || (hlsx - 160 == xPos1 && hlsy - 80 == yPos1) || (hlsx - 160 == xPos2 && hlsy - 80 == yPos2) || 
        (hlsx - 160 == xPos3 && hlsy - 80 == yPos3) || (hlsx - 160 == xPos4 && hlsy - 80 == yPos4) || (hlsx - 160 == xPos5 && hlsy - 80 == yPos5) || 
        (hlsx - 160 == xPos6 && hlsy - 80 == yPos6) || (hlsx - 160 == xPos7 && hlsy  - 80 == yPos7) || (hlsx - 160 == xPos8 && hlsy - 80 == yPos8) || 
        (hlsx - 160 == bRxPos1 && hlsy - 80 == bRyPos1) || (hlsx - 160 == bRxPos2 && hlsy - 80 == bRyPos2) || (hlsx - 160 == bBxPos1 && hlsy - 80 == bByPos1) || 
        (hlsx - 160 == bBxPos2 && hlsy - 80 == bByPos2) || (hlsx - 160 == wKxPos && hlsy - 80 == bKyPos) || (hlsx - 160 == wKnxPos2 && hlsy - 80 == bKnyPos2) || 
        (hlsx - 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy - 80 == wyPos2) || 
        (hlsx - 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx - 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy - 80 == wyPos8) || 
        (hlsx - 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx - 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx - 160 == wKxPos && hlsy - 80 == wKyPos) || (hlsx - 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
        (hlsx - 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-160, hlsy-80, 80,80)
        }
      }

        //highlight top right (2,-1)
      if(hlsx<560 && hlsy-80>=80){
        if((hlsx + 160 == bQxPos && hlsy - 80 == bQyPos) || (hlsx + 160 == xPos1 && hlsy - 80 == yPos1) || (hlsx + 160 == xPos2 && hlsy - 80 == yPos2) || 
        (hlsx + 160 == xPos3 && hlsy - 80 == yPos3) || (hlsx + 160 == xPos4 && hlsy - 80 == yPos4) || (hlsx + 160 == xPos5 && hlsy - 80 == yPos5) || 
        (hlsx + 160 == xPos6 && hlsy - 80 == yPos6) || (hlsx + 160 == xPos7 && hlsy  - 80 == yPos7) || (hlsx + 160 == xPos8 && hlsy - 80 == yPos8) || 
        (hlsx + 160 == bRxPos1 && hlsy - 80 == bRyPos1) || (hlsx + 160 == bRxPos2 && hlsy - 80 == bRyPos2) || (hlsx + 160 == bBxPos1 && hlsy - 80 == bByPos1) || 
        (hlsx + 160 == bBxPos2 && hlsy - 80 == bByPos2) || (hlsx + 160 == bKxPos && hlsy - 80 == bKyPos) || (hlsx + 160 == bKnxPos2 && hlsy - 80 == bKnyPos2) || 
        (hlsx + 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy - 80 == wyPos2) || 
        (hlsx + 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx + 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy - 80 == wyPos8) || 
        (hlsx + 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx + 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx + 160 == wKxPos && hlsy - 80 == wKyPos) || (hlsx + 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
        (hlsx + 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+160, hlsy-80, 80,80)
        }
      }
      
        //highlight bottom right (2,1)
      if(hlsx<560 && hlsy<640){
        if((hlsx + 160 == bQxPos && hlsy + 80 == bQyPos) || (hlsx + 160 == xPos1 && hlsy + 80 == yPos1) || (hlsx + 160 == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx + 160 == xPos3 && hlsy + 80 == yPos3) || (hlsx + 160 == xPos4 && hlsy + 80 == yPos4) || (hlsx + 160 == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx + 160 == xPos6 && hlsy + 80 == yPos6) || (hlsx + 160 == xPos7 && hlsy  + 80 == yPos7) || (hlsx + 160 == xPos8 && hlsy + 80 == yPos8) || 
        (hlsx + 160 == bRxPos1 && hlsy + 80 == bRyPos1) || (hlsx + 160 == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx + 160 == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx + 160 == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx + 160 == bKxPos && hlsy + 80 == bKyPos) || (hlsx + 160 == bKnxPos2 && hlsy + 80 == bKnyPos2) || 
        (hlsx + 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy + 80 == wyPos2) || 
        (hlsx + 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy + 80 == wyPos8) || 
        (hlsx + 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 160 == wKxPos && hlsy + 80 == wKyPos) || (hlsx + 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
        (hlsx + 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+160, hlsy+80, 80,80)
        }
      }
    
        //highlight bottom left (-2,1)
      if(hlsx>160 && hlsy<640){
        if((hlsx - 160 == bQxPos && hlsy + 80 == bQyPos) || (hlsx - 160 == xPos1 && hlsy + 80 == yPos1) || (hlsx - 160 == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx - 160 == xPos3 && hlsy + 80 == yPos3) || (hlsx - 160 == xPos4 && hlsy + 80 == yPos4) || (hlsx - 160 == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx - 160 == xPos6 && hlsy + 80 == yPos6) || (hlsx - 160 == xPos7 && hlsy  + 80 == yPos7) || (hlsx - 160 == xPos8 && hlsy + 80 == yPos8) || 
        (hlsx - 160 == bRxPos1 && hlsy + 80 == bRyPos1) || (hlsx - 160 == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx - 160 == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx - 160 == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx - 160 == bKxPos && hlsy + 80 == bKyPos) || (hlsx - 160 == bKnxPos2 && hlsy + 80 == bKnyPos2)  || 
        (hlsx - 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy + 80 == wyPos2) || 
        (hlsx - 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy + 80 == wyPos8) || 
        (hlsx - 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 160 == wKxPos && hlsy + 80 == wKyPos) || (hlsx - 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
        (hlsx - 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-160, hlsy+80, 80,80)
        }
      }
    }


    //when bKnight2 selected
    if(highlight == 1 && bKn2pressed == 1){
      fill(238, 193, 108)
      //highlight top left (-1,-2)
      if(hlsx-80>=80 && hlsy-160>=80){
        if((hlsx - 80 == bQxPos && hlsy - 160 == bQyPos) || (hlsx - 80 == xPos1 && hlsy - 160 == yPos1) || (hlsx - 80 == xPos2 && hlsy - 160 == yPos2) || 
        (hlsx - 80 == xPos3 && hlsy - 160 == yPos3) || (hlsx - 80 == xPos4 && hlsy - 160 == yPos4) || (hlsx - 80 == xPos5 && hlsy - 160 == yPos5) || 
        (hlsx - 80 == xPos6 && hlsy - 160 == yPos6) || (hlsx - 80 == xPos7 && hlsy  - 160 == yPos7) || (hlsx - 80 == xPos8 && hlsy - 160 == yPos8) || 
        (hlsx - 80 == bRxPos1 && hlsy - 160 == bRyPos1) || (hlsx - 80 == bRxPos2 && hlsy - 160 == bRyPos2) || (hlsx - 80 == bBxPos1 && hlsy - 160 == bByPos1) || 
        (hlsx - 80 == bBxPos2 && hlsy - 160 == bByPos2) || (hlsx - 80 == bKxPos && hlsy - 160 == bKyPos) || (hlsx - 80 == bKnxPos1 && hlsy - 160 == bKnyPos1) ||
        (hlsx - 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy - 160 == wyPos2) || 
        (hlsx - 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy - 160 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy - 160 == wyPos8) || 
        (hlsx - 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx - 80 == wKxPos && hlsy - 160 == wKyPos) || (hlsx - 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
        (hlsx - 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-80, hlsy-160, 80,80)
        }
      }  
    
        //highlight top right (1,-2)
      if(hlsx<640 && hlsy-160>=80){
        if((hlsx + 80 == bQxPos && hlsy - 160 == bQyPos) || (hlsx + 80 == xPos1 && hlsy - 160 == yPos1) || (hlsx + 80 == xPos2 && hlsy - 160 == yPos2) || 
        (hlsx + 80 == xPos3 && hlsy - 160 == yPos3) || (hlsx + 80 == xPos4 && hlsy - 160 == yPos4) || (hlsx + 80 == xPos5 && hlsy - 160 == yPos5) || 
        (hlsx + 80 == xPos6 && hlsy - 160 == yPos6) || (hlsx + 80 == xPos7 && hlsy  - 160 == yPos7) || (hlsx + 80 == xPos8 && hlsy - 160 == yPos8) || 
        (hlsx + 80 == bRxPos1 && hlsy - 160 == bRyPos1) || (hlsx + 80 == bRxPos2 && hlsy - 160 == bRyPos2) || (hlsx + 80 == bBxPos1 && hlsy - 160 == bByPos1) || 
        (hlsx + 80 == bBxPos2 && hlsy - 160 == bByPos2) || (hlsx + 80 == bKxPos && hlsy - 160 == bKyPos) || (hlsx + 80 == bKnxPos1 && hlsy - 160 == bKnyPos1) ||
        (hlsx + 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy - 160 == wyPos2) || 
        (hlsx + 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy - 160 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy - 160 == wyPos8) || 
        (hlsx + 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx + 80 == wKxPos && hlsy - 160 == wKyPos) || (hlsx + 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
        (hlsx + 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+80, hlsy-160, 80,80)
        }
      }

        //highlight bottom right (1,2)
      if(hlsx<640 && hlsy<560){
        if((hlsx + 80 == bQxPos && hlsy + 160 == bQyPos) || (hlsx + 80 == xPos1 && hlsy + 160 == yPos1) || (hlsx + 80 == xPos2 && hlsy + 160 == yPos2) || 
        (hlsx + 80 == xPos3 && hlsy + 160 == yPos3) || (hlsx + 80 == xPos4 && hlsy + 160 == yPos4) || (hlsx + 80 == xPos5 && hlsy + 160 == yPos5) || 
        (hlsx + 80 == xPos6 && hlsy + 160 == yPos6) || (hlsx + 80 == xPos7 && hlsy  + 160 == yPos7) || (hlsx + 80 == xPos8 && hlsy + 160 == yPos8) || 
        (hlsx + 80 == bRxPos1 && hlsy + 160 == bRyPos1) || (hlsx + 80 == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx + 80 == bBxPos1 && hlsy + 160 == bByPos1) || 
        (hlsx + 80 == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx + 80 == bKxPos && hlsy + 160 == bKyPos) || (hlsx + 80 == bKnxPos1 && hlsy + 160 == bKnyPos1)  ||
        (hlsx + 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy + 160 == wyPos2) || 
        (hlsx + 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 160 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy + 160 == wyPos8) || 
        (hlsx + 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx + 80 == wKxPos && hlsy + 160 == wKyPos) || (hlsx + 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
        (hlsx + 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+80, hlsy+160, 80,80)
        }
      }

        //highlight bottom left (-1,2)
      if(hlsx>80 && hlsy<560){
        if((hlsx - 80 == bQxPos && hlsy + 160 == bQyPos) || (hlsx - 80 == xPos1 && hlsy + 160 == yPos1) || (hlsx - 80 == xPos2 && hlsy + 160 == yPos2) || 
        (hlsx - 80 == xPos3 && hlsy + 160 == yPos3) || (hlsx - 80 == xPos4 && hlsy + 160 == yPos4) || (hlsx - 80 == xPos5 && hlsy + 160 == yPos5) || 
        (hlsx - 80 == xPos6 && hlsy + 160 == yPos6) || (hlsx - 80 == xPos7 && hlsy  + 160 == yPos7) || (hlsx - 80 == xPos8 && hlsy + 160 == yPos8) || 
        (hlsx - 80 == bRxPos1 && hlsy + 160 == bRyPos1) || (hlsx - 80 == bRxPos2 && hlsy + 160 == bRyPos2) || (hlsx - 80 == bBxPos1 && hlsy + 160 == bByPos1) || 
        (hlsx - 80 == bBxPos2 && hlsy + 160 == bByPos2) || (hlsx - 80 == bKxPos && hlsy + 160 == bKyPos) || (hlsx - 80 == bKnxPos1 && hlsy + 160 == bKnyPos1) ||
        (hlsx - 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy + 160 == wyPos2) || 
        (hlsx - 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 160 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy + 160 == wyPos8) || 
        (hlsx - 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx - 80 == wKxPos && hlsy + 160 == wKyPos) || (hlsx - 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
        (hlsx - 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-80, hlsy+160, 80,80)
        }
      }

        //highlight top left (-2,-1)
      if(hlsx-160>=80 && hlsy-80>=80){
        if((hlsx - 160 == bQxPos && hlsy - 80 == bQyPos) || (hlsx - 160 == xPos1 && hlsy - 80 == yPos1) || (hlsx - 160 == xPos2 && hlsy - 80 == yPos2) || 
        (hlsx - 160 == xPos3 && hlsy - 80 == yPos3) || (hlsx - 160 == xPos4 && hlsy - 80 == yPos4) || (hlsx - 160 == xPos5 && hlsy - 80 == yPos5) || 
        (hlsx - 160 == xPos6 && hlsy - 80 == yPos6) || (hlsx - 160 == xPos7 && hlsy  - 80 == yPos7) || (hlsx - 160 == xPos8 && hlsy - 80 == yPos8) || 
        (hlsx - 160 == bRxPos1 && hlsy - 80 == bRyPos1) || (hlsx - 160 == bRxPos2 && hlsy - 80 == bRyPos2) || (hlsx - 160 == bBxPos1 && hlsy - 80 == bByPos1) || 
        (hlsx - 160 == bBxPos2 && hlsy - 80 == bByPos2) || (hlsx - 160 == bKxPos && hlsy - 80 == bKyPos) || (hlsx - 160 == bKnxPos1 && hlsy - 80 == bKnyPos1) || 
        (hlsx - 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy - 80 == wyPos2) || 
        (hlsx - 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx - 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy - 80 == wyPos8) || 
        (hlsx - 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx - 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx - 160 == wKxPos && hlsy - 80 == wKyPos) || (hlsx - 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
        (hlsx - 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-160, hlsy-80, 80,80)
        }
      }

        //highlight top right (2,-1)
      if(hlsx<560 && hlsy-80>=80){
        if((hlsx + 160 == bQxPos && hlsy - 80 == bQyPos) || (hlsx + 160 == xPos1 && hlsy - 80 == yPos1) || (hlsx + 160 == xPos2 && hlsy - 80 == yPos2) || 
        (hlsx + 160 == xPos3 && hlsy - 80 == yPos3) || (hlsx + 160 == xPos4 && hlsy - 80 == yPos4) || (hlsx + 160 == xPos5 && hlsy - 80 == yPos5) || 
        (hlsx + 160 == xPos6 && hlsy - 80 == yPos6) || (hlsx + 160 == xPos7 && hlsy  - 80 == yPos7) || (hlsx + 160 == xPos8 && hlsy - 80 == yPos8) || 
        (hlsx + 160 == bRxPos1 && hlsy - 80 == bRyPos1) || (hlsx + 160 == bRxPos2 && hlsy - 80 == bRyPos2) || (hlsx + 160 == bBxPos1 && hlsy - 80 == bByPos1) || 
        (hlsx + 160 == bBxPos2 && hlsy - 80 == bByPos2) || (hlsx + 160 == bKxPos && hlsy - 80 == bKyPos) || (hlsx + 160 == bKnxPos1 && hlsy - 80 == bKnyPos1) || 
        (hlsx + 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy - 80 == wyPos2) || 
        (hlsx + 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx + 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy - 80 == wyPos8) || 
        (hlsx + 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx + 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx + 160 == wKxPos && hlsy - 80 == wKyPos) || (hlsx + 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
        (hlsx + 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+160, hlsy-80, 80,80)
        }
      }
      
        //highlight bottom right (2,1)
      if(hlsx<560 && hlsy<640){
        if((hlsx + 160 == bQxPos && hlsy + 80 == bQyPos) || (hlsx + 160 == xPos1 && hlsy + 80 == yPos1) || (hlsx + 160 == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx + 160 == xPos3 && hlsy + 80 == yPos3) || (hlsx + 160 == xPos4 && hlsy + 80 == yPos4) || (hlsx + 160 == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx + 160 == xPos6 && hlsy + 80 == yPos6) || (hlsx + 160 == xPos7 && hlsy  + 80 == yPos7) || (hlsx + 160 == xPos8 && hlsy + 80 == yPos8) || 
        (hlsx + 160 == bRxPos1 && hlsy + 80 == bRyPos1) || (hlsx + 160 == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx + 160 == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx + 160 == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx + 160 == bKxPos && hlsy + 80 == bKyPos) || (hlsx + 160 == bKnxPos1 && hlsy + 80 == bKnyPos1) || 
        (hlsx + 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy + 80 == wyPos2) || 
        (hlsx + 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy + 80 == wyPos8) || 
        (hlsx + 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 160 == wKxPos && hlsy + 80 == wKyPos) || (hlsx + 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
        (hlsx + 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx+160, hlsy+80, 80,80)
        }
      }
    
        //highlight bottom left (-2,1)
      if(hlsx>160 && hlsy<640){
        if((hlsx - 160 == bQxPos && hlsy + 80 == bQyPos) || (hlsx - 160 == xPos1 && hlsy + 80 == yPos1) || (hlsx - 160 == xPos2 && hlsy + 80 == yPos2) || 
        (hlsx - 160 == xPos3 && hlsy + 80 == yPos3) || (hlsx - 160 == xPos4 && hlsy + 80 == yPos4) || (hlsx - 160 == xPos5 && hlsy + 80 == yPos5) || 
        (hlsx - 160 == xPos6 && hlsy + 80 == yPos6) || (hlsx - 160 == xPos7 && hlsy  + 80 == yPos7) || (hlsx - 160 == xPos8 && hlsy + 80 == yPos8) || 
        (hlsx - 160 == bRxPos1 && hlsy + 80 == bRyPos1) || (hlsx - 160 == bRxPos2 && hlsy + 80 == bRyPos2) || (hlsx - 160 == bBxPos1 && hlsy + 80 == bByPos1) || 
        (hlsx - 160 == bBxPos2 && hlsy + 80 == bByPos2) || (hlsx - 160 == bKxPos && hlsy + 80 == bKyPos) || (hlsx - 160 == bKnxPos1 && hlsy + 80 == bKnyPos1)   || 
        (hlsx - 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy + 80 == wyPos2) || 
        (hlsx - 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy + 80 == wyPos8) || 
        (hlsx - 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 160 == wKxPos && hlsy + 80 == wKyPos) || (hlsx - 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
        (hlsx - 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
          //cant highlight
        }
        else{
          rect(hlsx-160, hlsy+80, 80,80)
        }
      }
    }
    //when bRook1 selected
      if(highlight == 1 && bR1pressed){
        let k = 0;
        let e = 0;
        //horizontally
          //to the right of bRook1
          for(k = 0; k<8; k++){
            if(((k*80 + hlsx)<80) || (k*80 + hlsx)>640){
              //no highlight
            }
            else{
              if(k!=0){
                 if((k*80 + hlsx == xPos1 && hlsy == yPos1) || (k*80 + hlsx == xPos2 && hlsy == yPos2) || 
                 (k*80 + hlsx == xPos3 && hlsy == yPos3) ||  (k*80 + hlsx == xPos4 && hlsy == yPos4) || 
                 (k*80 + hlsx == xPos5 && hlsy == yPos5) || (k*80 + hlsx == xPos6 && hlsy == yPos6) || 
                 (k*80 + hlsx == xPos7 && hlsy == yPos7) || (k*80 + hlsx == xPos8 && hlsy == yPos8) || 
                 (k*80 + hlsx == bKxPos && hlsy == bKyPos) || (k*80 + hlsx == bQxPos && hlsy == bQyPos) || 
                 (k*80 + hlsx == bKnxPos1 && hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && hlsy == bKnyPos2) || 
                 (k*80 + hlsx == bBxPos1 && hlsy == bByPos1) || (k*80 + hlsx == bBxPos2 && hlsy == bByPos2) || 
                 (k*80 + hlsx == bRxPos2 && hlsy == bRyPos2) || 
                 (k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                 (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                 (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                 (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                 (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                 (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                 (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                 (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                    if((k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                    (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                    (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                    (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                    (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                    (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                    (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                    (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                      if((k*80 + hlsx == wKxPos && hlsy == wKyPos)){
                        fill(139,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = 7;
                        inCheck=true;
                      }
                      else{
                        fill(255,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = 7;
                      }
                    }
                    else{
                      k = 7;
                    }
                  }
                else{
                  fill(238, 193, 108)
                  rect(k*80 + hlsx, hlsy, 80, 80)
                }
              }
            }
          }
          //to the left of bRook1
          for(k = 0; k>-8; k--){
            if(((k*80 + hlsx)<80) || ((k*80 + hlsx)>640)){
              //no highlight
            }
            else{
              if(k!=0){
                 if((k*80 +hlsx == xPos1 && hlsy == yPos1) || (k*80 + hlsx == xPos2 && hlsy == yPos2) || 
                 (k*80 + hlsx == xPos3 && hlsy == yPos3) ||  (k*80 + hlsx == xPos4 && hlsy == yPos4) || 
                 (k*80 + hlsx == xPos5 && hlsy == yPos5) || (k*80 + hlsx == xPos6 && hlsy == yPos6) || 
                 (k*80 + hlsx == xPos7 && hlsy == yPos7) || (k*80 + hlsx == xPos8 && hlsy == yPos8) || 
                 (k*80 + hlsx == bKxPos && hlsy == bKyPos) || (k*80 + hlsx == bQxPos && hlsy == bQyPos) || 
                 (k*80 + hlsx == bKnxPos1 && hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && hlsy == bKnyPos2) || 
                 (k*80 + hlsx == bBxPos1 && hlsy == bByPos1) || (k*80 + hlsx == bBxPos2 && hlsy == bByPos2) || 
                 (k*80 + hlsx == bRxPos2 && hlsy == bRyPos2) || 
                 (k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                 (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                 (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                 (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                 (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                 (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                 (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                 (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                  if((k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                  (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                  (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                  (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                  (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                  (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                  (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                  (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                    if((k*80 + hlsx == wKxPos && hlsy == wKyPos)){
                      fill(139,0,0)
                      rect(k*80 + hlsx, hlsy, 80, 80)
                      k = -7;
                      inCheck = true;
                    }
                    else{
                      fill(255,0,0)
                      rect(k*80 + hlsx, hlsy, 80, 80)
                      k = -7;
                    }
                  }
                  else{
                    k = -7;
                  }
                }
                else{
                  fill(238, 193, 108)
                  rect(k*80 + hlsx, hlsy, 80, 80)
                }
              }
            }
          }
        //vertically
        for(e = 0; e<8; e++){
          //below bRook1
          if(((e*80 + hlsy)<80) || ((e*80 + hlsy)>640)){
            //no highlight
          }
          else{
            if(e!=0){
               if((hlsx == xPos1 && e*80 + hlsy == yPos1) || (hlsx == xPos2 && e*80 + hlsy == yPos2) || 
               (hlsx == xPos3 && e*80 + hlsy == yPos3) ||  (hlsx == xPos4 && e*80 + hlsy == yPos4) || 
               (hlsx == xPos5 && e*80 + hlsy == yPos5) || (hlsx == xPos6 && e*80 + hlsy == yPos6) || 
               (hlsx == xPos7 && e*80 + hlsy == yPos7) || (hlsx == xPos8 && e*80 + hlsy == yPos8) || 
               (hlsx == bKxPos && e*80 + hlsy == bKyPos) || (hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
               (hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
               (hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || (hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
               (hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) || 
               (hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
               (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
               (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
               (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
               (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
               (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
               (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
               (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                  if((hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                  (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                  (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                  (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                  (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                  (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                  (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                  (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                    if((hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                      fill(139,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e=7;
                      inCheck = true;
                    }
                    else{
                      fill(255,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e=7;
                    }
                  }
                  else{
                    e=7;
                  }
              }
              else{
                fill(238, 193, 108)
                rect(hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //above bRook1
        for(e = 0; e>-8; e--){
          if(((e*80 + hlsy)<80) || ((e*80 + hlsy)>640)){
            //no highlight
          }
          else{
            if(e!=0){
               if((hlsx == xPos1 && e*80 + hlsy == yPos1) || (hlsx == xPos2 && e*80 + hlsy == yPos2) || 
               (hlsx == xPos3 && e*80 + hlsy == yPos3) ||  (hlsx == xPos4 && e*80 + hlsy == yPos4) || 
               (hlsx == xPos5 && e*80 + hlsy == yPos5) || (hlsx == xPos6 && e*80 + hlsy == yPos6) || 
               (hlsx == xPos7 && e*80 + hlsy == yPos7) || (hlsx == xPos8 && e*80 + hlsy == yPos8) || 
               (hlsx == bKxPos && e*80 + hlsy == bKyPos) || (hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
               (hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
               (hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || (hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
               (hlsx == bRxPos2 && e*80 + hlsy == bRyPos2)  || 
               (hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
               (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
               (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
               (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
               (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
               (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
               (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
               (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                if((hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                  if((hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                  }
                }
                else{
                  e = -7;
                }
              }
              else{
                fill(238, 193, 108)
                rect(hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }
      }

    //when bRook2 selected
    if(highlight == 1 && bR2pressed){
        fill(238, 193, 108)
        let k = 0;
        let e = 0;
        //horizontally
          //to the right of bRook2
          for(k = 0; k<8; k++){
            if(((k*80 + hlsx)<80) || (k*80 + hlsx)>640){
              //no highlight
            }
            else{
              if(k!=0){
                  if((k*80 + hlsx == xPos1 && hlsy == yPos1) || (k*80 + hlsx == xPos2 && hlsy == yPos2) || 
                  (k*80 + hlsx == xPos3 && hlsy == yPos3) ||  (k*80 + hlsx == xPos4 && hlsy == yPos4) || 
                  (k*80 + hlsx == xPos5 && hlsy == yPos5) || (k*80 + hlsx == xPos6 && hlsy == yPos6) || 
                  (k*80 + hlsx == xPos7 && hlsy == yPos7) || (k*80 + hlsx == xPos8 && hlsy == yPos8) || 
                  (k*80 + hlsx == bKxPos && hlsy == bKyPos) || (k*80 + hlsx == bQxPos && hlsy == bQyPos) || 
                  (k*80 + hlsx == bKnxPos1 && hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && hlsy == bKnyPos2) || 
                  (k*80 + hlsx == bBxPos1 && hlsy == bByPos1) || (k*80 + hlsx == bBxPos2 &&  hlsy == bByPos2) || 
                  (k*80 + hlsx == bRxPos1 && hlsy == bRyPos1) || 
                  (k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                  (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                  (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                  (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                  (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                  (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                  (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                  (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1) ){
                    if((k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                    (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                    (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                    (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                    (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                    (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                    (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                    (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                      if((k*80 + hlsx == wKxPos && hlsy == wKyPos)){
                        fill(139,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = 7;
                        inCheck = true;
                      }
                      else{
                        fill(255,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = 7;
                      }
                    }
                    else{
                      k = 7;
                    }
                  }
                  else{
                    fill(238, 193, 108)
                    rect(k*80 + hlsx, hlsy, 80, 80)
                  }
              }
            }
          }
          //to the left of bRook2
          for(k = 0; k>-8; k--){
            if(((k*80 + hlsx)<80) || ((k*80 + hlsx)>640)){
              //no highlight
            }
            else{
              if(k!=0){
                  if((k*80 + hlsx == xPos1 && hlsy == yPos1) || (k*80 + hlsx == xPos2 && hlsy == yPos2) || 
                  (k*80 + hlsx == xPos3 && hlsy == yPos3) ||  (k*80 + hlsx == xPos4 && hlsy == yPos4) || 
                  (k*80 + hlsx == xPos5 && hlsy == yPos5) || (k*80 + hlsx == xPos6 && hlsy == yPos6) || 
                  (k*80 + hlsx == xPos7 && hlsy == yPos7) || (k*80 + hlsx == xPos8 && hlsy == yPos8) || 
                  (k*80 + hlsx == bKxPos && hlsy == bKyPos) || (k*80 + hlsx == bQxPos && hlsy == bQyPos) || 
                  (k*80 + hlsx == bKnxPos1 && hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && hlsy == bKnyPos2) || 
                  (k*80 + hlsx == bBxPos1 && hlsy == bByPos1) || (k*80 + hlsx == bBxPos2 && hlsy == bByPos2) || 
                  (k*80 + hlsx == bRxPos1 && hlsy == bRyPos1) || 
                  (k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                  (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                  (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                  (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                  (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                  (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                  (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                  (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                    if((k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                    (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                    (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                    (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                    (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                    (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                    (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                    (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                      if((k*80 + hlsx == wKxPos && hlsy == wKyPos)){
                        fill(139,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = -7;
                        inCheck = true;
                      }
                      else{
                        fill(255,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = -7;
                      }
                    }
                    else{
                      k = -7;
                    }
                  }
                  else{
                    fill(238, 193, 108)
                    rect(k*80 + hlsx, hlsy, 80, 80)
                  }
              }
            }
          }
        //vertically
        for(e = 0; e<8; e++){
          //below bRook2
          if(((e*80 + hlsy)<80) || ((e*80 + hlsy)>640)){
            //no highlight
          }
          else{
            if(e!=0){
                if((hlsx == xPos1 && e*80 + hlsy == yPos1) || (hlsx == xPos2 && e*80 + hlsy == yPos2) || 
                (hlsx == xPos3 && e*80 + hlsy == yPos3) ||  (hlsx == xPos4 && e*80 + hlsy == yPos4) || 
                (hlsx == xPos5 && e*80 + hlsy == yPos5) || (hlsx == xPos6 && e*80 + hlsy == yPos6) || 
                (hlsx == xPos7 && e*80 + hlsy == yPos7) || (hlsx == xPos8 && e*80 + hlsy == yPos8) || 
                (hlsx == bKxPos && e*80 + hlsy == bKyPos) || (hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
                (hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
                (hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || (hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || 
                (hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                  if((hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                  (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                  (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                  (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                  (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                  (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                  (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                  (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                    if((hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                      fill(139,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e = 7;
                      inCheck = true;
                    }
                    else{
                      fill(255,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e = 7;
                    }
                  }
                  else{
                    e = 7;
                  }
                }
                else{
                  fill(238, 193, 108)
                  rect(hlsx, e*80 + hlsy, 80, 80)
                }
            }
          }
        }
        //above bRook2
        for(e = 0; e>-8; e--){
          if(((e*80 + hlsy)<80) || ((e*80 + hlsy)>640)){
            //no highlight
          }
          else{
            if(e!=0){
                if((hlsx == xPos1 && e*80 + hlsy == yPos1) || (hlsx == xPos2 && e*80 + hlsy == yPos2) || 
                (hlsx == xPos3 && e*80 + hlsy == yPos3) || (hlsx == xPos4 && e*80 + hlsy == yPos4) || 
                (hlsx == xPos5 && e*80 + hlsy == yPos5) || (hlsx == xPos6 && e*80 + hlsy == yPos6) || 
                (hlsx == xPos7 && e*80 + hlsy == yPos7) || (hlsx == xPos8 && e*80 + hlsy == yPos8) || 
                (hlsx == bKxPos && e*80 + hlsy == bKyPos) || (hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
                (hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
                (hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || (hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (hlsx == bRxPos1 && e*80 + hlsy == bRyPos1)  || 
                (hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                  if((hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                  (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                  (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                  (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                  (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                  (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                  (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                  (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                    if((hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                      fill(139,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e = -7;
                      inCheck = true;
                    }
                    else{
                      fill(255,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e = -7;
                    }
                  }
                  else{
                    e = -7;
                  }
                }
                else{
                  fill(238, 193, 108)
                  rect(hlsx, e*80 + hlsy, 80, 80)
                }
            }
          }
        }
      }
      //if bBishop1 selected
      if(highlight == 1 && bB1pressed == 1){
        fill(238, 193, 108)
        let k = 0;
        let e = 0;
        //bottom right diagonal
        for(k = 0; k<8; k++){
          if((k*80+hlsx < 80) || (k*80+hlsx > 640) || (k*80+hlsy < 80) || (k*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(k != 0){
              if((k*80 + hlsx == xPos1 && k*80 + hlsy == yPos1) || (k*80 + hlsx == xPos2 && k*80 + hlsy == yPos2) || 
              (k*80 + hlsx == xPos3 && k*80 + hlsy == yPos3) || (k*80 + hlsx == xPos4 && k*80 + hlsy == yPos4) || 
              (k*80 + hlsx == xPos5 && k*80 + hlsy == yPos5) || (k*80 + hlsx == xPos6 && k*80 + hlsy == yPos6) || 
              (k*80 + hlsx == xPos7 && k*80 + hlsy == yPos7) || (k*80 + hlsx == xPos8 && k*80 + hlsy == yPos8) ||  
              (k*80 + hlsx == bKxPos && k*80 + hlsy == bKyPos) || (k*80 + hlsx == bQxPos && k*80 + hlsy == bQyPos) || 
              (k*80 + hlsx == bKnxPos1 && k*80 + hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && k*80 + hlsy == bKnyPos2) || 
              (k*80 + hlsx == bRxPos1 && k*80 + hlsy == bRyPos1) || (k*80 + hlsx == bRxPos2 && k*80 + hlsy == bRyPos2) ||
              (k*80 + hlsx == bBxPos2 && k*80 + hlsy == bByPos2) || 
              (k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
              (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
              (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
              (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
              (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
              (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
              (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
              (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                if((k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
                (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
                (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
                (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
                (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
                (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
                (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
                (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                  if((k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = 7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = 7;
                  }
                }
                else{
                  k = 7;
                }
              }
              else{
                fill(238, 193, 108)
                rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //top left diagonal
        for(k = 0; k>-8; k--){
          if((k*80+hlsx < 80) || (k*80+hlsx > 640) || (k*80+hlsy < 80) || (k*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(k != 0){
              if((k*80 + hlsx == xPos1 && k*80 + hlsy == yPos1) || (k*80 + hlsx == xPos2 && k*80 + hlsy == yPos2) || 
              (k*80 + hlsx == xPos3 && k*80 + hlsy == yPos3) || (k*80 + hlsx == xPos4 && k*80 + hlsy == yPos4) || 
              (k*80 + hlsx == xPos5 && k*80 + hlsy == yPos5) || (k*80 + hlsx == xPos6 && k*80 + hlsy == yPos6) || 
              (k*80 + hlsx == xPos7 && k*80 + hlsy == yPos7) || (k*80 + hlsx == xPos8 && k*80 + hlsy == yPos8) ||  
              (k*80 + hlsx == bKxPos && k*80 + hlsy == bKyPos) || (k*80 + hlsx == bQxPos && k*80 + hlsy == bQyPos) || 
              (k*80 + hlsx == bKnxPos1 && k*80 + hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && k*80 + hlsy == bKnyPos2) || 
              (k*80 + hlsx == bRxPos1 && k*80 + hlsy == bRyPos1) || (k*80 + hlsx == bRxPos2 && k*80 + hlsy == bRyPos2) ||
              (k*80 + hlsx == bBxPos2 && k*80 + hlsy == bByPos2) || 
              (k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
              (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
              (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
              (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
              (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
              (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
              (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
              (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                if((k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
                (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
                (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
                (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
                (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
                (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
                (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
                (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                  if((k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = -7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = -7;
                  }
                }
                else{
                  k = -7;
                }
              }
              else{
                fill(238, 193, 108)
                rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
              }
            }
          }
        }

        //bottom left diagonal
        for(e = 0; e<8; e++){
          if((-e*80+hlsx < 80) || (-e*80+hlsx > 640) || (e*80+hlsy < 80) || (e*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(e != 0){
              if((-e*80 + hlsx == xPos1 && e*80 + hlsy == yPos1) || (-e*80 + hlsx == xPos2 && e*80 + hlsy == yPos2) || 
              (-e*80 + hlsx == xPos3 && e*80 + hlsy == yPos3) || (-e*80 + hlsx == xPos4 && e*80 + hlsy == yPos4) || 
              (-e*80 + hlsx == xPos5 && e*80 + hlsy == yPos5) || (-e*80 + hlsx == xPos6 && e*80 + hlsy == yPos6) || 
              (-e*80 + hlsx == xPos7 && e*80 + hlsy == yPos7) || (-e*80 + hlsx == xPos8 && e*80 + hlsy == yPos8) ||  
              (-e*80 + hlsx == bKxPos && e*80 + hlsy == bKyPos) || (-e*80 + hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
              (-e*80 + hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (-e*80 + hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
              (-e*80 + hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || (-e*80 + hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) ||
              (-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
              (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
              (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
              (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
              (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
              (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
              (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
              (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
              (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                if((-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
                (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
                (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                  if((-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = 7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = 7;
                  }
                }
                else{
                  e = 7
                }
              } 
              else{
                fill(238, 193, 108)
                rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //top right diagonal
        for(e = 0; e>-8; e--){
          if((-e*80+hlsx < 80) || (-e*80+hlsx > 640) || (e*80+hlsy < 80) || (e*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(e != 0){
              if((-e*80 + hlsx == xPos1 && e*80 + hlsy == yPos1) || (-e*80 + hlsx == xPos2 && e*80 + hlsy == yPos2) || 
              (-e*80 + hlsx == xPos3 && e*80 + hlsy == yPos3) || (-e*80 + hlsx == xPos4 && e*80 + hlsy == yPos4) || 
              (-e*80 + hlsx == xPos5 && e*80 + hlsy == yPos5) || (-e*80 + hlsx == xPos6 && e*80 + hlsy == yPos6) || 
              (-e*80 + hlsx == xPos7 && e*80 + hlsy == yPos7) || (-e*80 + hlsx == xPos8 && e*80 + hlsy == yPos8) ||  
              (-e*80 + hlsx == bKxPos && e*80 + hlsy == bKyPos) || (-e*80 + hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
              (-e*80 + hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (-e*80 + hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
              (-e*80 + hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || (-e*80 + hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) ||
              (-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
              (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
              (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
              (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
              (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
              (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
              (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
              (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
              (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                if((-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
                (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
                (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                  if((-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                  }
                }
                else{
                  e = -7
                }
              } 
              else{
                fill(238, 193, 108)
                rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }

      }


      //if bBishop2 selected
      if(highlight == 1 && bB2pressed == 1){
        fill(238, 193, 108)
        let k = 0;
        let e = 0;
        //bottom right diagonal
        for(k = 0; k<8; k++){
          if((k*80+hlsx < 80) || (k*80+hlsx > 640) || (k*80+hlsy < 80) || (k*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(k != 0){
              if((k*80 + hlsx == xPos1 && k*80 + hlsy == yPos1) || (k*80 + hlsx == xPos2 && k*80 + hlsy == yPos2) || 
              (k*80 + hlsx == xPos3 && k*80 + hlsy == yPos3) || (k*80 + hlsx == xPos4 && k*80 + hlsy == yPos4) || 
              (k*80 + hlsx == xPos5 && k*80 + hlsy == yPos5) || (k*80 + hlsx == xPos6 && k*80 + hlsy == yPos6) || 
              (k*80 + hlsx == xPos7 && k*80 + hlsy == yPos7) || (k*80 + hlsx == xPos8 && k*80 + hlsy == yPos8) ||  
              (k*80 + hlsx == bKxPos && k*80 + hlsy == bKyPos) || (k*80 + hlsx == bQxPos && k*80 + hlsy == bQyPos) || 
              (k*80 + hlsx == bKnxPos1 && k*80 + hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && k*80 + hlsy == bKnyPos2) || 
              (k*80 + hlsx == bRxPos1 && k*80 + hlsy == bRyPos1) || (k*80 + hlsx == bRxPos2 && k*80 + hlsy == bRyPos2) ||
              (k*80 + hlsx == bBxPos1 && k*80 + hlsy == bByPos1) || 
              (k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
              (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
              (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
              (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
              (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
              (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
              (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
              (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                if((k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
                (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
                (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
                (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
                (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
                (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
                (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
                (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                  if((k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = 7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = 7;
                  }
                }
                else{
                  k = 7;
                }
              }
              else{
                fill(238, 193, 108)
                rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //top left diagonal
        for(k = 0; k>-8; k--){
          if((k*80+hlsx < 80) || (k*80+hlsx > 640) || (k*80+hlsy < 80) || (k*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(k != 0){
              if((k*80 + hlsx == xPos1 && k*80 + hlsy == yPos1) || (k*80 + hlsx == xPos2 && k*80 + hlsy == yPos2) || 
              (k*80 + hlsx == xPos3 && k*80 + hlsy == yPos3) || (k*80 + hlsx == xPos4 && k*80 + hlsy == yPos4) || 
              (k*80 + hlsx == xPos5 && k*80 + hlsy == yPos5) || (k*80 + hlsx == xPos6 && k*80 + hlsy == yPos6) || 
              (k*80 + hlsx == xPos7 && k*80 + hlsy == yPos7) || (k*80 + hlsx == xPos8 && k*80 + hlsy == yPos8) ||  
              (k*80 + hlsx == bKxPos && k*80 + hlsy == bKyPos) || (k*80 + hlsx == bQxPos && k*80 + hlsy == bQyPos) || 
              (k*80 + hlsx == bKnxPos1 && k*80 + hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && k*80 + hlsy == bKnyPos2) || 
              (k*80 + hlsx == bRxPos1 && k*80 + hlsy == bRyPos1) || (k*80 + hlsx == bRxPos2 && k*80 + hlsy == bRyPos2) ||
              (k*80 + hlsx == bBxPos1 && k*80 + hlsy == bByPos1) || 
              (k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
              (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
              (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
              (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
              (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
              (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
              (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
              (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                if((k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
                (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
                (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
                (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
                (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
                (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
                (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
                (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                  if((k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = -7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = -7;
                  }
                }
                else{
                  k = -7;
                }
              }
              else{
                fill(238, 193, 108)
                rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
              }
            }
          }
        }
      
        //bottom left diagonal
        for(e = 0; e<8; e++){
          if((-e*80+hlsx < 80) || (-e*80+hlsx > 640) || (e*80+hlsy < 80) || (e*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(e != 0){
              if((-e*80 + hlsx == xPos1 && e*80 + hlsy == yPos1) || (-e*80 + hlsx == xPos2 && e*80 + hlsy == yPos2) || 
              (-e*80 + hlsx == xPos3 && e*80 + hlsy == yPos3) || (-e*80 + hlsx == xPos4 && e*80 + hlsy == yPos4) || 
              (-e*80 + hlsx == xPos5 && e*80 + hlsy == yPos5) || (-e*80 + hlsx == xPos6 && e*80 + hlsy == yPos6) || 
              (-e*80 + hlsx == xPos7 && e*80 + hlsy == yPos7) || (-e*80 + hlsx == xPos8 && e*80 + hlsy == yPos8) ||  
              (-e*80 + hlsx == bKxPos && e*80 + hlsy == bKyPos) || (-e*80 + hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
              (-e*80 + hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (-e*80 + hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
              (-e*80 + hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || (-e*80 + hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) ||
              (-e*80 + hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || 
              (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
              (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
              (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
              (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
              (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
              (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
              (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
              (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                if((-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
                (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
                (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                  if((-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = 7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = 7;
                  }
                }
                else{
                  e = 7
                }
              } 
              else{
                fill(238, 193, 108)
                rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //top right diagonal
        for(e = 0; e>-8; e--){
          if((-e*80+hlsx < 80) || (-e*80+hlsx > 640) || (e*80+hlsy < 80) || (e*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(e != 0){
              if((-e*80 + hlsx == xPos1 && e*80 + hlsy == yPos1) || (-e*80 + hlsx == xPos2 && e*80 + hlsy == yPos2) || 
              (-e*80 + hlsx == xPos3 && e*80 + hlsy == yPos3) || (-e*80 + hlsx == xPos4 && e*80 + hlsy == yPos4) || 
              (-e*80 + hlsx == xPos5 && e*80 + hlsy == yPos5) || (-e*80 + hlsx == xPos6 && e*80 + hlsy == yPos6) || 
              (-e*80 + hlsx == xPos7 && e*80 + hlsy == yPos7) || (-e*80 + hlsx == xPos8 && e*80 + hlsy == yPos8) ||  
              (-e*80 + hlsx == bKxPos && e*80 + hlsy == bKyPos) || (-e*80 + hlsx == bQxPos && e*80 + hlsy == bQyPos) || 
              (-e*80 + hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (-e*80 + hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
              (-e*80 + hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || (-e*80 + hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) ||
              (-e*80 + hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || 
              (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
              (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
              (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
              (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
              (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
              (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
              (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
              (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                if((-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
                (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
                (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                  if((-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                  }
                }
                else{
                  e = -7
                }
              } 
              else{
                fill(238, 193, 108)
                rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }


      }

      //if bQueen is selected
      if(highlight == 1 && bQpressed == 1){
        fill(238, 193, 108)
        let k = 0;
        let e = 0;

        //diagional

        //bottom right diagonal
        for(k = 0; k<8; k++){
          if((k*80+hlsx < 80) || (k*80+hlsx > 640) || (k*80+hlsy < 80) || (k*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(k != 0){
              if((k*80 + hlsx == xPos1 && k*80 + hlsy == yPos1) || (k*80 + hlsx == xPos2 && k*80 + hlsy == yPos2) || 
              (k*80 + hlsx == xPos3 && k*80 + hlsy == yPos3) || (k*80 + hlsx == xPos4 && k*80 + hlsy == yPos4) || 
              (k*80 + hlsx == xPos5 && k*80 + hlsy == yPos5) || (k*80 + hlsx == xPos6 && k*80 + hlsy == yPos6) || 
              (k*80 + hlsx == xPos7 && k*80 + hlsy == yPos7) || (k*80 + hlsx == xPos8 && k*80 + hlsy == yPos8) ||  
              (k*80 + hlsx == bKxPos && k*80 + hlsy == bKyPos) || (k*80 + hlsx == bBxPos2 && k*80 + hlsy == bByPos2) || 
              (k*80 + hlsx == bKnxPos1 && k*80 + hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && k*80 + hlsy == bKnyPos2) || 
              (k*80 + hlsx == bRxPos1 && k*80 + hlsy == bRyPos1) || (k*80 + hlsx == bRxPos2 && k*80 + hlsy == bRyPos2) ||
              (k*80 + hlsx == bBxPos1 && k*80 + hlsy == bByPos1)  || 
              (k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
              (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
              (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
              (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
              (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
              (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
              (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
              (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                if((k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
                (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
                (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
                (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
                (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
                (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
                (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
                (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                  if((k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = 7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = 7;
                  }
                }
                else{
                  k = 7;
                }
              }
              else{
                fill(238, 193, 108)
                rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //top left diagonal
        for(k = 0; k>-8; k--){
          if((k*80+hlsx < 80) || (k*80+hlsx > 640) || (k*80+hlsy < 80) || (k*80+hlsy > 640)){
            //do nothing
          }
          else{
          if(k != 0){
            if((k*80 + hlsx == xPos1 && k*80 + hlsy == yPos1) || (k*80 + hlsx == xPos2 && k*80 + hlsy == yPos2) || 
              (k*80 + hlsx == xPos3 && k*80 + hlsy == yPos3) || (k*80 + hlsx == xPos4 && k*80 + hlsy == yPos4) || 
              (k*80 + hlsx == xPos5 && k*80 + hlsy == yPos5) || (k*80 + hlsx == xPos6 && k*80 + hlsy == yPos6) || 
              (k*80 + hlsx == xPos7 && k*80 + hlsy == yPos7) || (k*80 + hlsx == xPos8 && k*80 + hlsy == yPos8) ||  
              (k*80 + hlsx == bKxPos && k*80 + hlsy == bKyPos) || (k*80 + hlsx == bBxPos2 && k*80 + hlsy == bByPos2) || 
              (k*80 + hlsx == bKnxPos1 && k*80 + hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && k*80 + hlsy == bKnyPos2) || 
              (k*80 + hlsx == bRxPos1 && k*80 + hlsy == bRyPos1) || (k*80 + hlsx == bRxPos2 && k*80 + hlsy == bRyPos2) ||
              (k*80 + hlsx == bBxPos1 && k*80 + hlsy == bByPos1)  || 
              (k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
              (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
              (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
              (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
              (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
              (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
              (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
              (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                if((k*80 + hlsx == wxPos1 && k*80 + hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && k*80 + hlsy == wyPos2) || 
                (k*80 + hlsx == wxPos3 && k*80 + hlsy == wyPos3) || (k*80 + hlsx == wxPos4 && k*80 + hlsy == wyPos4) || 
                (k*80 + hlsx == wxPos5 && k*80 + hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && k*80 + hlsy == wyPos6) || 
                (k*80 + hlsx == wxPos7 && k*80 + hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && k*80 + hlsy == wyPos8) ||  
                (k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos) || (k*80 + hlsx == wQxPos && k*80 + hlsy == wQyPos) || 
                (k*80 + hlsx == wKnxPos1 && k*80 + hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && k*80 + hlsy == wKnyPos2) || 
                (k*80 + hlsx == wRxPos1 && k*80 + hlsy == wRyPos1) || (k*80 + hlsx == wRxPos2 && k*80 + hlsy == wRyPos2) ||
                (k*80 + hlsx == wBxPos2 && k*80 + hlsy == wByPos2) || (k*80 + hlsx == wBxPos1 && k*80 + hlsy == wByPos1)){
                  if((k*80 + hlsx == wKxPos && k*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = -7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
                    k = -7;
                  }
                }
                else{
                  k = -7;
                }
              }
              else{
                fill(238, 193, 108)
                rect(k*80 + hlsx, k*80 + hlsy, 80, 80)
              }
            }
          }
        }
              
        //bottom left diagonal
        for(e = 0; e<8; e++){
          if((-e*80+hlsx < 80) || (-e*80+hlsx > 640) || (e*80+hlsy < 80) || (e*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(e != 0){
              if((-e*80 + hlsx == xPos1 && e*80 + hlsy == yPos1) || (-e*80 + hlsx == xPos2 && e*80 + hlsy == yPos2) || 
              (-e*80 + hlsx == xPos3 && e*80 + hlsy == yPos3) || (-e*80 + hlsx == xPos4 && e*80 + hlsy == yPos4) || 
              (-e*80 + hlsx == xPos5 && e*80 + hlsy == yPos5) || (-e*80 + hlsx == xPos6 && e*80 + hlsy == yPos6) || 
              (-e*80 + hlsx == xPos7 && e*80 + hlsy == yPos7) || (-e*80 + hlsx == xPos8 && e*80 + hlsy == yPos8) ||  
              (-e*80 + hlsx == bKxPos && e*80 + hlsy == bKyPos) || (-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
              (-e*80 + hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (-e*80 + hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
              (-e*80 + hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || (-e*80 + hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) ||
              (-e*80 + hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || 
              (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
              (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
              (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
              (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
              (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
              (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
              (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
              (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                if((-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
                (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
                (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                  if((-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = 7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = 7;
                  }
                }
                else{
                  e = 7
                }
              } 
              else{
                fill(238, 193, 108)
                rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //top right diagonal
        for(e = 0; e>-8; e--){
          if((-e*80+hlsx < 80) || (-e*80+hlsx > 640) || (e*80+hlsy < 80) || (e*80+hlsy > 640)){
            //do nothing
          }
          else{
            if(e != 0){
              if((-e*80 + hlsx == xPos1 && e*80 + hlsy == yPos1) || (-e*80 + hlsx == xPos2 && e*80 + hlsy == yPos2) || 
              (-e*80 + hlsx == xPos3 && e*80 + hlsy == yPos3) || (-e*80 + hlsx == xPos4 && e*80 + hlsy == yPos4) || 
              (-e*80 + hlsx == xPos5 && e*80 + hlsy == yPos5) || (-e*80 + hlsx == xPos6 && e*80 + hlsy == yPos6) || 
              (-e*80 + hlsx == xPos7 && e*80 + hlsy == yPos7) || (-e*80 + hlsx == xPos8 && e*80 + hlsy == yPos8) ||  
              (-e*80 + hlsx == bKxPos && e*80 + hlsy == bKyPos) || (-e*80 + hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
              (-e*80 + hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (-e*80 + hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
              (-e*80 + hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || (-e*80 + hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) ||
              (-e*80 + hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || 
              (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
              (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
              (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
              (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
              (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
              (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
              (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
              (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                if((-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                (-e*80 + hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (-e*80 + hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (-e*80 + hlsx == wxPos3 && e*80 + hlsy == wyPos3) || (-e*80 + hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (-e*80 + hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (-e*80 + hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (-e*80 + hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (-e*80 + hlsx == wxPos8 && e*80 + hlsy == wyPos8) ||  
                (-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos) || (-e*80 + hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (-e*80 + hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (-e*80 + hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (-e*80 + hlsx == wRxPos1 && e*80 + hlsy == wRyPos1) || (-e*80 + hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) ||
                (-e*80 + hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || (-e*80 + hlsx == wBxPos1 && e*80 + hlsy == wByPos1)){
                  if((-e*80 + hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                    fill(139,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                    inCheck = true;
                  }
                  else{
                    fill(255,0,0)
                    rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
                    e = -7;
                  }
                }
                else{
                  e = -7
                }
              } 
              else{
                fill(238, 193, 108)
                rect(-e*80 + hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }


        //linear

        //horizontally
          //to the right of bQueen
          for(k = 0; k<8; k++){
            if(((k*80 + hlsx)<80) || (k*80 + hlsx)>640){
              //no highlight
            }
            else{
              if(k!=0){
                  if((k*80 + hlsx == xPos1 && hlsy == yPos1) || (k*80 + hlsx == xPos2 && hlsy == yPos2) || 
                  (k*80 + hlsx == xPos3 && hlsy == yPos3) ||  (k*80 + hlsx == xPos4 && hlsy == yPos4) || 
                  (k*80 + hlsx == xPos5 && hlsy == yPos5) || (k*80 + hlsx == xPos6 && hlsy == yPos6) || 
                  (k*80 + hlsx == xPos7 && hlsy == yPos7) || (k*80 + hlsx == xPos8 && hlsy == yPos8) || 
                  (k*80 + hlsx == bKxPos && hlsy == bKyPos) || (k*80 + hlsx == bRxPos2 && hlsy == bRyPos2) || 
                  (k*80 + hlsx == bKnxPos1 && hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && hlsy == bKnyPos2) || 
                  (k*80 + hlsx == bBxPos1 && hlsy == bByPos1) || (k*80 + hlsx == bBxPos2 &&  hlsy == bByPos2) || 
                  (k*80 + hlsx == bRxPos1 && hlsy == bRyPos1) || 
                  (k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                  (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                  (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                  (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                  (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                  (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                  (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                  (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                    if((k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                    (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                    (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                    (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                    (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                    (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                    (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                    (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                      if((k*80 + hlsx == wKxPos && hlsy == wKyPos)){
                        fill(139,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = 7;
                        inCheck=true;
                      }
                      else{
                        fill(255,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = 7;
                      }
                    }
                    else{
                      k = 7;
                    }
                  }
                else{
                  fill(238, 193, 108)
                  rect(k*80 + hlsx, hlsy, 80, 80)
                }
              }
            }
          }
          //to the left of bQueen
          for(k = 0; k>-8; k--){
            if(((k*80 + hlsx)<80) || ((k*80 + hlsx)>640)){
              //no highlight
            }
            else{
              if(k!=0){
                  if((k*80 + hlsx == xPos1 && hlsy == yPos1) || (k*80 + hlsx == xPos2 && hlsy == yPos2) || 
                  (k*80 + hlsx == xPos3 && hlsy == yPos3) ||  (k*80 + hlsx == xPos4 && hlsy == yPos4) || 
                  (k*80 + hlsx == xPos5 && hlsy == yPos5) || (k*80 + hlsx == xPos6 && hlsy == yPos6) || 
                  (k*80 + hlsx == xPos7 && hlsy == yPos7) || (k*80 + hlsx == xPos8 && hlsy == yPos8) || 
                  (k*80 + hlsx == bKxPos && hlsy == bKyPos) || (k*80 + hlsx == bRxPos2 && hlsy == bRyPos2) || 
                  (k*80 + hlsx == bKnxPos1 && hlsy == bKnyPos1) || (k*80 + hlsx == bKnxPos2 && hlsy == bKnyPos2) || 
                  (k*80 + hlsx == bBxPos1 && hlsy == bByPos1) || (k*80 + hlsx == bBxPos2 && hlsy == bByPos2) || 
                  (k*80 + hlsx == bRxPos1 && hlsy == bRyPos1) || 
                  (k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                  (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                  (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                  (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                  (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                  (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                  (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                  (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                    if((k*80 + hlsx == wxPos1 && hlsy == wyPos1) || (k*80 + hlsx == wxPos2 && hlsy == wyPos2) || 
                    (k*80 + hlsx == wxPos3 && hlsy == wyPos3) ||  (k*80 + hlsx == wxPos4 && hlsy == wyPos4) || 
                    (k*80 + hlsx == wxPos5 && hlsy == wyPos5) || (k*80 + hlsx == wxPos6 && hlsy == wyPos6) || 
                    (k*80 + hlsx == wxPos7 && hlsy == wyPos7) || (k*80 + hlsx == wxPos8 && hlsy == wyPos8) || 
                    (k*80 + hlsx == wKxPos && hlsy == wKyPos) || (k*80 + hlsx == wQxPos && hlsy == wQyPos) || 
                    (k*80 + hlsx == wKnxPos1 && hlsy == wKnyPos1) || (k*80 + hlsx == wKnxPos2 && hlsy == wKnyPos2) || 
                    (k*80 + hlsx == wBxPos1 && hlsy == wByPos1) || (k*80 + hlsx == wBxPos2 && hlsy == wByPos2) || 
                    (k*80 + hlsx == wRxPos2 && hlsy == wRyPos2) || (k*80 + hlsx == wRxPos1 && hlsy == wRyPos1)){
                      if((k*80 + hlsx == wKxPos && hlsy == wKyPos)){
                        fill(139,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = -7;
                        inCheck = true;
                      }
                      else{
                        fill(255,0,0)
                        rect(k*80 + hlsx, hlsy, 80, 80)
                        k = -7;
                      }
                    }
                    else{
                      k = -7;
                    }
                  }
                  else{
                    fill(238, 193, 108)
                    rect(k*80 + hlsx, hlsy, 80, 80)
                  }
                }
              }
            }
        //vertically
        for(e = 0; e<8; e++){
          //below bQueen
          if(((e*80 + hlsy)<80) || ((e*80 + hlsy)>640)){
            //no highlight
          }
          else{
            if(e!=0){
                if((hlsx == xPos1 && e*80 + hlsy == yPos1) || (hlsx == xPos2 && e*80 + hlsy == yPos2) || 
                (hlsx == xPos3 && e*80 + hlsy == yPos3) ||  (hlsx == xPos4 && e*80 + hlsy == yPos4) || 
                (hlsx == xPos5 && e*80 + hlsy == yPos5) || (hlsx == xPos6 && e*80 + hlsy == yPos6) || 
                (hlsx == xPos7 && e*80 + hlsy == yPos7) || (hlsx == xPos8 && e*80 + hlsy == yPos8) || 
                (hlsx == bKxPos && e*80 + hlsy == bKyPos) || (hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) || 
                (hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
                (hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || (hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || 
                (hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2)){
                  if((hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                  (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                  (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                  (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                  (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                  (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                  (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                  (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                    if((hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                      fill(139,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e=7;
                      inCheck = true;
                    }
                    else{
                      fill(255,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e=7;
                    }
                  }
                  else{
                    e=7;
                  }
              }
              else{
                fill(238, 193, 108)
                rect(hlsx, e*80 + hlsy, 80, 80)
              }
            }
          }
        }
        //above bQueen
        for(e = 0; e>-8; e--){
          if(((e*80 + hlsy)<80) || ((e*80 + hlsy)>640)){
            //no highlight
          }
          else{
            if(e!=0){
                if((hlsx == xPos1 && e*80 + hlsy == yPos1) || (hlsx == xPos2 && e*80 + hlsy == yPos2) || 
                (hlsx == xPos3 && e*80 + hlsy == yPos3) || (hlsx == xPos4 && e*80 + hlsy == yPos4) || 
                (hlsx == xPos5 && e*80 + hlsy == yPos5) || (hlsx == xPos6 && e*80 + hlsy == yPos6) || 
                (hlsx == xPos7 && e*80 + hlsy == yPos7) || (hlsx == xPos8 && e*80 + hlsy == yPos8) || 
                (hlsx == bKxPos && e*80 + hlsy == bKyPos) || (hlsx == bRxPos2 && e*80 + hlsy == bRyPos2) || 
                (hlsx == bKnxPos1 && e*80 + hlsy == bKnyPos1) || (hlsx == bKnxPos2 && e*80 + hlsy == bKnyPos2) || 
                (hlsx == bBxPos1 && e*80 + hlsy == bByPos1) || (hlsx == bBxPos2 && e*80 + hlsy == bByPos2) || 
                (hlsx == bRxPos1 && e*80 + hlsy == bRyPos1) || 
                (hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2)){
                  if((hlsx == wxPos1 && e*80 + hlsy == wyPos1) || (hlsx == wxPos2 && e*80 + hlsy == wyPos2) || 
                  (hlsx == wxPos3 && e*80 + hlsy == wyPos3) ||  (hlsx == wxPos4 && e*80 + hlsy == wyPos4) || 
                  (hlsx == wxPos5 && e*80 + hlsy == wyPos5) || (hlsx == wxPos6 && e*80 + hlsy == wyPos6) || 
                  (hlsx == wxPos7 && e*80 + hlsy == wyPos7) || (hlsx == wxPos8 && e*80 + hlsy == wyPos8) || 
                  (hlsx == wKxPos && e*80 + hlsy == wKyPos) || (hlsx == wQxPos && e*80 + hlsy == wQyPos) || 
                  (hlsx == wKnxPos1 && e*80 + hlsy == wKnyPos1) || (hlsx == wKnxPos2 && e*80 + hlsy == wKnyPos2) || 
                  (hlsx == wBxPos1 && e*80 + hlsy == wByPos1) || (hlsx == wBxPos2 && e*80 + hlsy == wByPos2) || 
                  (hlsx == wRxPos2 && e*80 + hlsy == wRyPos2) || (hlsx == wRxPos1 && e*80 + hlsy == wRyPos1)){
                    if((hlsx == wKxPos && e*80 + hlsy == wKyPos)){
                      fill(139,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e = -7;
                      inCheck = true;
                    }
                    else{
                      fill(255,0,0)
                      rect(hlsx, e*80 + hlsy, 80, 80)
                      e = -7;
                    }
                  }
                  else{
                    e = -7;
                  }
                }
                else{
                  fill(238, 193, 108)
                  rect(hlsx, e*80 + hlsy, 80, 80)
                }
              }
            }
          }  
   
      }

      //potential take highlighting:


    //when king selected
    if(highlight == 1 && bKpressed == 1){
      fill(255,0,0)
      //highlight left
      if(hlsx>=160){
        if((hlsx - 80 == wKxPos && hlsy == wKyPos)){
          fill(139,0,0)
          rect(hlsx - 80, hlsy, 80,  80)
          inCheck = true;
        }
        else if(
        (hlsx - 80 == wQxPos && hlsy == wQyPos) || (hlsx - 80 == wxPos1 && hlsy == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy == wyPos2) || (hlsx - 80 == wxPos3 && hlsy == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy == wyPos4) || (hlsx - 80 == wxPos5 && hlsy == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy == wyPos6) || (hlsx - 80 == wxPos7 && hlsy == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy, 80,  80)
        }


      }
      //highlight right
      if(hlsx<640){
        if((hlsx + 80 == wKxPos && hlsy == wKyPos)){
          fill(139,0,0)
          rect(hlsx + 80, hlsy, 80,  80) 
          inCheck = true;
        }
        else if(
        (hlsx + 80 == wQxPos && hlsy == wQyPos) || (hlsx + 80 == wxPos1 && hlsy == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy == wyPos2) || (hlsx + 80 == wxPos3 && hlsy == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy == wyPos4) || (hlsx + 80 == wxPos5 && hlsy == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy == wyPos6) || (hlsx + 80 == wxPos7 && hlsy == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy, 80,  80)
        }
      }
      //highlight up
      if(hlsy>=160){
        if((hlsx == wKxPos && hlsy - 80 == wKyPos)){
          fill(139,0,0)
          rect(hlsx, hlsy - 80, 80,  80) 
          inCheck = true;
        }
        else if(
        (hlsx == wQxPos && hlsy - 80 == wQyPos) || (hlsx == wxPos1 && hlsy - 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy - 80 == wyPos2) || (hlsx == wxPos3 && hlsy - 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy - 80 == wyPos4) || (hlsx == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy - 80 == wyPos6) || (hlsx == wxPos7 && hlsy - 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy - 80 == wyPos8) || (hlsx == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy - 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy - 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx, hlsy - 80, 80,  80)
        }
      }
      //highlight down
      if(hlsy<640){
        if((hlsx == wKxPos && hlsy + 80 == wKyPos)){
          fill(139,0,0)
          rect(hlsx, hlsy + 80, 80,  80) 
          inCheck = true;
        }
        else if(
        (hlsx == wQxPos && hlsy + 80 == wQyPos) || (hlsx == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx == wxPos2 && hlsy + 80 == wyPos2) || (hlsx == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx == wxPos4 && hlsy + 80 == wyPos4) || (hlsx == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx == wxPos6 && hlsy + 80 == wyPos6) || (hlsx == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx == wxPos8 && hlsy + 80 == wyPos8) || (hlsx == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx, hlsy + 80, 80,  80)
        }
      }
      //highlight top left
      if(hlsx>=160 && hlsy>=160){
        if((hlsx - 80 == wKxPos && hlsy - 80 == wKyPos)){
          fill(139,0,0)
          rect(hlsx - 80, hlsy - 80, 80,  80) 
          inCheck = true;
        }
        else if(
        (hlsx - 80 == wQxPos && hlsy - 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy - 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy - 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy - 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy - 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy - 80 == wyPos8) || (hlsx - 80 == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy - 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy - 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx-80, hlsy-80,80,80)
        }
      }
      //highlight bottom right
      if(hlsx<640 && hlsy<640){
        if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          fill(139,0,0)
         rect(hlsx + 80, hlsy + 80, 80,  80) 
         inCheck = true;
        }
        else if(
        (hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx+80, hlsy+80,80,80)
        }
      }
      //highlight top right
      if(hlsx<640 && hlsy>=160){
        if((hlsx + 80 == wKxPos && hlsy - 80 == wKyPos)){
          fill(139,0,0)
          rect(hlsx + 80, hlsy - 80, 80,  80) 
          inCheck = true;
        }
        if(
        (hlsx + 80 == wQxPos && hlsy - 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy - 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy - 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy - 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy - 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy - 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy - 80 == wyPos8) || (hlsx + 80 == bRxPos1 && hlsy - 80 == bRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy - 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy - 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy - 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx+80, hlsy-80,80,80)
        }
      }
      //highlight bottom left
      if(hlsx>=160 && hlsy<640){
        if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          fill(139,0,0)
          rect(hlsx - 80, hlsy + 80, 80,  80) 
          inCheck = true;
        }
        if(
        (hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == bRxPos1 && hlsy + 80 == bRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx-80, hlsy+80,80,80)
        }
      }
    }


       //when bKnight1 selected
       if(highlight == 1 && bKn1pressed == 1){

        //highlight top left (-1,-2)
        if(hlsx-80>=80 && hlsy-160>=80){
          if((hlsx - 80 == wKxPos && hlsy - 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-80, hlsy-160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx - 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy - 160 == wyPos2) || 
          (hlsx - 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy - 160 == wyPos5) || 
          (hlsx - 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy - 160 == wyPos8) || 
          (hlsx - 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
          (hlsx - 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx - 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
          (hlsx - 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-80, hlsy-160, 80,80)
          }
        }
      
          //highlight top right (1,-2)
        if(hlsx<640 && hlsy-160>=80){
          if((hlsx + 80 == wKxPos && hlsy - 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+80, hlsy-160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy - 160 == wyPos2) || 
          (hlsx + 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy - 160 == wyPos5) || 
          (hlsx + 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy - 160 == wyPos8) || 
          (hlsx + 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
          (hlsx + 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx + 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
          (hlsx + 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+80, hlsy-160, 80,80)
          }
        }
  
          //highlight bottom right (1,2)
        if(hlsx<640 && hlsy<560){
          if((hlsx + 80 == wKxPos && hlsy + 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+80, hlsy+160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy + 160 == wyPos2) || 
          (hlsx + 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 160 == wyPos5) || 
          (hlsx + 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy + 160 == wyPos8) || 
          (hlsx + 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
          (hlsx + 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx + 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
          (hlsx + 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+80, hlsy+160, 80,80)
          }
        }
  
          //highlight bottom left (-1,2)
        if(hlsx>80 && hlsy<560){
          if((hlsx - 80 == wKxPos && hlsy + 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-80, hlsy+160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx - 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy + 160 == wyPos2) || 
          (hlsx - 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 160 == wyPos5) || 
          (hlsx - 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy + 160 == wyPos8) || 
          (hlsx - 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
          (hlsx - 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx - 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
          (hlsx - 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-80, hlsy+160, 80,80)
          }
        }
  
          //highlight top left (-2,-1)
        if(hlsx-160>=80 && hlsy-80>=80){          
          if((hlsx - 160 == wKxPos && hlsy - 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-160, hlsy-80, 80,80)
            inCheck = true;
          }
          else if( 
          (hlsx - 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy - 80 == wyPos2) || 
          (hlsx - 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy - 80 == wyPos5) || 
          (hlsx - 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy - 80 == wyPos8) || 
          (hlsx - 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
          (hlsx - 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx - 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
          (hlsx - 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-160, hlsy-80, 80,80)
          }
        }
  
          //highlight top right (2,-1)
        if(hlsx<560 && hlsy-80>=80){
          if((hlsx + 160 == wKxPos && hlsy - 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+160, hlsy-80, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy - 80 == wyPos2) || 
          (hlsx + 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy - 80 == wyPos5) || 
          (hlsx + 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy - 80 == wyPos8) || 
          (hlsx + 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
          (hlsx + 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx + 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
          (hlsx + 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+160, hlsy-80, 80,80)
          }
        }
        
          //highlight bottom right (2,1)
        if(hlsx<560 && hlsy<640){
          if((hlsx + 160 == wKxPos && hlsy + 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+160, hlsy+80, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy + 80 == wyPos2) || 
          (hlsx + 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy + 80 == wyPos5) || 
          (hlsx + 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy + 80 == wyPos8) || 
          (hlsx + 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
          (hlsx + 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
          (hlsx + 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+160, hlsy+80, 80,80)
          }
        }
      
          //highlight bottom left (-2,1)
        if(hlsx>160 && hlsy<640){
          if((hlsx - 160 == wKxPos && hlsy + 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-160, hlsy+80, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx - 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy + 80 == wyPos2) || 
          (hlsx - 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy + 80 == wyPos5) || 
          (hlsx - 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy + 80 == wyPos8) || 
          (hlsx - 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
          (hlsx - 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
          (hlsx - 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-160, hlsy+80, 80,80)
          }
        }
      }
       //when bKnight2 selected
       if(highlight == 1 && bKn2pressed == 1){

        //highlight top left (-1,-2)
        if(hlsx-80>=80 && hlsy-160>=80){
          if((hlsx - 80 == wKxPos && hlsy - 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-80, hlsy-160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx - 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy - 160 == wyPos2) || 
          (hlsx - 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy - 160 == wyPos5) || 
          (hlsx - 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy - 160 == wyPos8) || 
          (hlsx - 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
          (hlsx - 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx - 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
          (hlsx - 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-80, hlsy-160, 80,80)
          }
        }
      
          //highlight top right (1,-2)
        if(hlsx<640 && hlsy-160>=80){
          if((hlsx + 80 == wKxPos && hlsy - 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+80, hlsy-160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 80 == wQxPos && hlsy - 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy - 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy - 160 == wyPos2) || 
          (hlsx + 80 == wxPos3 && hlsy - 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy - 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy - 160 == wyPos5) || 
          (hlsx + 80 == wxPos6 && hlsy - 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  - 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy - 160 == wyPos8) || 
          (hlsx + 80 == wRxPos1 && hlsy - 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy - 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy - 160 == wByPos1) || 
          (hlsx + 80 == wBxPos2 && hlsy - 160 == wByPos2) || (hlsx + 80 == wKnxPos2 && hlsy - 160 == wKnyPos2) || 
          (hlsx + 80 == wKnxPos1 && hlsy - 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+80, hlsy-160, 80,80)
          }
        }
  
          //highlight bottom right (1,2)
        if(hlsx<640 && hlsy<560){
          if((hlsx + 80 == wKxPos && hlsy + 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+80, hlsy+160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx + 80 == wxPos2 && hlsy + 160 == wyPos2) || 
          (hlsx + 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx + 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 160 == wyPos5) || 
          (hlsx + 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx + 80 == wxPos8 && hlsy + 160 == wyPos8) || 
          (hlsx + 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx + 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
          (hlsx + 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx + 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
          (hlsx + 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+80, hlsy+160, 80,80)
          }
        }
  
          //highlight bottom left (-1,2)
        if(hlsx>80 && hlsy<560){
          if((hlsx - 80 == wKxPos && hlsy + 160 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-80, hlsy+160, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx - 80 == wQxPos && hlsy + 160 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 160 == wyPos1) || (hlsx - 80 == wxPos2 && hlsy + 160 == wyPos2) || 
          (hlsx - 80 == wxPos3 && hlsy + 160 == wyPos3) || (hlsx - 80 == wxPos4 && hlsy + 160 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 160 == wyPos5) || 
          (hlsx - 80 == wxPos6 && hlsy + 160 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy  + 160 == wyPos7) || (hlsx - 80 == wxPos8 && hlsy + 160 == wyPos8) || 
          (hlsx - 80 == wRxPos1 && hlsy + 160 == wRyPos1) || (hlsx - 80 == wRxPos2 && hlsy + 160 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 160 == wByPos1) || 
          (hlsx - 80 == wBxPos2 && hlsy + 160 == wByPos2) || (hlsx - 80 == wKnxPos2 && hlsy + 160 == wKnyPos2) || 
          (hlsx - 80 == wKnxPos1 && hlsy + 160 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-80, hlsy+160, 80,80)
          }
        }
  
          //highlight top left (-2,-1)
        if(hlsx-160>=80 && hlsy-80>=80){          
          if((hlsx - 160 == wKxPos && hlsy - 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-160, hlsy-80, 80,80)
            inCheck = true;
          }
          else if( 
          (hlsx - 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy - 80 == wyPos2) || 
          (hlsx - 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy - 80 == wyPos5) || 
          (hlsx - 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy - 80 == wyPos8) || 
          (hlsx - 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
          (hlsx - 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx - 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
          (hlsx - 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-160, hlsy-80, 80,80)
          }
        }
  
          //highlight top right (2,-1)
        if(hlsx<560 && hlsy-80>=80){
          if((hlsx + 160 == wKxPos && hlsy - 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+160, hlsy-80, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 160 == wQxPos && hlsy - 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy - 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy - 80 == wyPos2) || 
          (hlsx + 160 == wxPos3 && hlsy - 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy - 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy - 80 == wyPos5) || 
          (hlsx + 160 == wxPos6 && hlsy - 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy  - 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy - 80 == wyPos8) || 
          (hlsx + 160 == wRxPos1 && hlsy - 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy - 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy - 80 == wByPos1) || 
          (hlsx + 160 == wBxPos2 && hlsy - 80 == wByPos2) || (hlsx + 160 == wKnxPos2 && hlsy - 80 == wKnyPos2) || 
          (hlsx + 160 == wKnxPos1 && hlsy - 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+160, hlsy-80, 80,80)
          }
        }
        
          //highlight bottom right (2,1)
        if(hlsx<560 && hlsy<640){
          if((hlsx + 160 == wKxPos && hlsy + 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx+160, hlsy+80, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx + 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx + 160 == wxPos2 && hlsy + 80 == wyPos2) || 
          (hlsx + 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx + 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 160 == wxPos5 && hlsy + 80 == wyPos5) || 
          (hlsx + 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx + 160 == wxPos8 && hlsy + 80 == wyPos8) || 
          (hlsx + 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx + 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
          (hlsx + 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
          (hlsx + 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx+160, hlsy+80, 80,80)
          }
        }
      
          //highlight bottom left (-2,1)
        if(hlsx>160 && hlsy<640){
          if((hlsx - 160 == wKxPos && hlsy + 80 == wKyPos)){
            fill(139,0,0)
            rect(hlsx-160, hlsy+80, 80,80)
            inCheck = true;
          }
          else if(
          (hlsx - 160 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 160 == wxPos1 && hlsy + 80 == wyPos1) || (hlsx - 160 == wxPos2 && hlsy + 80 == wyPos2) || 
          (hlsx - 160 == wxPos3 && hlsy + 80 == wyPos3) || (hlsx - 160 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 160 == wxPos5 && hlsy + 80 == wyPos5) || 
          (hlsx - 160 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 160 == wxPos7 && hlsy + 80 == wyPos7) || (hlsx - 160 == wxPos8 && hlsy + 80 == wyPos8) || 
          (hlsx - 160 == wRxPos1 && hlsy + 80 == wRyPos1) || (hlsx - 160 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 160 == wBxPos1 && hlsy + 80 == wByPos1) || 
          (hlsx - 160 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 160 == wKnxPos2 && hlsy + 80 == wKnyPos2) || 
          (hlsx - 160 == wKnxPos1 && hlsy + 80 == wKnyPos1)){
            fill(255,0,0)
            rect(hlsx-160, hlsy+80, 80,80)
          }
        }
      }

      //bPawn1 selected
      if(highlight == 1 && bp1pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp1BR = 1;

        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp1BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp1BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp1BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp1BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp1BL = 0;
        }
      }

      //bPawn2 selected
      if(highlight == 1 && bp2pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp2BR = 1;

        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp2BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp2BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp2BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp2BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp2BL = 0;
        }
      }



      //bPawn3 selected
      if(highlight == 1 && bp3pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp3BR = 1;

        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp3BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp3BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp3BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp3BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp3BL = 0;
        }
      }

      //bPawn4 selected
      if(highlight == 1 && bp4pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp4BR = 1;
        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp4BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp4BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp4BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp4BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp4BL = 0;
        }
      }



      //bPawn5 selected
      if(highlight == 1 && bp5pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp5BR = 1;

        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp5BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp5BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp5BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp5BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp5BL = 0;
        }
      }

      //bPawn6 selected
      if(highlight == 1 && bp6pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp6BR = 1;

        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp6BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp6BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp6BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp6BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp6BL = 0;
        }
      }



      //bPawn7 selected
      if(highlight == 1 && bp7pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp7BR = 1;

        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp7BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp7BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp7BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp7BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp7BL = 0;
        }
      }

      //bPawn8 selected
      if(highlight == 1 && bp8pressed == 1){
        //bottom right
        if((hlsx + 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx + 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx + 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx + 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx + 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx + 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx + 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx + 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx + 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx + 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx + 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx + 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx + 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx + 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx + 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx + 80, hlsy + 80, 80,80)
          bp8BR = 1;
        }
        else if((hlsx + 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp8BR = 1;
          fill(139,0,0);
          rect(hlsx + 80, hlsy + 80, 80,80)
        }
        else{
          bp8BR = 0;
        }
        //bottom left
        if((hlsx - 80 == wQxPos && hlsy + 80 == wQyPos) || (hlsx - 80 == wxPos1 && hlsy + 80 == wyPos1) || 
        (hlsx - 80 == wxPos2 && hlsy + 80 == wyPos2) || (hlsx - 80 == wxPos3 && hlsy + 80 == wyPos3) || 
        (hlsx - 80 == wxPos4 && hlsy + 80 == wyPos4) || (hlsx - 80 == wxPos5 && hlsy + 80 == wyPos5) || 
        (hlsx - 80 == wxPos6 && hlsy + 80 == wyPos6) || (hlsx - 80 == wxPos7 && hlsy + 80 == wyPos7) || 
        (hlsx - 80 == wxPos8 && hlsy + 80 == wyPos8) || (hlsx - 80 == wRxPos1 && hlsy + 80 == wRyPos1) || 
        (hlsx - 80 == wRxPos2 && hlsy + 80 == wRyPos2) || (hlsx - 80 == wBxPos1 && hlsy + 80 == wByPos1) || 
        (hlsx - 80 == wBxPos2 && hlsy + 80 == wByPos2) || (hlsx - 80 == wKnxPos1 && hlsy + 80 == wKnyPos1) || 
        (hlsx - 80 == wKnxPos2 && hlsy + 80 == wKnyPos2)){
          fill(255,0,0)
          rect(hlsx - 80, hlsy + 80, 80,80)
          bp8BL = 1;
        }
        else if((hlsx - 80 == wKxPos && hlsy + 80 == wKyPos)){
          inCheck = true;
          bp8BL = 1;
          fill(139,0,0);
          rect(hlsx - 80, hlsy + 80, 80,80)
        }
        else{
          bp8BL = 0;
        }
      }      



      




    wPawn1 = image(wPawnImg, wxPos1, wyPos1, 80,80)
    wPawn2 = image(wPawnImg, wxPos2, wyPos2, 80,80)
    wPawn3 = image(wPawnImg, wxPos3, wyPos3, 80,80)
    wPawn4 = image(wPawnImg, wxPos4, wyPos4, 80,80)
    wPawn5 = image(wPawnImg, wxPos5, wyPos5, 80,80)
    wPawn6 = image(wPawnImg, wxPos6, wyPos6, 80,80)
    wPawn7 = image(wPawnImg, wxPos7, wyPos7, 80,80)
    wPawn8 = image(wPawnImg, wxPos8, wyPos8, 80,80)

    bPawn1 = image(bPawnImg, xPos1 ,yPos1,80,80)
    bPawn2 = image(bPawnImg, xPos2 ,yPos2, 80,80)
    bPawn3 = image(bPawnImg, xPos3 ,yPos3, 80,80)
    bPawn4 = image(bPawnImg, xPos4 ,yPos4, 80,80)
    bPawn5 = image(bPawnImg, xPos5 ,yPos5, 80,80)
    bPawn6 = image(bPawnImg, xPos6 ,yPos6, 80,80)
    bPawn7 = image(bPawnImg, xPos7 ,yPos7, 80,80)
    bPawn8 = image(bPawnImg, xPos8 ,yPos8, 80,80)

    bKing = image(bKingImg, bKxPos, bKyPos, 80,80)
    wKing = image(wKingImg, wKxPos, wKyPos, 80,80)

    bRook1 = image(bRookImg, bRxPos1, bRyPos1, 80, 80)
    bRook2 = image(bRookImg, bRxPos2, bRyPos2, 80, 80)
    wRook1 = image(wRookImg, wRxPos1, wRyPos1, 80, 80)
    wRook2 = image(wRookImg, wRxPos2, wRyPos2, 80, 80)

    bBishop1 = image(bBishopImg, bBxPos1, bByPos1, 80,80)
    bBishop2 = image(bBishopImg, bBxPos2, bByPos2, 80,80)
    wBishop1 = image(wBishopImg, wBxPos1, wByPos1, 80,80)
    wBishop2 = image(wBishopImg, wBxPos2, wByPos2, 80,80)

    bQueen = image(bQueenImg, bQxPos, bQyPos, 80, 80)
    WQueen = image(wQueenImg, wQxPos, wQyPos, 80, 80)

    bKnight1 = image(bKnightImg, bKnxPos1, bKnyPos1, 80, 80)
    bKnight2 = image(bKnightImg, bKnxPos2, bKnyPos2, 80, 80)
    wKnight1 = image(wKnightImg, wKnxPos1, wKnyPos1, 80, 80)
    wKnight2 = image(wKnightImg, wKnxPos2, wKnyPos2, 80, 80)

}

let bp1BL = 0;
let bp1BR = 0;
let bp2BL = 0;
let bp2BR = 0;
let bp3BL = 0;
let bp3BR = 0;
let bp4BL = 0;
let bp4BR = 0;
let bp5BL = 0;
let bp5BR = 0;
let bp6BL = 0;
let bp6BR = 0;
let bp7BL = 0;
let bp7BR = 0;
let bp8BL = 0;
let bp8BR = 0;


//old X/Y pos for b Pawns
let oldYPos1, oldYPos2, oldYPos3, oldYPos4,oldYPos5, oldYPos6,oldYPos7, oldYPos8 ;
let oldXPos1, oldXPos2, oldXPos3, oldXPos4,oldXPos5, oldXPos6,oldXPos7, oldXPos8;

//old X/Y pos for b King
let oldKxPos, oldKyPos;

//old X/Y pos for b Rooks
let oldRxPos1, oldRyPos1;
let oldRxPos2, oldRyPos2;

//old X/Y pos for b Bishops
let oldBxPos1, oldByPos1;
let oldBxPos2, oldByPos2;

//old X/Y pos for b Queen
let oldQxPos, oldQyPos;

//old X/Y pos for b Knights
let oldKnxPos1, oldKnyPos1;
let oldKnxPos2, oldKnyPos2;

//black pawn pressed
let bp1pressed = 0;
let bp2pressed = 0;
let bp3pressed = 0;
let bp4pressed = 0;
let bp5pressed = 0;
let bp6pressed = 0;
let bp7pressed = 0;
let bp8pressed = 0;

//black King pressed
let bKpressed = 0; 

//black Rooks pressed
let bR1pressed = 0;
let bR2pressed = 0;

//black Bishops pressed
let bB1pressed = 0;
let bB2pressed = 0;

//black Queen pressed
let bQpressed = 0; 

//black Knight pressed;
let bKn1pressed = 0;
let bKn2pressed = 0;

let hlsx; 
let hlsy;
let highlight = 0;
let bPawn1SP = true;
let bPawn2SP = true;
let bPawn3SP = true;
let bPawn4SP = true;
let bPawn5SP = true;
let bPawn6SP = true;
let bPawn7SP = true;
let bPawn8SP = true;

function checkPawnSP(){
  if(yPos1 != 160){
    bPawn1SP = false;
  }
  if(yPos2 != 160){
    bPawn2SP = false;
  }
  if(yPos3 != 160){
    bPawn3SP = false;
  }
  if(yPos4 != 160){
    bPawn4SP = false;
  }
  if(yPos5 != 160){
    bPawn5SP = false;
  }
  if(yPos6 != 160){
    bPawn6SP = false;
  }
  if(yPos7 != 160){
    bPawn7SP = false;
  }
  if(yPos8 != 160){
    bPawn8SP = false;
  }
}

function mousePressed() {
  if(mouseX > 0 && mouseX < 50 && mouseY > 750 && mouseY < 800){
      window.location.href = "title.html"
    }

    //black pawn 1
  else if(bp1pressed == 0 && mouseX>xPos1 && mouseX<xPos1+80 && mouseY>yPos1 && mouseY<yPos1+80){
    resetPress();
    oldXPos1 = xPos1
    oldYPos1 = yPos1
    bp1pressed = 1;

    hlsx = xPos1;
    hlsy = yPos1;
    highlight = 1
  } 
    else if(bp1pressed == 1 && mouseX>xPos1 && mouseX<xPos1+80 && mouseY>yPos1+80 &&mouseY<yPos1+160){
        yPos1 = oldYPos1 + 80
        bp1pressed = 0;
        highlight = 0;
        AImove(1);
        moveCount = moveCount+1;
    }

    else if(bp1pressed == 1 && mouseX>xPos1 && mouseX<xPos1+80 && mouseY>yPos1+160 &&mouseY<yPos1+240){
      checkPawnSP()
      if(bPawn1SP == true){
        yPos1 = oldYPos1 + 160
        bp1pressed = 0;
        highlight = 0;
        AImove(1);
        moveCount = moveCount+1;
      }
    }
    else if(bp1pressed == 1 && bp1BR == 1 && mouseX>xPos1+80 && mouseX<xPos1+160 && mouseY>yPos1+80 && mouseY<yPos1+160){
      blackTake(oldXPos1 + 80, oldYPos1 + 80)
      xPos1 = oldXPos1 + 80
      yPos1 = oldYPos1 + 80
      bp1pressed = 0;
      highlight = 0;
      bp1BR == 0;
      AImove(1);
      moveCount = moveCount+1;
    }
    else if(bp1pressed == 1 && bp1BL == 1 && mouseX>xPos1-80 && mouseX<xPos1 && mouseY>yPos1+80 && mouseY<yPos1+160){
      blackTake(oldXPos1 - 80, oldYPos1 + 80)
      xPos1 = oldXPos1 - 80
      yPos1 = oldYPos1 + 80
      bp1pressed = 0;
      highlight = 0;
      bp1BL == 0;
      AImove(1);
      moveCount = moveCount+1;
    }

    //black pawn2
  else if(bp2pressed == 0 && mouseX>xPos2 && mouseX<xPos2+80 && mouseY>yPos2 && mouseY<yPos2+80){
    resetPress();
    oldXPos2 = xPos2;
    oldYPos2 = yPos2;
    bp2pressed = 1;

    hlsx = xPos2;
    hlsy = yPos2;
    highlight = 1
  }
  else if(bp2pressed == 1 && mouseX>xPos2 && mouseX<xPos2+80 && mouseY>yPos2+ 80 && mouseY<yPos2+160){
    yPos2 = oldYPos2+ 80
    bp2pressed = 0;
    highlight=0;
    AImove(1);
    moveCount = moveCount+1;
  }

  else if(bp2pressed == 1 && mouseX>xPos2 && mouseX<xPos2+80 && mouseY>yPos2+ 160 && mouseY<yPos2+240){
    checkPawnSP()
    if(bPawn2SP == true){
      yPos2 = oldYPos2 + 160
      bp2pressed = 0;
      highlight = 0;
      AImove(1);
      moveCount = moveCount+1;
    }
  }
  else if(bp2pressed == 1 && bp2BR == 1 && mouseX>xPos2+80 && mouseX<xPos2+160 && mouseY>yPos2+80 && mouseY<yPos2+160){
    blackTake(oldXPos2 + 80, oldYPos2 + 80)
    xPos2 = oldXPos2 + 80
    yPos2 = oldYPos2 + 80
    bp2pressed = 0;
    highlight = 0;
    bp2BR == 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  else if(bp2pressed == 1 && bp2BL == 1 && mouseX>xPos2-80 && mouseX<xPos2 && mouseY>yPos2+80 && mouseY<yPos2+160){
    blackTake(oldXPos2 - 80, oldYPos2 + 80)
    xPos2 = oldXPos2 - 80
    yPos2 = oldYPos2 + 80
    bp2pressed = 0;
    highlight = 0;
    bp2BL == 0;
    AImove(1);
    moveCount = moveCount+1;
  }

//black pawn3
  else if(bp3pressed == 0 && mouseX>xPos3 && mouseX<xPos3+80 && mouseY>yPos3 && mouseY<yPos3+80){
    resetPress();
    oldXPos3 = xPos3;
    oldYPos3 = yPos3;
    bp3pressed = 1;

    hlsx = xPos3;
    hlsy = yPos3;
    highlight = 1
  }
  else if(bp3pressed == 1 && mouseX>xPos3 && mouseX< xPos3+80 && mouseY>yPos3+80 && mouseY<yPos3+160){
    yPos3 = oldYPos3+80
    bp3pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  else if(bp3pressed == 1 && mouseX>xPos3 && mouseX< xPos3+80 && mouseY>yPos3+160 && mouseY<yPos3+240){
    checkPawnSP()
    if(bPawn3SP == true){
      yPos3 = oldYPos3 + 160
      bp3pressed = 0;
      highlight = 0;
      AImove(1);
      moveCount = moveCount+1;
    }
  }
  else if(bp3pressed == 1 && bp3BR == 1 && mouseX>xPos3+80 && mouseX<xPos3+160 && mouseY>yPos3+80 && mouseY<yPos3+160){
    blackTake(oldXPos3 + 80, oldYPos3 + 80)
    xPos3 = oldXPos3 + 80
    yPos3 = oldYPos3 + 80
    bp3pressed = 0;
    highlight = 0;
    bp3BR == 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  else if(bp3pressed == 1 && bp3BL == 1 && mouseX>xPos3-80 && mouseX<xPos3 && mouseY>yPos3+80 && mouseY<yPos3+160){
    blackTake(oldXPos3 - 80, oldYPos3 + 80)
    xPos3 = oldXPos3 - 80
    yPos3 = oldYPos3 + 80
    bp3pressed = 0;
    highlight = 0;
    bp3BL == 0;
    AImove(1);
    moveCount = moveCount+1;
  }

 //black pawn4
 else if(bp4pressed == 0 && mouseX>xPos4 && mouseX<xPos4+80 && mouseY>yPos4 && mouseY<yPos4+80){
  resetPress();
  oldXPos4 = xPos4;
  oldYPos4 = yPos4;
  bp4pressed = 1;

  hlsx = xPos4;
  hlsy = yPos4;
  highlight = 1
}
else if(bp4pressed == 1 && mouseX>xPos4  && mouseX< xPos4+80 && mouseY>yPos4+80 && mouseY<yPos4+160){
  yPos4 = oldYPos4+80
  bp4pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
} 
else if(bp4pressed == 1 && mouseX>xPos4  && mouseX< xPos4+80 && mouseY>yPos4+160 && mouseY<yPos4+240){
  checkPawnSP()
  if(bPawn4SP == true){
    yPos4 = oldYPos4 + 160
    bp4pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
}
else if(bp4pressed == 1 && bp4BR == 1 && mouseX>xPos4+80 && mouseX<xPos4+160 && mouseY>yPos4+80 && mouseY<yPos4+160){
  blackTake(oldXPos4 + 80, oldYPos4 + 80)
  xPos4 = oldXPos4 + 80
  yPos4 = oldYPos4 + 80
  bp4pressed = 0;
  highlight = 0;
  bp4BR == 0;
  AImove(1);
  moveCount = moveCount+1;
}
else if(bp4pressed == 1 && bp4BL == 1 && mouseX>xPos4-80 && mouseX<xPos4 && mouseY>yPos4+80 && mouseY<yPos4+160){
  blackTake(oldXPos4 - 80, oldYPos4 + 80)
  xPos4 = oldXPos4 - 80
  yPos4 = oldYPos4 + 80
  bp4pressed = 0;
  highlight = 0;
  bp4BL == 0;
  AImove(1);
  moveCount = moveCount+1;
}

 //black pawn5
 else if(bp5pressed == 0 && mouseX>xPos5 && mouseX<xPos5+80 && mouseY>yPos5 && mouseY<yPos5+80){
  resetPress();
  oldXPos5 = xPos5;
  oldYPos5 = yPos5;
  bp5pressed = 1;

  hlsx = xPos5;
  hlsy = yPos5;
  highlight = 1
}
else if(bp5pressed == 1 && mouseX>xPos5 && mouseX< xPos5+80 && mouseY>yPos5+80 && mouseY<yPos5+160){
  yPos5 = oldYPos5+80
  bp5pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
} 
else if(bp5pressed == 1 && mouseX>xPos5 && mouseX< xPos5+80 && mouseY>yPos5+160 && mouseY<yPos5+240){
  checkPawnSP()
  if(bPawn5SP == true){
    yPos5 = oldYPos5 + 160
    bp5pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  } 
}
else if(bp5pressed == 1 && bp5BR == 1 && mouseX>xPos5+80 && mouseX<xPos5+160 && mouseY>yPos5+80 && mouseY<yPos5+160){
  blackTake(oldXPos5 + 80, oldYPos5 + 80)
  xPos5 = oldXPos5 + 80
  yPos5 = oldYPos5 + 80
  bp5pressed = 0;
  highlight = 0;
  bp5BR == 0;
  AImove(1);
  moveCount = moveCount+1;
}
else if(bp5pressed == 1 && bp5BL == 1 && mouseX>xPos5-80 && mouseX<xPos5 && mouseY>yPos5+80 && mouseY<yPos5+160){
  blackTake(oldXPos5 - 80, oldYPos5 + 80)
  xPos5 = oldXPos5 - 80
  yPos5 = oldYPos5 + 80
  bp5pressed = 0;
  highlight = 0;
  bp5BL == 0;
  AImove(1);
  moveCount = moveCount+1;
}

 //black pawn6
 else if(bp6pressed == 0 && mouseX>xPos6 && mouseX<xPos6+80 && mouseY>yPos6 && mouseY<yPos6+80){
  resetPress();
  oldXPos6 = xPos6;
  oldYPos6 = yPos6;
  bp6pressed = 1;

  hlsx = xPos6;
  hlsy = yPos6;
  highlight = 1
}
else if(bp6pressed == 1 && mouseX>xPos6 && mouseX< xPos6+80 && mouseY>yPos6+80 && mouseY<yPos6+160){
  yPos6 = oldYPos6+80
  bp6pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
} 
else if(bp6pressed == 1 && mouseX>xPos6 && mouseX< xPos6+80 && mouseY>yPos6+160 && mouseY<yPos6+240){
  checkPawnSP()
  if(bPawn6SP == true){
    yPos6 = oldYPos6 + 160
    bp6pressed = 0;
    highlight = 0;
    AImove(1); 
    moveCount = moveCount+1; 
  } 
}
else if(bp6pressed == 1 && bp6BR == 1 && mouseX>xPos6+80 && mouseX<xPos6+160 && mouseY>yPos6+80 && mouseY<yPos6+160){
  blackTake(oldXPos6 + 80, oldYPos6 + 80)
  xPos6 = oldXPos6 + 80
  yPos6 = oldYPos6 + 80
  bp6pressed = 0;
  highlight = 0;
  bp6BR == 0;
  AImove(1);
  moveCount = moveCount+1;
}
else if(bp6pressed == 1 && bp6BL == 1 && mouseX>xPos6-80 && mouseX<xPos6 && mouseY>yPos6+80 && mouseY<yPos6+160){
  blackTake(oldXPos6 - 80, oldYPos6 + 80)
  xPos6 = oldXPos6 - 80
  yPos6 = oldYPos6 + 80
  bp6pressed = 0;
  highlight = 0;
  bp6BL == 0;
  AImove(1);
  moveCount = moveCount+1;
}

 //black pawn7
 else if(bp7pressed == 0 && mouseX>xPos7 && mouseX<xPos7+80 && mouseY>yPos7 && mouseY<yPos7+80){
  resetPress();
  oldXPos7 = xPos7;
  oldYPos7 = yPos7;
  bp7pressed = 1;

  hlsx = xPos7;
  hlsy = yPos7;
  highlight = 1
}
else if(bp7pressed == 1 && mouseX>xPos7 && mouseX< xPos7+80 && mouseY>yPos7+80 && mouseY<yPos7+160){
  yPos7 = oldYPos7+80
  bp7pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
} 
else if(bp7pressed == 1 && mouseX>xPos7 && mouseX< xPos7+80 && mouseY>yPos7+160 && mouseY<yPos7+240){
  checkPawnSP()
  if(bPawn7SP == true){
    yPos7 = oldYPos7 + 160
    bp7pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  } 
}
else if(bp7pressed == 1 && bp7BR == 1 && mouseX>xPos7+80 && mouseX<xPos7+160 && mouseY>yPos7+80 && mouseY<yPos7+160){
  blackTake(oldXPos7 + 80, oldYPos7 + 80)
  xPos7 = oldXPos7 + 80
  yPos7 = oldYPos7 + 80
  bp7pressed = 0;
  highlight = 0;
  bp7BR == 0;
  AImove(1);
  moveCount = moveCount+1;
}
else if(bp7pressed == 1 && bp7BL == 1 && mouseX>xPos7-80 && mouseX<xPos7 && mouseY>yPos7+80 && mouseY<yPos7+160){
  blackTake(oldXPos7 - 80, oldYPos7 + 80)
  xPos7 = oldXPos7 - 80
  yPos7 = oldYPos7 + 80
  bp7pressed = 0;
  highlight = 0;
  bp7BL == 0;
  AImove(1);
  moveCount = moveCount+1;
}

 //black pawn8
 else if(bp8pressed == 0 && mouseX>xPos8 && mouseX<xPos8+80 && mouseY>yPos8 && mouseY<yPos8+80){
  resetPress();
  oldXPos8 = xPos8;
  oldYPos8 = yPos8;
  bp8pressed = 1;

  hlsx = xPos8;
  hlsy = yPos8;
  highlight = 1
}
else if(bp8pressed == 1 && mouseX>xPos8 && mouseX< xPos8+80 && mouseY>yPos8+80 && mouseY<yPos8+160){
  yPos8 = oldYPos8+80
  bp8pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
} 
else if(bp8pressed == 1 && mouseX>xPos8 && mouseX< xPos8+80 && mouseY>yPos8+160 && mouseY<yPos8+240){
  checkPawnSP()
  if(bPawn8SP == true){
    yPos8 = oldYPos8 + 160
    bp8pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  } 
}
else if(bp8pressed == 1 && bp8BR == 1 && mouseX>xPos8+80 && mouseX<xPos8+160 && mouseY>yPos8+80 && mouseY<yPos8+160){
  blackTake(oldXPos8 + 80, oldYPos8 + 80)
  xPos8 = oldXPos8 + 80
  yPos8 = oldYPos8 + 80
  bp8pressed = 0;
  highlight = 0;
  bp8BR == 0;
  AImove(1);
  moveCount = moveCount+1;
}
else if(bp8pressed == 1 && bp8BL == 1 && mouseX>xPos8-80 && mouseX<xPos8 && mouseY>yPos8+80 && mouseY<yPos8+160){
  blackTake(oldXPos8 - 80, oldYPos8 + 80)
  xPos8 = oldXPos8 - 80
  yPos8 = oldYPos8 + 80
  bp8pressed = 0;
  highlight = 0;
  bp8BL == 0;
  AImove(1);
  moveCount = moveCount+1;
}

//black king
else if(bKpressed == 0 && mouseX>bKxPos && mouseX<bKxPos+80 && mouseY>bKyPos && mouseY<bKyPos+80){
  resetPress();
  oldKxPos = bKxPos;
  oldKyPos = bKyPos;
  bKpressed = 1;
  highlight = 1;
  hlsx = bKxPos;
  hlsy = bKyPos;

}
//moving right
else if(bKpressed == 1 && mouseX>bKxPos+80 && mouseX<bKxPos+160 && mouseY>bKyPos && mouseY<bKyPos+80){
  blackTake(oldKxPos+80, oldKyPos)
  bKxPos = oldKxPos+80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving left
else if(bKpressed == 1 && mouseX>bKxPos-80 && mouseX<bKxPos && mouseY>bKyPos && mouseY<bKyPos+80){
  blackTake(oldKxPos-80, oldKyPos)
  bKxPos = oldKxPos-80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving down
else if(bKpressed == 1 && mouseX>bKxPos && mouseX<bKxPos+80 && mouseY>bKyPos+80 && mouseY<bKyPos+160){
  blackTake(oldKxPos, oldKyPos+80)
  bKyPos = oldKyPos+80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving up
else if(bKpressed == 1 && mouseX>bKxPos && mouseX<bKxPos+80 && mouseY>bKyPos-80 && mouseY<bKyPos){
  blackTake(oldKxPos, oldKyPos-80)
  bKyPos = oldKyPos-80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving top right
else if(bKpressed == 1 && mouseX>bKxPos+80 && mouseX<bKxPos+160 && mouseY>bKyPos-80 && mouseY<bKyPos){
  blackTake(oldKxPos+80, oldKyPos-80)
  bKyPos = oldKyPos-80;
  bKxPos = oldKxPos+80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving top left
else if(bKpressed == 1 && mouseX>bKxPos-80 && mouseX<bKxPos && mouseY>bKyPos-80 && mouseY<bKyPos){
  blackTake(oldKxPos-80, oldKyPos-80)
  bKyPos = oldKyPos-80;
  bKxPos = oldKxPos-80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving bottom left
else if(bKpressed == 1 && mouseX>bKxPos-80 && mouseX<bKxPos && mouseY>bKyPos+80 && mouseY<bKyPos+160){
  blackTake(oldKxPos-80, oldKyPos+80)
  bKyPos = oldKyPos+80;
  bKxPos = oldKxPos-80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving bottom right
else if(bKpressed == 1 && mouseX>bKxPos+80 && mouseX<bKxPos+160 && mouseY>bKyPos+80 && mouseY<bKyPos+160){
  blackTake(oldKxPos+80, oldKyPos+80)
  bKyPos = oldKyPos+80;
  bKxPos = oldKxPos+80;
  bKpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}

//black rook 1
else if(bR1pressed == 0 && mouseX>bRxPos1 && mouseX<bRxPos1+80 && mouseY>bRyPos1 && mouseY<bRyPos1+80){
  resetPress();
  oldRxPos1 = bRxPos1;
  oldRyPos1 = bRyPos1;
  bR1pressed = 1;

  hlsx = bRxPos1;
  hlsy = bRyPos1;
  highlight = 1
}
//moving right
else if(bR1pressed == 1 & mouseX>bRxPos1+80 && mouseX<720 && mouseY>bRyPos1 && mouseY<bRyPos1+80){
  let nSpace = Math.floor(mouseX/80)
  let cSpace = Math.floor(bRxPos1/80)
  checkOccupiedBR1()
  if(canMove == true){
    blackTake(oldRxPos1 + (80*(nSpace - cSpace)), oldRyPos1);
    bRxPos1 = oldRxPos1 + (80*(nSpace - cSpace))
  }
  bR1pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}

//moving left
else if(bR1pressed == 1 & mouseX>80 && mouseX<bRxPos1 && mouseY>bRyPos1 && mouseY<bRyPos1+80){
  let nSpace = Math.floor(mouseX/80)
  let cSpace = Math.floor(bRxPos1/80)
  checkOccupiedBR1()
  if(canMove == true){
    blackTake(oldRxPos1 - (80*(cSpace-nSpace)), oldRyPos1);
    bRxPos1 = oldRxPos1 - (80*(cSpace - nSpace))
  }
  bR1pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving down
else if(bR1pressed == 1 & mouseX>bRxPos1 && mouseX<bRxPos1+80 && mouseY>bRyPos1 && mouseY<720){
  let nSpace = Math.floor(mouseY/80)
  let cSpace = Math.floor(bRyPos1/80)
  checkOccupiedBR1();
  if(canMove == true){
    blackTake(oldRxPos1, oldRyPos1 + (80*(nSpace - cSpace)));
    bRyPos1 = oldRyPos1 + (80*(nSpace - cSpace)) 
  }
  bR1pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving up
else if(bR1pressed == 1 & mouseX>bRxPos1 && mouseX<bRxPos1+80 && mouseY>80 && mouseY<bRyPos1){
  let nSpace = Math.floor(mouseY/80)
  let cSpace = Math.floor(bRyPos1/80)
  checkOccupiedBR1()
  if(canMove == true){
    blackTake(oldRxPos1, oldRyPos1 - (80*(cSpace - nSpace)));
    bRyPos1 = oldRyPos1 - (80*(cSpace - nSpace))
  }
  bR1pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}

//black rook 2
else if(bR2pressed == 0 && mouseX>bRxPos2 && mouseX<bRxPos2+80 && mouseY>bRyPos2 && mouseY<bRyPos2+80){
  resetPress();
  oldRxPos2 = bRxPos2;
  oldRyPos2 = bRyPos2;
  bR2pressed = 1;

  hlsx = bRxPos2;
  hlsy = bRyPos2;
  highlight = 1

}
//moving right
else if(bR2pressed == 1 & mouseX>bRxPos2+80 && mouseX<720 && mouseY>bRyPos2 && mouseY<bRyPos2+80){
  let nSpace = Math.floor(mouseX/80)
  let cSpace = Math.floor(bRxPos2/80)
  blackTake(oldRxPos2 + (80*(nSpace - cSpace)), oldRyPos2);
  bRxPos2 = oldRxPos2 + (80*(nSpace - cSpace))
  bR2pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving left
else if(bR2pressed == 1 & mouseX>80 && mouseX<bRxPos2 && mouseY>bRyPos2 && mouseY<bRyPos2+80){
  let nSpace = Math.floor(mouseX/80)
  let cSpace = Math.floor(bRxPos2/80)
  blackTake(oldRxPos2 - (80*(cSpace-nSpace)), oldRyPos2);
  bRxPos2 = oldRxPos2 - (80*(cSpace - nSpace))
  bR2pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving down
else if(bR2pressed == 1 & mouseX>bRxPos2 && mouseX<bRxPos2+80 && mouseY>bRyPos2 && mouseY<720){
  let nSpace = Math.floor(mouseY/80)
  let cSpace = Math.floor(bRyPos2/80)
  blackTake(oldRxPos2, oldRyPos2 + (80*(nSpace - cSpace)));
  bRyPos2 = oldRyPos2 + (80*(nSpace - cSpace))
  bR2pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving up
else if(bR2pressed == 1 & mouseX>bRxPos2 && mouseX<bRxPos2+80 && mouseY>80 && mouseY<bRyPos2){
  let nSpace = Math.floor(mouseY/80)
  let cSpace = Math.floor(bRyPos2/80)
  blackTake(oldRxPos2, oldRyPos2 - (80*(cSpace - nSpace)));
  bRyPos2 = oldRyPos2 - (80*(cSpace - nSpace))
  bR2pressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}

//black bishop 1
else if(bB1pressed == 0 && mouseX>bBxPos1 && mouseX<bBxPos1+80 && mouseY>bByPos1 && mouseY<bByPos1+80){
  resetPress();
  oldBxPos1 = bBxPos1;
  oldByPos1 = bByPos1;
  bB1pressed = 1;

  hlsx = bBxPos1;
  hlsy = bByPos1;
  highlight = 1

}
//moving top left
else if(bB1pressed == 1 && mouseX>80 && mouseX<bBxPos1 && mouseY>80 && mouseY<bByPos1){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos1/80);
  let cSpaceY = Math.floor(bByPos1/80);
  if((cSpaceX-nSpaceX)  == (cSpaceY-nSpaceY)){
    blackTake(oldBxPos1 - (80*(cSpaceX-nSpaceX)),oldByPos1 - (80*(cSpaceY-nSpaceY)))
    bBxPos1 = oldBxPos1 - (80*(cSpaceX-nSpaceX))
    bByPos1 = oldByPos1 - (80*(cSpaceY-nSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB1pressed = 0;
  highlight = 0;
  
}
//moving bottom left
else if(bB1pressed == 1 && mouseX>80 && mouseX<bBxPos1 && mouseY<720 && mouseY>bByPos1+80){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos1/80);
  let cSpaceY = Math.floor(bByPos1/80);
  if((cSpaceX-nSpaceX) == (nSpaceY-cSpaceY)){
    blackTake(oldBxPos1 - (80*(cSpaceX-nSpaceX)), oldByPos1 + (80*(nSpaceY-cSpaceY)))
    bBxPos1 = oldBxPos1 - (80*(cSpaceX-nSpaceX))
    bByPos1 = oldByPos1 + (80*(nSpaceY-cSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB1pressed = 0;
  highlight = 0;
  
}
//moving top right
else if(bB1pressed == 1 && mouseX<720 && mouseX>bBxPos1+80 && mouseY>80 && mouseY<bByPos1){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos1/80);
  let cSpaceY = Math.floor(bByPos1/80);
  if((nSpaceX-cSpaceX)  == (cSpaceY-nSpaceY)){
    blackTake(oldBxPos1 + (80*(nSpaceX-cSpaceX)), oldByPos1 - (80*(cSpaceY-nSpaceY)))
    bBxPos1 = oldBxPos1 + (80*(nSpaceX-cSpaceX))
    bByPos1 = oldByPos1 - (80*(cSpaceY-nSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB1pressed = 0;
  highlight = 0;
  
}
//moving bottom right
else if(bB1pressed == 1 && mouseX<720 && mouseX>bBxPos1+80 && mouseY<720 && mouseY>bByPos1+80){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos1/80);
  let cSpaceY = Math.floor(bByPos1/80);
  if((nSpaceX-cSpaceX)  == (nSpaceY-cSpaceY)){
    blackTake(oldBxPos1 + (80*(nSpaceX-cSpaceX)), oldByPos1 - (80*(cSpaceY-nSpaceY)))
    bBxPos1 = oldBxPos1 + (80*(nSpaceX-cSpaceX))
    bByPos1 = oldByPos1 - (80*(cSpaceY-nSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB1pressed = 0;
  highlight = 0;
 
}

//black bishop 2
else if(bB2pressed == 0 && mouseX>bBxPos2 && mouseX<bBxPos2+80 && mouseY>bByPos2 && mouseY<bByPos2+80){
  resetPress();
  oldBxPos2 = bBxPos2;
  oldByPos2 = bByPos2;
  bB2pressed = 1;

  hlsx = bBxPos2;
  hlsy = bByPos2;
  highlight = 1
}
//moving top left
else if(bB2pressed == 1 && mouseX>80 && mouseX<bBxPos2 && mouseY>80 && mouseY<bByPos2){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos2/80);
  let cSpaceY = Math.floor(bByPos2/80);
  if((cSpaceX-nSpaceX)  == (cSpaceY-nSpaceY)){
    blackTake(oldBxPos2 - (80*(cSpaceX-nSpaceX)),oldByPos2 - (80*(cSpaceY-nSpaceY)))
    bBxPos2 = oldBxPos2 - (80*(cSpaceX-nSpaceX))
    bByPos2 = oldByPos2 - (80*(cSpaceY-nSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB2pressed = 0;
  highlight = 0;
 
}
//moving bottom left
else if(bB2pressed == 1 && mouseX>80 && mouseX<bBxPos2 && mouseY<720 && mouseY>bByPos2+80){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos2/80);
  let cSpaceY = Math.floor(bByPos2/80);
  if((cSpaceX-nSpaceX) == (nSpaceY-cSpaceY)){
    blackTake(oldBxPos2 - (80*(cSpaceX-nSpaceX)), oldByPos2 + (80*(nSpaceY-cSpaceY)))
    bBxPos2 = oldBxPos2 - (80*(cSpaceX-nSpaceX))
    bByPos2 = oldByPos2 + (80*(nSpaceY-cSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB2pressed = 0;
  highlight = 0;
  
}
//moving top right
else if(bB2pressed == 1 && mouseX<720 && mouseX>bBxPos2+80 && mouseY>80 && mouseY<bByPos2){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos2/80);
  let cSpaceY = Math.floor(bByPos2/80);
  if((nSpaceX-cSpaceX)  == (cSpaceY-nSpaceY)){
    blackTake(oldBxPos2 + (80*(nSpaceX-cSpaceX)), oldByPos2 - (80*(cSpaceY-nSpaceY)))
    bBxPos2 = oldBxPos2 + (80*(nSpaceX-cSpaceX))
    bByPos2 = oldByPos2 - (80*(cSpaceY-nSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB2pressed = 0;
  highlight = 0;
}
//moving bottom right
else if(bB2pressed == 1 && mouseX<720 && mouseX>bBxPos2+80 && mouseY<720 && mouseY>bByPos2+80){
  let nSpaceX = Math.floor(mouseX/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceX = Math.floor(bBxPos2/80);
  let cSpaceY = Math.floor(bByPos2/80);
  if((nSpaceX-cSpaceX)  == (nSpaceY-cSpaceY)){
    blackTake(oldBxPos2 + (80*(nSpaceX-cSpaceX)), oldByPos2 - (80*(cSpaceY-nSpaceY)))
    bBxPos2 = oldBxPos2 + (80*(nSpaceX-cSpaceX))
    bByPos2 = oldByPos2 - (80*(cSpaceY-nSpaceY))
    AImove(1);
    moveCount = moveCount+1;
  }
  bB2pressed = 0;
  highlight = 0;
}

//black Queen
else if(bQpressed == 0 && mouseX>bQxPos && mouseX<bQxPos+80 && mouseY>bQyPos && mouseY<bQyPos+80){
  resetPress();
  oldQxPos = bQxPos;
  oldQyPos = bQyPos;
  bQpressed = 1;

  hlsx = bQxPos;
  hlsy = bQyPos;
  highlight = 1

}
//moving right
else if(bQpressed == 1 && mouseX<720 && mouseX>bQxPos+80 && mouseY>bQyPos && mouseY<bQyPos+80){
  let nSpaceX = Math.floor(mouseX/80);
  let cSpaceX =  Math.floor(bQxPos/80);
  blackTake(oldQxPos + (80*(nSpaceX - cSpaceX)), oldQyPos);
  bQxPos = oldQxPos + ((nSpaceX - cSpaceX)*80)
  bQpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving left
else if(bQpressed == 1 && mouseX>80 && mouseX<bQxPos && mouseY>bQyPos && mouseY<bQyPos+80){
  let nSpaceX = Math.floor(mouseX/80);
  let cSpaceX =  Math.floor(bQxPos/80);
  blackTake(oldQxPos - (80*(cSpaceX-nSpaceX)), oldQyPos);
  bQxPos = oldQxPos - ((cSpaceX - nSpaceX)*80)
  bQpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving down
else if(bQpressed == 1 && mouseY<720 && mouseY>bQyPos+80 && mouseX>bQxPos && mouseX<bQxPos+80){
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceY =  Math.floor(bQyPos/80);
  blackTake(oldQxPos, oldQyPos + (80*(nSpaceY - cSpaceY)));
  bQyPos = oldQyPos + ((nSpaceY - cSpaceY)*80)
  bQpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving up
else if(bQpressed == 1 && mouseY>80 && mouseY<bQyPos && mouseX>bQxPos && mouseX<bQxPos+80){
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceY =  Math.floor(bQyPos/80);
  blackTake(oldQxPos, oldQyPos - (80*(cSpaceY - nSpaceY)));
  bQyPos = oldQyPos - ((cSpaceY - nSpaceY)*80)
  bQpressed = 0;
  highlight = 0;
  AImove(1);
  moveCount = moveCount+1;
}
//moving top left
else if(bQpressed == 1 && mouseX>80 && mouseX<bQxPos && mouseY>80 && mouseY<bQyPos){
  let nSpaceX = Math.floor(mouseX/80);
  let cSpaceX =  Math.floor(bQxPos/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceY =  Math.floor(bQyPos/80);
  if ((cSpaceX - nSpaceX) == (cSpaceY - nSpaceY)){
    blackTake(oldQxPos - (80*(cSpaceX-nSpaceX)),oldQyPos - (80*(cSpaceY-nSpaceY)))
    bQxPos = oldQxPos - ((cSpaceX - nSpaceX)*80);
    bQyPos = oldQyPos - ((cSpaceY - nSpaceY)*80);
    AImove(1);
    moveCount = moveCount+1;
  }
  bQpressed = 0;
  highlight = 0;
  
}
//moving bottom left
else if(bQpressed == 1 && mouseX>80 && mouseX<bQxPos && mouseY>bQyPos+80 && mouseY<720){
  let nSpaceX = Math.floor(mouseX/80);
  let cSpaceX =  Math.floor(bQxPos/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceY =  Math.floor(bQyPos/80);
  blackTake(oldQxPos - (80*(cSpaceX-nSpaceX)), oldQyPos + (80*(nSpaceY-cSpaceY)))
  if ((cSpaceX - nSpaceX) == (nSpaceY - cSpaceY)){
    bQxPos = oldQxPos - ((cSpaceX - nSpaceX)*80);
    bQyPos = oldQyPos + ((nSpaceY - cSpaceY)*80);
    AImove(1);
    moveCount = moveCount+1;
  }
  bQpressed = 0;
  highlight = 0;
}
//moving top right
else if(bQpressed == 1 && mouseX>bQxPos+80 && mouseX<720 && mouseY>80 && mouseY<bQyPos){
  let nSpaceX = Math.floor(mouseX/80);
  let cSpaceX =  Math.floor(bQxPos/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceY =  Math.floor(bQyPos/80);
  if ((nSpaceX - cSpaceX) == (cSpaceY - nSpaceY)){
    blackTake(oldQxPos + (80*(nSpaceX-cSpaceX)), oldQyPos - (80*(cSpaceY-nSpaceY)))
    bQxPos = oldQxPos + ((nSpaceX - cSpaceX)*80);
    bQyPos = oldQyPos - ((cSpaceY - nSpaceY)*80);
    AImove(1);
    moveCount = moveCount+1;
  }
  bQpressed = 0;
  highlight = 0;
}
//moving bottom right
else if(bQpressed == 1 && mouseX>bQxPos+80 && mouseX<720 && mouseY>bQyPos+80 && mouseY<720){
  let nSpaceX = Math.floor(mouseX/80);
  let cSpaceX =  Math.floor(bQxPos/80);
  let nSpaceY = Math.floor(mouseY/80);
  let cSpaceY =  Math.floor(bQyPos/80);
  if ((nSpaceX - cSpaceX) == (nSpaceY - cSpaceY)){
    blackTake(oldQxPos + (80*(nSpaceX-cSpaceX)), oldQyPos - (80*(cSpaceY-nSpaceY)))
    bQxPos = oldQxPos + ((nSpaceX - cSpaceX)*80);
    bQyPos = oldQyPos + ((nSpaceY - cSpaceY)*80);
    AImove(1);
    moveCount = moveCount+1;
  }
  bQpressed = 0;
  highlight = 0;
}
//black Knight 1
else if(bKn1pressed == 0 && mouseX>bKnxPos1 && mouseX<bKnxPos1+80 && mouseY>bKnyPos1 && mouseY<bKnyPos1+80){
  resetPress();
  oldKnxPos1 = bKnxPos1;
  oldKnyPos1 = bKnyPos1;
  bKn1pressed = 1;

  hlsx = bKnxPos1;
  hlsy = bKnyPos1;
  highlight = 1
}
//moving 
else if(bKn1pressed == 1 && mouseX>80 && mouseX<720 && mouseY>80 && mouseY<720){
  
  //moving 2 down, 1 left
  if(mouseX<bKnxPos1 && mouseX>bKnxPos1-80 && mouseY<bKnyPos1+240 && mouseY>bKnyPos1+160){
    blackTake(oldKnxPos1-80, oldKnyPos1+160)
    bKnxPos1 = oldKnxPos1-80;
    bKnyPos1 = oldKnyPos1+160;
    bKn1pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 1 down, 2 left
  else if(mouseX<bKnxPos1-80 && mouseX>bKnxPos1-160 && mouseY<bKnyPos1+160 && mouseY>bKnyPos1+80){
    blackTake(oldKnxPos1-160, oldKnyPos1+80)
    bKnxPos1 = oldKnxPos1-160;
    bKnyPos1 = oldKnyPos1+80;
    bKn1pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 2 down, 1 right
  else if(mouseX<bKnxPos1+160 && mouseX>bKnxPos1+80 && mouseY<bKnyPos1+240 && mouseY>bKnyPos1+160){
    blackTake(oldKnxPos1+80, oldKnyPos1+160)
    bKnxPos1 = oldKnxPos1+80;
    bKnyPos1 = oldKnyPos1+160;
    bKn1pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 1 down, 2 right
  else if(mouseX<bKnxPos1+240 && mouseX>bKnxPos1+160 && mouseY<bKnyPos1+160 && mouseY>bKnyPos1+80){
    blackTake(oldKnxPos1+160, oldKnyPos1+80)
    bKnxPos1 = oldKnxPos1+160;
    bKnyPos1 = oldKnyPos1+80;
    bKn1pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 2 up, 1 left
  else if(mouseX<bKnxPos1 && mouseX>bKnxPos1-80 && mouseY>bKnyPos1-160 && mouseY<bKnyPos1-80){
    blackTake(oldKnxPos1-80, oldKnyPos1-160)
    bKnxPos1 = oldKnxPos1-80;
    bKnyPos1 = oldKnyPos1-160;
      bKn1pressed = 0;
      highlight = 0;
      AImove(1);
      moveCount = moveCount+1;
  }
  //moving 1 up, 2 left
  else if(mouseX<bKnxPos1-80 && mouseX>bKnxPos1-160 && mouseY>bKnyPos1-80 && mouseY<bKnyPos1){
    blackTake(oldKnxPos1-160, oldKnyPos1-80)
    bKnxPos1 = oldKnxPos1-160;
    bKnyPos1 = oldKnyPos1-80;
    bKn1pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 2 up, 1 right
  else if(mouseX<bKnxPos1+160 && mouseX>bKnxPos1+80 && mouseY>bKnyPos1-160 && mouseY<bKnyPos1-80){
    blackTake(oldKnxPos1+80, oldKnyPos1-160)
    bKnxPos1 = oldKnxPos1+80;
    bKnyPos1 = oldKnyPos1-160;
    bKn1pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 1 up, 2 right
  else if(mouseX<bKnxPos1+240 && mouseX>bKnxPos1+160 && mouseY>bKnyPos1-80 && mouseY<bKnyPos1){
    blackTake(oldKnxPos1+160, oldKnyPos1-80)
    bKnxPos1 = oldKnxPos1+160;
    bKnyPos1 = oldKnyPos1-80;
    bKn1pressed = 0;
    highlight = 0;
    AImove(1);
    
  }
  else{
    bKn1pressed = 0;
    highlight = 0;
    
  }
}

  //black Knight 2
else if(bKn2pressed == 0 && mouseX>bKnxPos2 && mouseX<bKnxPos2+80 && mouseY>bKnyPos2 && mouseY<bKnyPos2+80){
  resetPress();
  oldKnxPos2 = bKnxPos2;
  oldKnyPos2 = bKnyPos2;
  bKn2pressed = 1;

  hlsx = bKnxPos2;
  hlsy = bKnyPos2;
  highlight = 1
}
//moving 
else if(bKn2pressed == 1 && mouseX>80 && mouseX<720 && mouseY>80 && mouseY<720){
  
  //moving 2 down, 1 left
  if(mouseX<bKnxPos2 && mouseX>bKnxPos2-80 && mouseY<bKnyPos2+240 && mouseY>bKnyPos2+160){
    blackTake(oldKnxPos2-80, oldKnyPos2+160)
    bKnxPos2 = oldKnxPos2-80;
    bKnyPos2 = oldKnyPos2+160;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 1 down, 2 left
  else if(mouseX<bKnxPos2-80 && mouseX>bKnxPos2-160 && mouseY<bKnyPos2+160 && mouseY>bKnyPos2+80){
    blackTake(oldKnxPos2-160, oldKnyPos2+80)
    bKnxPos2 = oldKnxPos2-160;
    bKnyPos2 = oldKnyPos2+80;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 2 down, 1 right
  else if(mouseX<bKnxPos2+160 && mouseX>bKnxPos2+80 && mouseY<bKnyPos2+240 && mouseY>bKnyPos2+160){
    blackTake(oldKnxPos2+80, oldKnyPos2+160)
    bKnxPos2 = oldKnxPos2+80;
    bKnyPos2 = oldKnyPos2+160;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 1 down, 2 right
  else if(mouseX<bKnxPos2+240 && mouseX>bKnxPos2+160 && mouseY<bKnyPos2+160 && mouseY>bKnyPos2+80){
    blackTake(oldKnxPos2+160, oldKnyPos2+80)
    bKnxPos2 = oldKnxPos2+160;
    bKnyPos2 = oldKnyPos2+80;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 2 up, 1 left
  else if(mouseX<bKnxPos2 && mouseX>bKnxPos2-80 && mouseY>bKnyPos2-160 && mouseY<bKnyPos2-80){
    blackTake(oldKnxPos2-80, oldKnyPos2-160)
    bKnxPos2 = oldKnxPos2-80;
    bKnyPos2 = oldKnyPos2-160;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);v
  }
  //moving 1 up, 2 left
  else if(mouseX<bKnxPos2-80 && mouseX>bKnxPos2-160 && mouseY>bKnyPos2-80 && mouseY<bKnyPos2){
    blackTake(oldKnxPos2-160, oldKnyPos2-80)
    bKnxPos2 = oldKnxPos2-160;
    bKnyPos2 = oldKnyPos2-80;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  //moving 2 up, 1 right
  else if(mouseX<bKnxPos2+160 && mouseX>bKnxPos2+80 && mouseY>bKnyPos2-160 && mouseY<bKnyPos2-80){
    blackTake(oldKnxPos2+80, oldKnyPos2-160)
    bKnxPos2 = oldKnxPos2+80;
    bKnyPos2 = oldKnyPos2-160;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  
  }
  //moving 1 up, 2 right
  else if(mouseX<bKnxPos2+240 && mouseX>bKnxPos2+160 && mouseY>bKnyPos2-80 && mouseY<bKnyPos2){
    blackTake(oldKnxPos2+160, oldKnyPos2-80)
    bKnxPos2 = oldKnxPos2+160;
    bKnyPos2 = oldKnyPos2-80;
    bKn2pressed = 0;
    highlight = 0;
    AImove(1);
    moveCount = moveCount+1;
  }
  else{
    bKn2pressed = 0;
    highlight = 0;
  }
}

}

function resetPress(){
  bp1pressed = 0;
  bp2pressed = 0;
  bp3pressed = 0;
  bp4pressed = 0;
  bp5pressed = 0;
  bp6pressed = 0;
  bp7pressed = 0;
  bp8pressed = 0;
  bKpressed = 0; 
  bR1pressed = 0;
  bR2pressed = 0;
  bB1pressed = 0;
  bB2pressed = 0;
  bQpressed = 0; 
  bKn1pressed = 0;
  bKn2pressed = 0;
  highlight = 0;
}

function blackTake(curPieceX, curPieceY){
  if(curPieceX == wxPos1 && curPieceY == wyPos1){
    wxPos1 = 1000;
    wyPos1 = 1000;
    //number of AI pieces reduces as each is taken
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wxPos2 && curPieceY == wyPos2){
    wxPos2 = 1000;
    wyPos2 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wxPos3 && curPieceY == wyPos3){
    wxPos3 = 1000;
    wyPos3 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wxPos4 && curPieceY == wyPos4){
    wxPos4 = 1000;
    wyPos4 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wxPos5 && curPieceY == wyPos5){
    wxPos5 = 1000;
    wyPos5 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wxPos6 && curPieceY == wyPos6){
    wxPos6 = 1000;
    wyPos6 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wxPos7 && curPieceY == wyPos7){
    wxPos7 = 1000;
    wyPos7 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wxPos8 && curPieceY == wyPos8){
    wxPos8 = 1000;
    wyPos8 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wRxPos1 && curPieceY == wRyPos1){
    wRxPos1 = 1000;
    wRyPos1 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wRxPos2 && curPieceY == wRyPos2){
    wRxPos2 = 1000;
    wRyPos2 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wBxPos1 && curPieceY == wByPos1){
    wBxPos1 = 1000;
    wByPos1 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wBxPos2 && curPieceY == wByPos2){
    wBxPos2 = 1000;
    wByPos2 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wKnxPos1 && curPieceY == wKnyPos1){
    wKnxPos1 = 1000;
    wKnyPos1 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wKnxPos2 && curPieceY == wKnyPos2){
    wKnxPos2 = 1000;
    wKnyPos2 = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wQxPos && curPieceY == wQyPos){
    wQxPos = 1000;
    wQyPos = 1000;
    AIPiece = AIPiece - 1;
  }
  if(curPieceX == wKxPos && curPieceY == wKyPos){
    wKxPos = 1000;
    wKyPos = 1000;
    AIPiece = AIPiece - 1;
    gameOverWin = true;
    endGame();
  }
}

let startMove = 0;

let sD = 0;
let iG = 0;
let fD = 0;
let rL = 0;

function combOpen(){
  //if bPawn5 moved two spaces down
  if(xPos5 == 400 && yPos5 == 320){
    //randomly select 1 of 4 responses
    let react = Math.floor(Math.random() * 4) + 1;
    console.log(react)
    if(react == 1){
      //french defence
      wyPos5 = wyPos5 - 80
      fD = 1;
    }
    else if (react == 2){
      //sicilian defence
      wyPos3 = wyPos3 - 160
      sD = 1;
    }
    else if (react == 3){
      //ruy-lopez
      wyPos5 = wyPos5 - 160
      rL = 1;
    }    
    else if (react == 4){
      //italian game
      wyPos5 = wyPos5 - 160
      iG = 1;
    }
  }
  else{
    startMove = 2;
    AImove(1)
    
  }
  
}

function combOpen2(){
  if(fD == 1){
    if(xPos4 == 320 && yPos4 == 320){
      //combat french defence
      wyPos4 = wyPos4 - 160;
    }
    else{
      startMove = 2;
      AImove(1)
      
    }
  }
  else if(sD == 1){
    startMove = 2;
    AImove(1)
    
  }
  else if(iG == 1){
    if(bKnxPos2 == 480 && bKnyPos2 == 240){
      //combat italian game
      wKnxPos1 = 240;
      wKnyPos1 = 480;
    }
    else{
      startMove = 2;
      AImove(1)
      
    }
  }
  else if(rL == 1){
    if(bKnxPos2 == 480 && bKnyPos2 == 240){
      //combat italian game
      wKnxPos1 = 240;
      wKnyPos1 = 480;
    }
    else{
      startMove = 2;
      AImove(1)
      
    }
  }
  else{
    startMove = 2;
    AImove(1)
    
  }
}



function AImove(moveMade){
  if(moveMade == 1){
    if(startMove == 0){
      combOpen();
      startMove = 1;
      moveMade = 0;
    }
    else if(startMove == 1){
      combOpen2()
      startMove = 2;
      moveMade = 0;
    }
    else{
      let pieceSelect = Math.floor(Math.random() * 16) + 1;
      console.log(pieceSelect)
      if(pieceSelect == 1){
        if(wyPos1 == 1000 || wxPos1 == 1000){
          AImove(1)
        }
        else{
          if(wyPos1 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos1, wyPos1-160) == true){
                wyPos1 = wyPos1 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos1, wyPos1-80) == true){
                wyPos1 = wyPos1 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos1, wyPos1-80) == true){
              wyPos1 = wyPos1 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }
      
      if(pieceSelect == 2){
        if(wyPos2 == 1000 || wxPos2 == 1000){
          AImove(1)
        }
        else{
          if(wyPos2 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos2, wyPos2-160) == true){
                wyPos2 = wyPos2 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos2, wyPos2-80) == true){
                wyPos2 = wyPos2 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos2, wyPos2-80) == true){
              wyPos2 = wyPos2 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }

      if(pieceSelect == 3){
        if(wyPos3 == 1000 || wxPos3 == 1000){
          AImove(1)
        }
        else{
          if(wyPos3 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos3, wyPos3-160) == true){
                wyPos3 = wyPos3 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos3, wyPos3-80) == true){
                wyPos3 = wyPos3 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos3, wyPos3-80) == true){
              wyPos3 = wyPos3 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }

      if(pieceSelect == 4){
        if(wyPos4 == 1000 || wxPos4 == 1000){
          AImove(1)
        }
        else{
          if(wyPos4 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos4, wyPos4-160) == true){
                wyPos4 = wyPos4 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos4, wyPos4-80) == true){
                wyPos4 = wyPos4 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos4, wyPos4-80) == true){
              wyPos4 = wyPos4 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }

      if(pieceSelect == 5){
        if(wyPos5 == 1000 || wxPos5 == 1000){
          AImove(1)
        }
        else{
          if(wyPos5 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos5, wyPos5-160) == true){
                wyPos5 = wyPos5 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos5, wyPos5-80) == true){
                wyPos5 = wyPos5 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos5, wyPos5-80) == true){
              wyPos5 = wyPos5 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }

      if(pieceSelect == 6){
        if(wyPos6 == 1000 || wxPos6 == 1000){
          AImove(1)
        }
        else{
          if(wyPos6 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos6, wyPos6-160) == true){
                wyPos6 = wyPos6 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos6, wyPos6-80) == true){
                wyPos6 = wyPos6 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos6, wyPos6-80) == true){
              wyPos6 = wyPos6 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }

      if(pieceSelect == 7){
        if(wyPos7 == 1000 || wxPos7 == 1000){
          AImove(1)
        }
        else{
          if(wyPos7 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos7, wyPos7-160) == true){
                wyPos7 = wyPos7 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos7, wyPos7-80) == true){
                wyPos7 = wyPos7 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos7, wyPos7-80) == true){
              wyPos7 = wyPos7 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }

      if(pieceSelect == 8){
        if(wyPos8 == 1000 || wxPos8 == 1000){
          AImove(1)
        }
        else{
          if(wyPos8 == 560){
            let pMove = Math.floor(Math.random() * 2)+ 1 ;
            if(pMove == 2){
              if(wpawnBlock(wxPos8, wyPos8-160) == true){
                wyPos8 = wyPos8 - 160
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
            else if (pMove == 1){
              if(wpawnBlock(wxPos8, wyPos8-80) == true){
                wyPos8 = wyPos8 - 80
                moveMade = 0;
              }
              else{
                AImove(1)
              }
            }
          }
          else{
            if(wpawnBlock(wxPos8, wyPos8-80) == true){
              wyPos8 = wyPos8 - 80
              moveMade = 0;
            }
            else{
              AImove(1)
            }
          }
        }
      }
      else if(pieceSelect == 9){
        if(wRxPos1 != 1000 && wRyPos1 != 1000){
          wR1Move()
          moveMade = 0;
          whiteTake(wRxPos1, wRyPos1)
        }
        else{
          AImove(1);
        }
      }
      else if(pieceSelect == 10){
        if(wRxPos2 != 1000 && wRyPos2 != 1000){
          wR2Move()
          moveMade = 0;
          whiteTake(wRxPos2, wRyPos2)
        }
        else{
          AImove(1);
        }
      }
      else if(pieceSelect == 11){
        if(wBxPos1 != 1000 && wByPos1 != 1000){
          wB1Move()
          moveMade = 0;
          whiteTake(wBxPos1, wByPos1)
        }
        else{
          AImove(1);
        }
      }
      else if(pieceSelect == 12){
        if(wBxPos2 != 1000 && wByPos2 != 1000){
          wB2Move()
          moveMade = 0;
          whiteTake(wBxPos2, wByPos2)
        }
        else{
          AImove(1);
        }
      }
      else if(pieceSelect == 13){
        if(wQxPos != 1000 && wQyPos != 1000){
          wQMove()
          moveMade = 0;
          whiteTake(wQxPos, wQyPos)
        }
        else{
          AImove(1);
        }
      }
      else if(pieceSelect == 14){
        if(wKxPos != 1000 && wKyPos != 1000){
          wKMove()
          moveMade = 0;
          whiteTake(wKxPos, wKyPos)
        }
        else{
          AImove(1);
        }
      }
      else if(pieceSelect == 15){
        if(wKnxPos1 != 1000 && wKnyPos1 != 1000){
          wKn1Move()
          moveMade = 0;
          whiteTake(wKnxPos1, wKnyPos1)
        }
        else{
          AImove(1);
        }
      }
      else if(pieceSelect == 16){
        if(wKnxPos2 != 1000 && wKnyPos2 != 1000){
          wKn2Move()
          moveMade = 0;
          whiteTake(wKnxPos2, wKnyPos2);
        }
        else{
          AImove(1);
        }
      }
    }
  }
}
function recalcSpaces(){
  spaces = Math.floor(Math.random() * 7)+ 1
}
function recalcpMove(){
  pMove = Math.floor(Math.random() * 4)+ 1
}

function wR1Move(){
        //select direction to move
        let pMove = Math.floor(Math.random() * 4)+ 1 ;
        console.log("pMove = " + pMove)
        if(pMove == 1){
          //moving downwards
          if(wRyPos1 == 640){
            //if piece is on bottom boarder, recalculate a direction
            wR1Move()
          }
          else{
            //generate a number of spaces to move
            let spaces = Math.floor(Math.random() * 7)+ 1
            console.log("spaces = " + spaces)
            if((wRyPos1 + spaces*80)>640){
              //if number of spaces moved exceeds the bottom boarder, 
              //recalculate number of spaces
              wR1Move()
            }
            else{
              //move piece generated number of spaces downwards
              wRyPos1 = wRyPos1 + spaces*80
            }
          }
        }
        if(pMove == 2){
          //moving left
          if(wRxPos1 == 80){
            //if piece is on left boarder, recalculate a direction
            wR1Move()
          }
          else{
            //generate a number of spaces to move
            let spaces = Math.floor(Math.random() * 7)+ 1
            console.log("spaces = " + spaces)
            if((wRxPos1 - spaces*80)<80){
              //if number of spaces moved exceeds the left boarder, 
              //recalculate number of spaces
              wR1Move()
            }
            else{
              //move piece generated number of spaces left
              wRxPos1 = wRxPos1 - spaces*80
            }
          }
        }
        if(pMove == 3){
          //moving upwards
          if(wRyPos1 == 80){
            //if piece is on top boarder, recalculate a direction
            wR1Move()
          }
          else{
            //generate number of spaces to move
            let spaces = Math.floor(Math.random() * 7)+ 1
            console.log("spaces = " + spaces)
            if((wRyPos1 - spaces*80)<80){
              //if number of spaces moved exceeds top boarder,
              //recalculate number of spaces
              wR1Move()
            }
            else{
              //move piece generated number of spaces upwards
              wRyPos1 = wRyPos1 - spaces*80
            }
          }
        }
        if(pMove == 4){
          //moving right
          if(wRxPos1 == 640){
            //if piece is on right boarder, recalculate a direction
            wR1Move()
          }
          else{
            //generate number of spaces to move
            let spaces = Math.floor(Math.random() * 7)+ 1
            console.log("spaces = " + spaces)
            if((wRxPos1 + spaces*80)>640){
              //if number of spaces moved exceeds right boarder,
              //recalculate number of spaces
              wR1Move()
            }
            else{
              //move piece generated number of spaces upwards
              wRxPos1 = wRxPos1 + spaces*80
            }
          }
        }
}

function wR2Move(){
  //select direction to move
  let pMove = Math.floor(Math.random() * 4)+ 1 ;
  console.log("pMove = " + pMove)
  if(pMove == 1){
    //moving downwards
    if(wRyPos2 == 640){
      //if piece is on bottom boarder, recalculate a direction
      wR2Move()
    }
    else{
      //generate a number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wRyPos2 + spaces*80)>640){
        //if number of spaces moved exceeds the bottom boarder, 
        //recalculate number of spaces
        wR2Move()
      }
      else{
        //move piece generated number of spaces downwards
        wRyPos2 = wRyPos2 + spaces*80
      }
    }
  }
  if(pMove == 2){
    //moving left
    if(wRxPos2 == 80){
      //if piece is on left boarder, recalculate a direction
      wR2Move()
    }
    else{
      //generate a number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wRxPos2 - spaces*80)<80){
        //if number of spaces moved exceeds the left boarder, 
        //recalculate number of spaces
        wR2Move()
      }
      else{
        //move piece generated number of spaces left
        wRxPos2 = wRxPos2 - spaces*80
      }
    }
  }
  if(pMove == 3){
    //moving upwards
    if(wRyPos2 == 80){
      //if piece is on top boarder, recalculate a direction
      wR2Move()
    }
    else{
      //generate number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wRyPos2 - spaces*80)<80){
        //if number of spaces moved exceeds top boarder,
        //recalculate number of spaces
        wR2Move()
      }
      else{
        //move piece generated number of spaces upwards
        wRyPos2 = wRyPos2 - spaces*80
      }
    }
  }
  if(pMove == 4){
    //moving right
    if(wRxPos2 == 640){
      //if piece is on right boarder, recalculate a direction
      wR2Move()
    }
    else{
      //generate number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wRxPos2 + spaces*80)>640){
        //if number of spaces moved exceeds right boarder,
        //recalculate number of spaces
        wR2Move()
      }
      else{
        //move piece generated number of spaces upwards
        wRxPos2 = wRxPos2 + spaces*80
      }
    }
  }
}

function wB1Move(){
  //select direction to move
  let pMove = Math.floor(Math.random() * 4)+ 1 ;
  console.log("pMove = " + pMove)
  if(pMove == 1){
    //moving downleft
    if(wByPos1 == 640 || wBxPos1 == 80){
      //if piece is on bottom boarder, or left boarder, recalculate a direction
      wB1Move()
    }
    else{
      //generate a number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wByPos1 + spaces*80)>640){
        //if number of spaces moved exceeds the bottom boarder, 
        //recalculate number of spaces
        wB1Move()
      }
      else if ((wBxPos1 - spaces * 80)<80){
        //if number of spaces moved exceeds the left boarder, 
        //recalculate number of spaces
        wB1Move()
      }
      else{
        //move piece generated number of spaces downleft
        wBxPos1 = wBxPos1 - spaces * 80
        wByPos1 = wByPos1 + spaces*80
      }
    }
  }
  if(pMove == 2){
    //moving topleft
    if(wBxPos1 == 80 || wByPos1 == 80){
      //if piece is on left boarder, or top boardder, recalculate a direction
      wB1Move()
    }
    else{
      //generate a number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wBxPos1 - spaces*80)<80){
        //if number of spaces moved exceeds the left boarder, 
        //recalculate number of spaces
        wB1Move()
      }
      else if((wByPos1 - spaces*80)<80){
        //if number of spaces moved exceeds the top boarder, 
        //recalculate number of spaces
        wB1Move()
      }
      else{
        //move piece generated number of spaces left
        wBxPos1 = wBxPos1 - spaces*80
        wByPos1 = wByPos1 - spaces*80
      }
    }
  }
  if(pMove == 3){
    //moving topright
    if(wByPos1 == 80 || wBxPos1 == 640){
      //if piece is on top boarder, or right boarder, recalculate a direction
      wB1Move()
    }
    else{
      //generate number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wByPos1 - spaces*80)<80){
        //if number of spaces moved exceeds top boarder,
        //recalculate number of spaces
        wB1Move()
      }
      else if((wBxPos1 + spaces*80)>640){
        //if number of spaces moved exceeds right boarder,
        //recalculate number of spaces
        wB1Move()
      }
      else{
        //move piece generated number of spaces upwards
        wBxPos1 = wBxPos1 + spaces*80
        wByPos1 = wByPos1 - spaces*80
      }
    }
  }
  if(pMove == 4){
    //moving bottomright
    if(wBxPos1 == 640 || wByPos1 == 640){
      //if piece is on right boarder, or bottom boarder, recalculate a direction
      wB1Move()
    }
    else{
      //generate number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wBxPos1 + spaces*80)>640){
        //if number of spaces moved exceeds right boarder,
        //recalculate number of spaces
        wB1Move()
      }
      else if((wByPos1 + spaces*80)>640){
        //if number of spaces moved exceeds bottom boarder,
        //recalculate number of spaces
        wB1Move()
      }
      else{
        //move piece generated number of spaces upwards
        wBxPos1 = wBxPos1 + spaces*80
        wByPos1 = wByPos1 + spaces*80
      }
    }
  }
}

function wB2Move(){
  //select direction to move
  let pMove = Math.floor(Math.random() * 4)+ 1 ;
  console.log("pMove = " + pMove)
  if(pMove == 1){
    //moving downleft
    if(wByPos2 == 640 || wBxPos2 == 80){
      //if piece is on bottom boarder, or left boarder, recalculate a direction
      wB2Move()
    }
    else{
      //generate a number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wByPos2 + spaces*80)>640){
        //if number of spaces moved exceeds the bottom boarder, 
        //recalculate number of spaces
        wB2Move()
      }
      else if ((wBxPos2 - spaces * 80)<80){
        //if number of spaces moved exceeds the left boarder, 
        //recalculate number of spaces
        wB2Move()
      }
      else{
        //move piece generated number of spaces downleft
        wBxPos2 = wBxPos2 - spaces * 80
        wByPos2 = wByPos2 + spaces*80
      }
    }
  }
  if(pMove == 2){
    //moving topleft
    if(wBxPos2 == 80 || wByPos2 == 80){
      //if piece is on left boarder, or top boarder, recalculate a direction
      wB2Move()
    }
    else{
      //generate a number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wBxPos2 - spaces*80)<80){
        //if number of spaces moved exceeds the left boarder, 
        //recalculate number of spaces
        wB2Move()
      }
      else if((wByPos2 - spaces*80)<80){
        //if number of spaces moved exceeds the top boarder, 
        //recalculate number of spaces
        wB2Move()
      }
      else{
        //move piece generated number of spaces left
        wBxPos2 = wBxPos2 - spaces*80
        wByPos2 = wByPos2 - spaces*80
      }
    }
  }
  if(pMove == 3){
    //moving topright
    if(wByPos2 == 80 || wBxPos2 == 640){
      //if piece is on top boarder, or right boarder, recalculate a direction
      wB2Move()
    }
    else{
      //generate number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wByPos2 - spaces*80)<80){
        //if number of spaces moved exceeds top boarder,
        //recalculate number of spaces
        wB2Move()
      }
      else if((wBxPos2 + spaces*80)>640){
        //if number of spaces moved exceeds right boarder,
        //recalculate number of spaces
        wB2Move()
      }
      else{
        //move piece generated number of spaces upwards
        wBxPos2 = wBxPos2 + spaces*80
        wByPos2 = wByPos2 - spaces*80
      }
    }
  }
  if(pMove == 4){
    //moving bottomright
    if(wBxPos2 == 640 || wByPos2 == 640){
      //if piece is on right boarder, or bottom boarder, recalculate a direction
      wB2Move()
    }
    else{
      //generate number of spaces to move
      let spaces = Math.floor(Math.random() * 7)+ 1
      console.log("spaces = " + spaces)
      if((wBxPos2 + spaces*80)>640){
        //if number of spaces moved exceeds right boarder,
        //recalculate number of spaces
        wB2Move()
      }
      else if((wByPos2 + spaces*80)>640){
        //if number of spaces moved exceeds bottom boarder,
        //recalculate number of spaces
        wB2Move()
      }
      else{
        //move piece generated number of spaces upwards
        wBxPos2 = wBxPos2 + spaces*80
        wByPos2 = wByPos2 + spaces*80
      }
    }
  }
}


function wQMove(){
    //select direction to move
    let pMove = Math.floor(Math.random() * 8)+ 1 ;
    console.log("pMove = " + pMove)
    if(pMove == 1){
      //moving downwards
      if(wQyPos == 640){
        //if piece is on bottom boarder, recalculate a direction
        wQMove()
      }
      else{
        //generate a number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQyPos + spaces*80)>640){
          //if number of spaces moved exceeds the bottom boarder, 
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces downwards
          wQyPos = wQyPos + spaces*80
        }
      }
    }
    if(pMove == 2){
      //moving left
      if(wQxPos == 80){
        //if piece is on left boarder, recalculate a direction
        wQMove()
      }
      else{
        //generate a number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQxPos - spaces*80)<80){
          //if number of spaces moved exceeds the left boarder, 
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces left
          wQxPos = wQxPos - spaces*80
        }
      }
    }
    if(pMove == 3){
      //moving upwards
      if(wQyPos == 80){
        //if piece is on top boarder, recalculate a direction
        wQMove()
      }
      else{
        //generate number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQyPos - spaces*80)<80){
          //if number of spaces moved exceeds top boarder,
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces upwards
          wQyPos = wQyPos - spaces*80
        }
      }
    }
    if(pMove == 4){
      //moving right
      if(wQxPos == 640){
        //if piece is on right boarder, recalculate a direction
        wQMove()
      }
      else{
        //generate number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQxPos + spaces*80)>640){
          //if number of spaces moved exceeds right boarder,
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces upwards
          wQxPos = wQxPos + spaces*80
        }
      }
    }

    if(pMove == 5){
      //moving downleft
      if(wQyPos == 640 || wQxPos == 80){
        //if piece is on bottom boarder, or left boarder, recalculate a direction
        wQMove()
      }
      else{
        //generate a number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQyPos + spaces*80)>640){
          //if number of spaces moved exceeds the bottom boarder, 
          //recalculate number of spaces
          wQMove()
        }
        else if ((wQxPos - spaces * 80)<80){
          //if number of spaces moved exceeds the left boarder, 
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces downleft
          wQxPos = wQxPos - spaces * 80
          wQyPos = wQyPos + spaces*80
        }
      }
    }
    if(pMove == 6){
      //moving topleft
      if(wQxPos == 80 || wQyPos == 80){
        //if piece is on left boarder, or top boardder, recalculate a direction
        wQMove()
      }
      else{
        //generate a number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQxPos - spaces*80)<80){
          //if number of spaces moved exceeds the left boarder, 
          //recalculate number of spaces
          wQMove()
        }
        else if((wQyPos - spaces*80)<80){
          //if number of spaces moved exceeds the top boarder, 
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces left
          wQxPos = wQxPos - spaces*80
          wQyPos = wQyPos - spaces*80
        }
      }
    }
    if(pMove == 7){
      //moving topright
      if(wQyPos == 80 || wQxPos == 640){
        //if piece is on top boarder, or right boarder, recalculate a direction
        wQMove()
      }
      else{
        //generate number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQyPos - spaces*80)<80){
          //if number of spaces moved exceeds top boarder,
          //recalculate number of spaces
          wQMove()
        }
        else if((wQxPos + spaces*80)>640){
          //if number of spaces moved exceeds right boarder,
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces upwards
          wQxPos = wQxPos + spaces*80
          wQyPos = wQyPos - spaces*80
        }
      }
    }
    if(pMove == 8){
      //moving bottomright
      if(wQxPos == 640 || wQyPos == 640){
        //if piece is on right boarder, or bottom boarder, recalculate a direction
        wQMove()
      }
      else{
        //generate number of spaces to move
        let spaces = Math.floor(Math.random() * 7)+ 1
        console.log("spaces = " + spaces)
        if((wQxPos + spaces*80)>640){
          //if number of spaces moved exceeds right boarder,
          //recalculate number of spaces
          wQMove()
        }
        else if((wQyPos + spaces*80)>640){
          //if number of spaces moved exceeds bottom boarder,
          //recalculate number of spaces
          wQMove()
        }
        else{
          //move piece generated number of spaces upwards
          wQxPos = wQxPos + spaces*80
          wQyPos = wQyPos + spaces*80
        }
      }
    }
}

function wKMove(){
  //select direction to move
  let pMove = Math.floor(Math.random() * 8)+ 1 ;
  console.log("pMove = " + pMove)
  if(pMove == 1){
    //moving downwards
    if(wKyPos == 640){
      //if piece is on bottom boarder, recalculate a direction
      wKMove()
    }
    else{
      wKyPos = wKyPos + 80;
    }
  }
  if(pMove == 2){
    //moving left
    if(wKxPos == 80){
      //if piece is on left boarder, recalculate a direction
      wKMove()
    }
    else{
      wKxPos = wKxPos - 80;
    }
  }
  if(pMove == 3){
    //moving upwards
    if(wKyPos == 80){
      //if piece is on top boarder, recalculate a direction
      wKMove()
    }
    else{
      wKyPos = wKyPos - 80;
    }
  }
  if(pMove == 4){
    //moving right
    if(wKxPos == 640){
      //if piece is on right boarder, recalculate a direction
      wKMove()
    }
    else{
      wKxPos = wKxPos + 80;
    }
  }

  if(pMove == 5){
    //moving downleft
    if(wKyPos == 640 || wKxPos == 80){
      //if piece is on bottom boarder, or left boarder, recalculate a direction
      wKMove()
    }
    else{
      wKyPos = wKyPos + 80;
      wKxPos = wKxPos - 80;
    }
  }
  if(pMove == 6){
    //moving topleft
    if(wKxPos == 80 || wKyPos == 80){
      //if piece is on left boarder, or top boardder, recalculate a direction
      wKMove()
    }
    else{
      wKyPos = wKyPos - 80;
      wKxPos = wKxPos - 80;
    }
  }
  if(pMove == 7){
    //moving topright
    if(wKyPos == 80 || wKxPos == 640){
      //if piece is on top boarder, or right boarder, recalculate a direction
      wKMove()
    }
    else{
      wKyPos = wKyPos - 80;
      wKxPos = wKxPos + 80;
    }
  }
  if(pMove == 8){
    //moving bottomright
    if(wKxPos == 640 || wKyPos == 640){
      //if piece is on right boarder, or bottom boarder, recalculate a direction
      wKMove()
    }
    else{
      wKyPos = wKyPos + 80;
      wKxPos = wKxPos + 80;
    }
  }
}

function wKn1Move(){
  //select direction to move
  let pMove = Math.floor(Math.random() * 8)+ 1 ;
  console.log("pMove = " + pMove)
  if(pMove == 1){
    //moving downleft (-1,2)
    if(wKnyPos1 >= 560 || wKnxPos1 == 80){
      //if piece is on left boarder, or two or less from bottom boarder, recalculate a direction
      wKn1Move()
    }
    else{
      wKnyPos1 = wKnyPos1 + 160;
      wKnxPos1 = wKnxPos1 - 80;
    }
  }
  if(pMove == 2){
    //moving topleft (-1,-2)
    if(wKnyPos1 <= 160 || wKnxPos1 == 80){
      //if piece is on left boarder, or two or less from top boarder, recalculate a direction
      wKn1Move()
    }
    else{
      wKnxPos1 = wKnxPos1 - 80;
      wKnyPos1 = wKnyPos1 - 160;
    }
  }
  if(pMove == 3){
    //moving topright (1,-2)
    if(wKnyPos1 <= 160 || wKnxPos1 == 640){
      //if piece is on top boarder, or two or less from top boarder, recalculate a direction
      wKn1Move()
    }
    else{
      wKnyPos1 = wKnyPos1 - 160;
      wKnxPos1 = wKnxPos1 + 80;
    }
  }
  if(pMove == 4){
    //moving bottomright (1,2)
    if(wKnyPos1 >= 560 || wKnxPos1 == 640){
      //if piece is on right boarder, or two or less from bottom boarder, recalculate a direction
      wKn1Move()
    }
    else{
      wKnyPos1 = wKnyPos1 + 160;
      wKnxPos1 = wKnxPos1 + 80;
    }
  }

  if(pMove == 5){
    //moving downleft (-2, 1)
    if(wKnyPos1 == 640 || wKnxPos1 <= 160){
      //if piece is on bottom boarder, or two or less from left boarder, recalculate a direction
      wKn1Move()
    }
    else{
      wKnyPos1 = wKnyPos1 + 80;
      wKnxPos1 = wKnxPos1 - 160;
    }
  }
  if(pMove == 6){
    //moving topleft (-2,-1)
    if(wKnxPos1 <= 160 || wKnyPos1 == 80){
      //if piece is two or less from left boarder, or on top boarder, recalculate a direction
      wKn1Move()
    }
    else{
      wKnyPos1 = wKnyPos1 - 80;
      wKnxPos1 = wKnxPos1 - 160;
    }
  }
  if(pMove == 7){
    //moving topright (2, -1)
    if(wKnyPos1 == 80 || wKnxPos1 >= 560){
      //if piece is on top boarder, or two or less from right boarder, recalculate a direction
      wKn1Move()
    }
    else{
      wKnyPos1 = wKnyPos1 - 80;
      wKnxPos1 = wKnxPos1 + 160;
    }
  }
  if(pMove == 8){
    //moving bottomright (2, 1)
    if(wKnyPos1 == 640 || wKnxPos1 >= 560){
      //if piece is two or less from right boarder, or on bottom boarder, recalculate a direction
      wKn1Move()
    }
    
    else{
      wKnyPos1 = wKnyPos1 + 80;
      wKnxPos1 = wKnxPos1 + 160;
    }
  }
}

function wKn2Move(){
  //select direction to move
  let pMove = Math.floor(Math.random() * 8)+ 1 ;
  console.log("pMove = " + pMove)
  if(pMove == 1){
    //moving downleft (-1,2)
    if(wKnyPos2 >= 560 || wKnxPos2 == 80){
      //if piece is on left boarder, or two or less from bottom boarder, recalculate a direction
      wKn2Move()
    }
    else{
      wKnyPos2 = wKnyPos2 + 160;
      wKnxPos2 = wKnxPos2 - 80;
    }
  }
  if(pMove == 2){
    //moving topleft (-1,-2)
    if(wKnyPos2 <= 160 || wKnxPos2 == 80){
      //if piece is on left boarder, or two or less from top boarder, recalculate a direction
      wKn2Move()
    }
    else{
      wKnxPos2 = wKnxPos2 - 80;
      wKnyPos2 = wKnyPos2 - 160;
    }
  }
  if(pMove == 3){
    //moving topright (1,-2)
    if(wKnyPos2 <= 160 || wKnxPos2 == 640){
      //if piece is on top boarder, or two or less from top boarder, recalculate a direction
      wKn2Move()
    }
    else{
      wKnyPos2 = wKnyPos2 - 160;
      wKnxPos2 = wKnxPos2 + 80;
    }
  }
  if(pMove == 4){
    //moving bottomright (1,2)
    if(wKnyPos2 >= 560 || wKnxPos2 == 640){
      //if piece is on right boarder, or two or less from bottom boarder, recalculate a direction
      wKn2Move()
    }
    else{
      wKnyPos2 = wKnyPos2 + 160;
      wKnxPos2 = wKnxPos2 + 80;
    }
  }

  if(pMove == 5){
    //moving downleft (-2, 1)
    if(wKnyPos2 == 640 || wKnxPos2 <= 160){
      //if piece is on bottom boarder, or two or less from left boarder, recalculate a direction
      wKn2Move()
    }
    else{
      wKnyPos2 = wKnyPos2 + 80;
      wKnxPos2 = wKnxPos2 - 160;
    }
  }
  if(pMove == 6){
    //moving topleft (-2,-1)
    if(wKnxPos2 <= 160 || wKnyPos2 == 80){
      //if piece is two or less from left boarder, or on top boarder, recalculate a direction
      wKn2Move()
    }
    else{
      wKnyPos2 = wKnyPos2 - 80;
      wKnxPos2 = wKnxPos2 - 160;
    }
  }
  if(pMove == 7){
    //moving topright (2, -1)
    if(wKnyPos2 == 80 || wKnxPos2 >= 560){
      //if piece is on top boarder, or two or less from right boarder, recalculate a direction
      wKn2Move()
    }
    else{
      wKnyPos2 = wKnyPos2 - 80;
      wKnxPos2 = wKnxPos2 + 160;
    }
  }
  if(pMove == 8){
    //moving bottomright (2, 1)
    if(wKnyPos2 == 640 || wKnxPos2 >= 560){
      //if piece is two or less from right boarder, or on bottom boarder, recalculate a direction
      wKn2Move()
    }
    
    else{
      wKnyPos2 = wKnyPos2 + 80;
      wKnxPos2 = wKnxPos2 + 160;
    }
  }
}

function wpawnBlock(pawnx, pawny){
  //stops white pawns from moving on top of other pieces
  if((pawnx == bQxPos && pawny == bQyPos) || (pawnx == xPos1 && pawny == yPos1) || 
  (pawnx == xPos2 && pawny == yPos2) || (pawnx == xPos3 && pawny == yPos3) || 
  (pawnx == xPos4 && pawny == yPos4) || (pawnx == xPos5 && pawny == yPos5) || 
  (pawnx == xPos6 && pawny == yPos6) || (pawnx == xPos7 && pawny == yPos7) || 
  (pawnx == xPos8 && pawny == yPos8) || (pawnx == bRxPos1 && pawny == bRyPos1) || 
  (pawnx == bRxPos2 && pawny == bRyPos2) || (pawnx == bBxPos1 && pawny == bByPos1) || 
  (pawnx == bBxPos2 && pawny == bByPos2) || (pawnx == bKnxPos1 && pawny == bKnyPos1) || 
  (pawnx == bKnxPos2 && pawny == bKnyPos2)){
    return false
  }
  else{
    return true
  }
}

function whiteTake(curPieceX, curPieceY){
  if(curPieceX == xPos1 && curPieceY == yPos1){
    xPos1 = 1000;
    yPos1 = 1000;
    //number of player pieces reduces when one is taken
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == xPos2 && curPieceY == yPos2){
    xPos2 = 1000;
    yPos2 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == xPos3 && curPieceY == yPos3){
    yPos3 = 1000;
    yPos3 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == xPos4 && curPieceY == yPos4){
    xPos4 = 1000;
    yPos4 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == xPos5 && curPieceY == yPos5){
    xPos5 = 1000;
    yPos5 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == xPos6 && curPieceY == yPos6){
    xPos6 = 1000;
    yPos6 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == xPos7 && curPieceY == yPos7){
    xPos7 = 1000;
    yPos7 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == xPos8 && curPieceY == yPos8){
    xPos8 = 1000;
    yPos8 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bRxPos1 && curPieceY == bRyPos1){
    bRxPos1 = 1000;
    bRyPos1 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bRxPos2 && curPieceY == bRyPos2){
    bRxPos2 = 1000;
    bRyPos2 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bBxPos1 && curPieceY == bByPos1){
    bBxPos1 = 1000;
    bByPos1 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bBxPos2 && curPieceY == bByPos2){
    bBxPos2 = 1000;
    bByPos2 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bKnxPos1 && curPieceY == bKnyPos1){
    bKnxPos1 = 1000;
    bKnyPos1 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bKnxPos2 && curPieceY == bKnyPos2){
    bKnxPos2 = 1000;
    bKnyPos2 = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bQxPos && curPieceY == bQyPos){
    bQxPos = 1000;
    bQyPos = 1000;
    playerPiece = playerPiece - 1;
  }
  if(curPieceX == bKxPos && curPieceY == bKyPos){
    bKxPos = 1000;
    bKyPos = 1000;
    playerPiece = playerPiece - 1;
    gameOverLoss = true;
    endGame()
  }
}








let canMovep1 = true;
let canMovep2 = true;
let canMovep3 = true;
let canMovep4 = true;
let canMovep5 = true;
let canMovep6 = true;
let canMovep7 = true;
let canMovep8 = true;
let canMove = false;
function checkOccupiedBR1(){
  let checkX;
  let checkY;
  let checkNewX, checkNewY;
  checkX = Math.floor((bRxPos1)/80);
  checkY = Math.floor((bRyPos1)/80);
  checkNewX = Math.floor((mouseX)/80);
  checkNewY = Math.floor((mouseY)/80);

  //checking against bPawn1
  if(checkX == Math.floor(xPos1/80)){
    if(checkNewX == Math.floor(xPos1/80)){
      if(checkY<Math.floor(yPos1/80) && checkNewY<Math.floor(yPos1/80)){
        //if the move is before the pawn then make the move
        canMovep1 = true;
      }
      else if(checkY>Math.floor(yPos1/80) && checkNewY>Math.floor(yPos1/80)){
        //if the move is after the pawn then make the move
        canMovep1 = true;
      }
      else{
        //if the move is over the pawn then dont make the move
        canMovep1 = false;
      }
    }
    else{
      canMovep1 = true;
    }
  }

  else if(checkY == Math.floor(yPos1/80)){
    if(checkNewY == Math.floor(yPos1/80)){
      if(checkX<Math.floor(xPos1/80) && checkNewX<Math.floor(xPos1/80)){
        //if the move is before the pawn then make the move
    canMovep1 = true;
      }
      else if(checkX>Math.floor(xPos1/80) && checkNewX>Math.floor(xPos1/80)){
        //if the move is after the pawn then make the move
        canMovep1 = true;
      }
      else{
        //if the move is over the pawn then dont make the move
        canMovep1 = false;
      }
    }
    else{
      canMovep1 = true;
    }
  }

  //checking against bPawn2
  else if(checkX == Math.floor(xPos2/80)){
    if(checkNewX == Math.floor(xPos2/80)){
      if(checkY<Math.floor(yPos2/80) && checkNewY<Math.floor(yPos2/80)){
        //if the move is before the pawn then make the move
        canMovep2 = true;
      }
      else if(checkY>Math.floor(yPos2/80) && checkNewY>Math.floor(yPos2/80)){
        //if the move is after the pawn then make the move
        canMovep2=true
      }
      else{
        //if the move is over the pawn then dont make the move
        canMovep2 = false;
      }
    }
    else{
      canMovep2 = true;
    }
  }
  else if(checkY == Math.floor(yPos2/80)){
    if(checkNewY == Math.floor(yPos2/80)){
      if(checkX<Math.floor(xPos2/80) && checkNewX<Math.floor(xPos2/80)){
        //if the move is before the pawn then make the move
        canMovep2 = true;
      }
      else if(checkX>Math.floor(xPos2/80) && checkNewX>Math.floor(xPos2/80)){
        //if the move is after the pawn then make the move
        canMovep2 = true;
      }
      else{
        //if the move is over the pawn then dont make the move
        canMovep2 = false;
      }
    }
    else{
      canMovep2 = true;
    }
  }

    //checking against bPawn3
    else if(checkX == Math.floor(xPos3/80)){
      if(checkNewX == Math.floor(xPos3/80)){
        if(checkY<=Math.floor(yPos3/80) && checkNewY<Math.floor(yPos3/80)){
          //if the move is before the pawn then make the move
          canMovep3 = true;
        }
        else if(checkY>Math.floor(yPos3/80) && checkNewY>Math.floor(yPos3/80)){
          //if the move is after the pawn then make the move
          canMovep3 = true;
        }
        else{
          //if the move is over the pawn then dont make the move
          canMovep3 = false;
        }
      }
      else{
        canMovep3 = true;
      }
    }
  
    else if(checkY == Math.floor(yPos3/80)){
      if(checkNewY == Math.floor(yPos3/80)){
        if(checkX<Math.floor(xPos3/80) && checkNewX<Math.floor(xPos3/80)){
          //if the move is before the pawn then make the move
          canMovep3 = true;
        }
        else if(checkX>Math.floor(xPos3/80) && checkNewX>Math.floor(xPos3/80)){
          //if the move is after the pawn then make the move
          canMovep3 = true;
        }
        else{
          //if the move is over the pawn then dont make the move
          canMovep3 = false;
          
        }
      }
      else{
        canMovep3 = true;
      }
    }

    //checking against bPawn4
    else if(checkX == Math.floor(xPos4/80)){
      if(checkNewX == Math.floor(xPos4/80)){
        if(checkY<=Math.floor(yPos4/80) && checkNewY<Math.floor(yPos4/80)){
          //if the move is before the pawn then make the move
          canMovep4 = true;
        }
        else if(checkY>Math.floor(yPos4/80) && checkNewY>Math.floor(yPos4/80)){
          //if the move is after the pawn then make the move
          canMovep4 = true;
        }
        else{
          //if the move is over the pawn then dont make the move
          canMovep4 = false;
        }
      }
      else{
        canMovep4 = true;
      }
    }
  
    else if(checkY == Math.floor(yPos4/80)){
      console.log("The game does check that the current space is in line with the 4th pawn")
      if(checkNewY == Math.floor(yPos4/80)){
        console.log("The game does check that the new space is line with the 4th pawn")
        if(checkX<Math.floor(xPos4/80) && checkNewX<Math.floor(xPos4/80)){
          //if the move is before the pawn then make the move
          canMovep4 = true;
        }
        else if(checkX>Math.floor(xPos4/80) && checkNewX>Math.floor(xPos4/80)){
          //if the move is after the pawn then make the move
          canMovep4 = true;
        }
        else{
          //if the move is over the pawn then dont make the move
          canMovep4 = false;
          
        }

      }
      else{
        canMovep4 = true;
      }
    }
    //checking against bPawn5
    else if(checkX == Math.floor(xPos5/80)){
      if(checkNewX == Math.floor(xPos5/80)){
        if(checkY<Math.floor(yPos5/80) && checkNewY<Math.floor(yPos5/80)){
          //if the move is before the pawn then make the move
          canMovep5 = true;
        }
        else if(checkY>Math.floor(yPos5/80) && checkNewY>Math.floor(yPos5/80)){
          //if the move is after the pawn then make the move
          canMovep5 = true;
        }
        else{
          //if the move is over the pawn then dont make the move
          canMovep5 = false;
        }
      }
      else{
        canMovep5 = true;
      }
    }
  
    else if(checkY == Math.floor(yPos5/80)){
      if(checkNewY == Math.floor(yPos5/80)){
        if(checkX<Math.floor(xPos5/80) && checkNewX<Math.floor(xPos5/80)){
          //if the move is before the pawn then make the move
          canMovep5 = true;
        }
        else if(checkX>Math.floor(xPos5/80) && checkNewX>Math.floor(xPos5/80)){
          //if the move is after the pawn then make the move
          canMovep5 = true;
        }
        else{
          //if the move is over the pawn then dont make the move
          canMovep5 = false;
          
        }
      }
      else{
        canMovep5 = true;
      }
    }

        //checking against bPawn6
        else if(checkX == Math.floor(xPos6/80)){
          if(checkNewX == Math.floor(xPos6/80)){
            if(checkY<=Math.floor(yPos6/80) && checkNewY<Math.floor(yPos6/80)){
              //if the move is before the pawn then make the move
              canMovep6 = true;
            }
            else if(checkY>Math.floor(yPos6/80) && checkNewY>Math.floor(yPos6/80)){
              //if the move is after the pawn then make the move
              canMovep6 = true;
            }
            else{
              //if the move is over the pawn then dont make the move
              canMovep6 = false;
            }
          }
          else{
            canMovep6 = true;
          }
        }
      
        else if(checkY == Math.floor(yPos6/80)){
          if(checkNewY == Math.floor(yPos6/80)){
            if(checkX<Math.floor(xPos6/80) && checkNewX<Math.floor(xPos6/80)){
              //if the move is before the pawn then make the move
              canMovep6 = true;
            }
            else if(checkX>Math.floor(xPos6/80) && checkNewX>Math.floor(xPos6/80)){
              //if the move is after the pawn then make the move
              canMovep6 = true;
            }
            else{
              //if the move is over the pawn then dont make the move
              canMovep6 = false;
              
            }
          }
          else{
            canMovep6 = true;
          }
        }

  else{
    canMove = true;
  }

  if(canMovep1 == true && canMovep2 == true && canMovep3 == true && canMovep4 == true && canMovep5 == true && canMovep6 == true && canMovep7 == true && canMovep8 == true ){
    canMove = true;
  }
  else{
    canMove = false;
  }
}