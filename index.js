let playerSelection;
let computerSelection;
let choice;
let computerScore=0;
let playerScore=0;
 for (let i = 0; i < 5; i++) {  
   choice=Math.floor(Math.random() * 3);
   computerSelection=computerPlay(choice);
   playerSelection=ask();
   console.log(`Computer Selection: ${computerSelection}`);
   console.log(`Player Selection:${playerSelection}`);
   console.log(playRound());
  
}
function ask() {
  playerSelection = window
    .prompt("Enter rock, paper, or scissors")
    .toLowerCase();
    
  let s=playerSelection;  
  if(s!='rock' && s!='paper'&& s!='scissors'){
    console.log("invalid input");
    ask(); 
  
  }
 
  return playerSelection;
}

function computerPlay(choice) {
  if (choice == 0) {
    computerSelection = "rock";
  } else if (choice == 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function playRound() {
  if (computerSelection == playerSelection) {
    return"It is a tie";
  }
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      return `You lose! Paper beats rock.`;
    } else {
      playerScore++;
      return `You win! Rock beats scissors.`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore++;
      return `You lose! Rock beats scissors.`;
    } else {
      playerScore++;
      return `You win! Scissors beat Paper.`;
    }
  } else {
    if (computerSelection == "rock") {
      playerScore++;
      return `You win! Paper beats rock.`;
    } else {
      computerScore++;
      return `You lose! Scissors beat paper.`;
    }
    
  }
 
}
console.log( `Your score is ${playerScore} and  
 Computer score is ${computerScore}`);


































