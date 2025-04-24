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
    rect(70,300,150,50)
    rect(235,200,425,25)
    rect(235,250,425,25)
    rect(235,300,425,50)

    fill(255)
    rect(600,252.5,55,20)
    rect(600,302.5,55,20)
    fill(0)
    text('Show', 602,270)
    text('Show', 602,320)

    fill(255)
    textSize(24)
    text('Username:', 75, 222)
    text('Password:', 75, 272)
    text('Confirm', 75, 322)
    text('Password:',75,345)
    text(username, 250, 222);
    if (showPress1 ==1){
      text(password, 250, 272);
    }
    if (showPress2 ==1){
    text(confirmPassword, 250, 322);
    }

    fill(70,130,180)
    rect(200,600,400,60);
    fill(255)
    text('PROCEED', 340, 635)


  }

  
  let username
  let password
  let confirmPassword
  let passMatch = 0;
  let passEnt = 0;
  let confPassEnt = 0;
  let userEnt = 0;
  let showPress1 = 0
  let showPress2 = 0
  function mousePressed() {
    if(mouseX>0 && mouseX<100 && mouseY>0 && mouseY<50){
      goBack()
    }
    else if(mouseX>235 && mouseX<660 && mouseY>200 && mouseY<225){
      username = prompt("enter username - case sensitive")
      if(username == "" || password == " "){
        //do nothing
      }
      else{
        userEnt = 1
      }
     }
     else if(mouseX>235 && mouseX<600 && mouseY>250 && mouseY<275){
      password = prompt("enter password - case sensitive")
      if(password == "" || password == " "){
        //do nothing
      }
      else{
        passEnt = 1
      }
     }
     else if(mouseX>235 && mouseX<600 && mouseY>300 && mouseY<350){
      confirmPassword = prompt("enter password again - case sensitive")
      if(confirmPassword == "" || confirmPassword == " "){
        //do nothing
      }
      else{
        confPassEnt = 1
      }
      if(password == confirmPassword){
        console.log("Passwords match");
        passMatch = 1;
      }
      else{
        console.log("Passwords do not match");
        passMatch = 0;
      }
     }
    else if(passMatch == 1 && userEnt == 1 && passEnt == 1 && confPassEnt == 1 && mouseX>200 && mouseX<600 && mouseY>600 & mouseY<660){
        window.location.href = "title.html";

  }
  else if(showPress1 == 0 && mouseX>600 && mouseX< 655 && mouseY>252.5 && mouseY<272.5){
    showPress1 = 1;
   }
   else if(showPress1 == 1 && mouseX>600 && mouseX< 655 && mouseY>252.5 && mouseY<272.5){
    showPress1 = 0;
   }
   else if(showPress2 == 0 && mouseX>600 && mouseX< 655 && mouseY>302.5 && mouseY<322.5){
    showPress2 = 1;
   }
   else if(showPress2 == 1 && mouseX>600 && mouseX< 655 && mouseY>302.5 && mouseY<322.5){
    showPress2 = 0;
   }
}
  function goBack(){
    window.location.href = "index.html";
  }
  

