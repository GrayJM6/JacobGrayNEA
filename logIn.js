function setup(){
    createCanvas(800,800);
    background(175,238,238)
  }
  
  function draw(){
    let goBack;
  
    fill(70,130,180)
    goBack = rect(0,0,100,50)
    fill(255)
    textSize(20)
    text('Go Back', 10, 25)
  
  
  
    fill(70,130,180)
    rect(70,200,150,25)
    rect(70,250,150,25)
    rect(235,200,425,25)
    rect(235,250,425,25)
  
    fill(255)
    textSize(24)
    text('Username:', 75, 222);
    text('Password:', 75, 272);
    text(username, 250, 222);
    text(password, 250, 272);

  
    fill(70,130,180)
    rect(200,600,400,60);
    fill(255)
    text('PROCEED', 340, 635)
  }

let username;
let password;


 
  
    function mousePressed() {
      if(mouseX>0 && mouseX<100 && mouseY>0 && mouseY<50){
        goBack()
      }
      else if(mouseX>200 && mouseX<600 && mouseY>600 & mouseY<660){
          window.location.href = "title.html";
       }
       else if(mouseX>235 && mouseX<660 && mouseY>200 && mouseY<225){
        username = prompt("enter username - case sensitive")
       }
       else if(mouseX>235 && mouseX<660 && mouseY>250 && mouseY<275){
        password = prompt("enter password - case sensitive")
       }
      }
    function goBack(){
      window.location.href = "index.html";
  }
  
  
    // let myInputEvent;
    // let myInputEvent2;
  
  
    // uNBox = createInput('');
    // uNBox.position(250,210);
    // uNBox.size(400);
    // uNBox.input(myInputEvent);
  
    // uNBox.input(myInputEvent => {
    //   if (myInputEvent.value === 'admin') {
    //     console.log("Correct!");
    //   }
    // });
  
  
  
  
    // pWordBox = createInput('');
    // pWordBox.position(250,260);
    // pWordBox.size(400);
    // pWordBox.input(myInputEvent2);
  
  
  
  
    // let myInputEvent;
    // let inputBox = createInput('');
    // inputBox.position(250, 210);
    // inputBox.size(400);
    // inputBox.input(myInputEvent => {
    //   if (myInputEvent.value === 'admin') {
    //     console.log("Correct!");
    //   }
    // });
  
  