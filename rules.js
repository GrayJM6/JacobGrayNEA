function setup(){
    createCanvas(800,800);
    background(175,238,238)
  }
  
  function draw(){
  
    rect(0,750,50,50)
  
  
    fill(70,130,180)
    rect(30,50,350,700)
    rect(420,50,350,700)
  
    fill(255)
    textSize(22)
    text("Rules: \n1) Pieces can only move in \ntheir allowed ranges. These \nare pawn: 2 spaces forward,\nking: 1 space any direction,\nkight: L shape of 4 spaces,\nbishop: unlimited spaces until \nobstruction diagonal, rook: \nunlimited spaces until \nobstruction vertically/horizontally,\nqueen: unlimited spaces until \nobstruction any direction.\n\n2) To select a piece, click on it, \nto make a move press the space \nyou wish to move to. If a space\nis occupied, the piece will be\ntaken.\n\n3) When a pawn reaches the \nend it becomes a new piece\n\n4) King is in check when it can \nbe taken, checkmate\nwhen it will be taken definitely", 35, 80)
    text("Features: \n1) When a piece is selected its\nhighlighted, and its potential\nmoves are shown.\n\n2) Pieces that can be taken are \nindicated, when either player is in \ncheck or checkmate, a message is\nshown.\n\n3) Previous moves are shown and \nmoves can be undone.\n\n4) The timer does not limit your \nmove time, just calculates your \nscore.\n\n5) The leaderboard displays \nprevious user scores in ranked\norder.\n\n6) Taken pieces are listed on\nscreen.",425,80)
  }
  function mousePressed() {
    if(mouseX > 0 && mouseX < 50 && mouseY > 750 && mouseY < 800){
        window.location.href = "title.html"
      }
    }