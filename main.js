
let playerScore = 0;
let computerScore = 0;
let maximumScore = 5;

let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');
let resultOfOneRound = document.getElementById('resultOfOneRound');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', startRound)
});

function startRound(e) {

    pScore.textContent = "Player points: " + playerScore;
    cScore.textContent = "Computer Points: " + computerScore;

    if(playerScore == 5 && computerScore < 5) {
        resultOfOneRound.textContent = "Player has won!";
    } else if (computerScore == 5 && playerScore < 5) {
        resultOfOneRound.textContent = "Computer has won!";
    } else if (computerScore == 5 & playerScore == 5) {
        resultOfOneRound.textContent = "it's a draw!";
    } else if (computerScore < 5 && playerScore < 5) {
        game(computerPlay(), e.target.value)
    } else {
        gameOver();
    }
}

function gameOver() {
    console.log('replay?')
    playerScore = 0;
    computerScore = 0;
}

function computerPlay() {
    let randomInteger = Math.floor( Math.random() * (4 - 1) + 1);

    if (randomInteger == 1) {
        return 'rock'
    }
    else if (randomInteger == 2) {
        return 'scissors'
    }
    else if (randomInteger == 3) {
        return 'paper'
    }
}

function game(computerSelection, playerSelection) {     
    if(playerSelection == "rock" && computerSelection == "rock") {
        resultOfOneRound.textContent = "Draw, try again!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Paper beats Rock"
    }

    if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose!, Rock beats Scissors!"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        resultOfOneRound.textContent = "Draw, try again!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win! Scissors beats Paper"
    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win!, Paper beats Rock!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Scissors beats Paper!"
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        resultOfOneRound.textContent = "Draw, try again!"
    }
}