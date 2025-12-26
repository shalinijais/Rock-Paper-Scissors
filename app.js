userScore = 0;
compScore = 0;
const msg = document.querySelector("#msg"); 
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin,userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
     compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};
const genCompChoice = () => {
    const compChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return compChoices[randomNum];
}

const playGame = (userChoice) => {
   const compChoice = genCompChoice();
   if(userChoice === compChoice){
     drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === "rock"){
       // scissors, paper 
       userWin =  compChoice === "scissors" ?true : false;
    }else if(userChoice === "paper"){
        //rock, scissors
        userWin = compChoice ==="rock" ? true :false;
    }else{
        //paper, rock
        userWin = compChoice === "paper" ?true :false;
    }
    showWinner(userWin,userChoice,compChoice );
   }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})

