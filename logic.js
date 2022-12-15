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

function getScore(playerScore, computerScore) {
    let score=`Player Score: ${playerScore} Computer Score: ${computerScore}`;
    return score;
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    let roundWinner;
    if (playerSelection == "rock" && computerSelection == "paper") {
        roundWinner="You Lose! Paper beats Rock";
        computerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundWinner="You Lose! Scissors beats Paper";
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundWinner="You Lose! Rock beats Scissors";
        computerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundWinner="You Win! Rock beats Scissors";
        playerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundWinner="You Win! Scissors beats Paper";
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        roundWinner="You Win! Paper beats Rock";
        playerScore++;
    }
    else {
        roundWinner="It's a tie!";
    }
    return roundWinner;
}

//Establish Variables
let playerScore=0;
let computerScore=0;
let playerSelection='';

const score= document.querySelector('#score');
const currentScore=document.createElement('div');
score.classList.add('currentScore');
currentScore.textContent= getScore(playerScore, computerScore);
score.appendChild(currentScore); 

const results = document.querySelector('#results');
const result=document.createElement('div');
results.classList.add('result');

//Rock Paper Scissors button event listeners
rock.addEventListener('click', () => { 
    playerSelection='rock';
    result.textContent= playRound(playerSelection, getComputerChoice());
    results.appendChild(result);
});
paper.addEventListener('click', () => {
    playerSelection= 'paper';
    result.textContent= playRound(playerSelection, getComputerChoice());
    results.appendChild(result);
});
scissors.addEventListener('click', () => {
    playerSelection='scissors';
    result.textContent= playRound(playerSelection, getComputerChoice());
    results.appendChild(result);
});
