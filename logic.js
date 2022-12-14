function getComputerChoice() {
    let computerSelection;
    let computerSelector= Math.floor(Math.random()*3);
    switch(computerSelector) {
        case 0:
            computerSelection= "rock";
            break;
        case 1:
            computerSelection= "paper";
            break;
        case 2:
            computerSelection= "scissors";
            break;
    }
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    let roundWinner;
    if (playerSelection == "rock" && getComputerChoice() == "paper") {
        roundWinner="You Lose! Paper beats Rock";
    }
    else if (playerSelection == "paper" && getComputerChoice() == "scissors") {
        roundWinner="You Lose! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && getComputerChoice() == "rock") {
        roundWinner="You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && getComputerChoice() == "scissors") {
        roundWinner="You Win! Rock beats Scissors";
    }
    else if (playerSelection == "scissors" && getComputerChoice() == "paper") {
        roundWinner="You Win! Scissors beats Paper";
    }
    else if (playerSelection == "paper" && getComputerChoice() == "rock") {
        roundWinner="You Win! Paper beats Rock";
    }
    else {
        roundWinner="It's a tie!";
    }
    return roundWinner;
}
const computerSelection = getComputerChoice();
const rock= document.querySelector('.rock');
const paper= document.querySelector('.paper');
const scissors= document.querySelector('.scissors');
rock.addEventListener('click', () => {
    playRound('rock', computerSelection)
});
paper.addEventListener('click', () => {
    playRound('paper', computerSelection)
});
scissors.addEventListener('click', () => {
    playRound('scissors', computerSelection)
});
/* function game() {
    for(let i=0 ; i<5 ; i++) {
        const playerSelection= prompt("Rock, Paper, or Scissors?")
        console.log(playRound(playerSelection, computerSelection));
    }
} */
// console.log(game()); 