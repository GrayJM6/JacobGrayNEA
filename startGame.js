let bPawn, bPawnImg, wPawn, wPawnImg;
let bRook, bRookImg, wRook, wRookImg;
let bBishop, bBishopImg, wBishop, wBishopImg;
let bKinght, bKnightImg, wKnight, wKnightImg;
let bKing, bKingImg, wKing, wKingImg;
let bQueen, bQueenImg, wQueen, wQueenImg;
//subject to change below
let pieceSize = 14;


let board = [];



function setup() {
  createCanvas(800,800);
  background(175,238,238)



  bPawnImg = 'www.blackpawn.jpg';
  wPawnImg = 'www.whitepawn.jpg';
  bRookImg = 'www.whiterook.jpg';
  wRookImg = 'www.blackrook.jpg';
  bBishopImg= 'www.blackbishop.jpg';
  wBishopImg = 'www.whitebishop.jpg';
  bKnightImg = 'www.blackknight.jpg';
  wKnightImg = 'www.whiteknight.jpg';
  bKingImg = 'www.blackking.jpg';
  wKingImg = 'www.whiteking.jpg';
  bQueenImg = 'www.blackqueen.jpg';
  wQueenImg = 'www.whitequeen.jpg';


    //later will instantiate piece classes as each piece variable
}

function draw() {

    rect(0,750,50,50)




}

function mousePressed() {
  if(mouseX > 0 && mouseX < 50 && mouseY > 750 && mouseY < 800){
      window.location.href = "title.html"
    }
  }