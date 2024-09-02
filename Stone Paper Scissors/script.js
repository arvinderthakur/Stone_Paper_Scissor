let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#userScore")
const compScorePara = document.querySelector("#compScore")

const genCompChoice =()=>{
    const option =["Stone" , "Paper", "Scissor"];
    const rndIdx=Math.floor(Math.random()*3)
    return option[rndIdx];
}

const drawGame=()=>{
    console.log("Draw Game")
    msg.innerText ="Draw Game  !!!"
    msg.style.backgroundColor="White"
    msg.style.color="Black"

}

const showWinner =(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;
        msg.innerText =`You Win ! ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor="Green"
    } else {
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText =`You lose ! ${compChoice} Beats ${userChoice}`
        msg.style.backgroundColor="Red"
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    // Generate computer Choice
    const compChoice=genCompChoice();
    console.log("Computer choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice==="Stone"){
            userWin = compChoice === "Paper" ? false : true;

        }else if (userChoice === "Paper"){
            userWin = compChoice ==="Scissor"? false : true;

        }else{
            userWin = compChoice ==="Rock"? false : true;
        }

        showWinner(userWin , userChoice , compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });

