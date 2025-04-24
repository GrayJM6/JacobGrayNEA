function setup(){
    createCanvas(800,800);
    background(175,238,238)
  }
  
  function draw(){ 
    let logInBox;
    let signUpBox;
    let titleBox;
    let message;
  
    //draws both boxes symmetrically
    fill(70,130,180)
    logInBox = rect(70,450,250,125)
    signUpBox = rect(480,450,250,125)
    titleBox = rect(50,75,700,100);
    message = rect(50,250,700,120)
    //adds text to both boxes
    fill(255)
    textSize(30)
    text('Log In', 150, 520)
    text('Sign Up', 547.5, 520)
    text('Welcome to JavaScript Chess!', 200, 290)
    textSize(25)
    text('Select log in if you are a current user, or sign up to join the \ncommunity!' , 60, 320)

    fill(255)
    textSize(50);
    text("JS.Chess",290,145)

    fill(255)
    line(200, 292, 610, 292)
  }
  
  function mousePressed() {
    //if pressed over log in box, it will take you to the log in page
    if (mouseX > 70 && mouseX < 320 && mouseY > 450 && mouseY < 575) {
      console.log("Log In Load Successful");
      LogIn()
    }
      //if pressed over sign up box, it will take you to the sign up page
    else if(mouseX > 480 && mouseX < 730 && mouseY > 450 && mouseY < 575){
      console.log("Sign Up Load Successful")
      SignUp()
    }

  }
  
  function LogIn(){
    //takes you to the log in page
    window.location.href = "logIn.html";
  }
  
  function SignUp(){
    //takes you to the sign up page
    window.location.href = "signUp.html";
  }
  
  