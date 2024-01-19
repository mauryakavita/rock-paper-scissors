let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () =>{

  msg.innerText = "Game was draw. Play again.";
  msg.style.backgroundColor = "purple";
};

const showWinner = (userwin, userChoice, compChoice) =>{
  if (userwin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
    console.log("userChoice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){

      drawGame();
    } else{
      let userwin = true;
      if(userChoice === "rock"){
        //scissors , paper
        userwin = compChoice === "paper" ? false: true;
      }
      else if (userChoice === "paper"){
        //rock , scissors
        userwin = compChoice === "scissors" ? false : true;
      } else{
        //rock, paper
        userwin = compChoice === "rock" ? false : true;
      }
        showWinner(userwin);
    }
  };


choices.forEach((choice) =>{
    
  choice.addEventListener("click", () => {
  const userChoice = choice.getAttribute("id")
    playGame(userChoice);
  });
});

 
