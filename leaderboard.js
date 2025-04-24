function setup(){
    createCanvas(800,800);
    background(175,238,238)
  }
  
  function draw(){
  
    rect(0,750,50,50)
  
  
    fill(70,130,180)
    rect(30,50,700,600)
  
    fill(255)
    textSize(40)
    text("LEADERBOARD", 230,90)
  
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