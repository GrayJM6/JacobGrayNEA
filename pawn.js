class Pawn{
    contructor(xPos, yPos1, oldXPos, oldYPos1){
        this.xPos = xPos
        this.yPos1 = yPos1
        this.g = xPos - oldXPos
        this.n = yPos1 - oldYPos1
        this.maxMove = 2;
        this.minMove = 1;
    }

    checkMove(n, minMove, maxMove){
        if(n>= minMove && n<=maxMove){
            //can move
        }
    }
    move(yPos1){
        yPos1 = yPos1 + 80;
    }
    take(){
        this.move();
        //remove the current piece
    }
}