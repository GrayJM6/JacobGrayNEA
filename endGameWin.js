function setup(){
    createCanvas(800,800);
    background(175,238,238)
}

function draw(){

    fill(70,130,180)
    rect(100,250,600,100);
    fill(255)
    textSize(50)
    text('WINNER', 300, 320)

    fill(70,130,180)
    rect(150,450,500,200);
    fill(255)
    textSize(40)
    text('You beat the chess AI!', 200, 520)
    text('Your score: ', 200, 600)

    
    fill(70,130,180)
    rect(0,750,100,50);
    fill(255)
    textSize(20)
    text('Go Back', 10, 780)
}


function mousePressed() {
    if(mouseX > 0 && mouseX < 50 && mouseY > 750 && mouseY < 800){
        window.location.href = "title.html"
      }
      else if(mouseX>0 && mouseX<100 && mouseY>750 && mouseY<800){
        window.location.href = "title.html"
      }
}