function setup(){
    createCanvas(800,800);
    background(175,238,238)
  }
  
  function draw(){ 
    let logInBox;
    let signUpBox;
  
    //draws both boxes symmetrically
    fill(70,130,180)
    logInBox = rect(70,400,250,125)
    signUpBox = rect(480,400,250,125)
  
    //adds text to both boxes
    fill(255)
    textSize(30)
    text('Log In', 150, 470)
    text('Sign Up', 547.5, 470)
  

  
  }
  
  function mousePressed() {
    //if pressed over log in box, it will take you to the log in page
    if (mouseX > 70 && mouseX < 320 && mouseY > 400 && mouseY < 525) {
      console.log("Log In Load Successful");
      LogIn()
    }
      //if pressed over sign up box, it will take you to the sign up page
    else if(mouseX > 480 && mouseX < 730 && mouseY > 400 && mouseY < 525){
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
  
  