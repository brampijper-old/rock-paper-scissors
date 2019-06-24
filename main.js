
let playerScore = 0;
let computerScore = 0;
let maximumScore = 5;

let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');

pScore.textContent = "Player points: " + playerScore;
cScore.textContent = "Computer Points: " + computerScore;

let resultOfOneRound = document.getElementById('resultOfOneRound');

resultOfOneRound.textContent = "Start Playing!";


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', startRound)
});

function startRound(e) {

    pScore.textContent = "Player points: " + playerScore;
    cScore.textContent = "Computer Points: " + computerScore;

    if(playerScore == 5 && computerScore < 5) {
        resultOfOneRound.textContent = "You have won!";
        document.body.style.backgroundColor = "#66ff00";
        container.style.backgroundColor = "#D3D3D3";
    } else if (computerScore == 5 && playerScore < 5) {
        resultOfOneRound.textContent = "AI has won!";
        container.style.backgroundColor = "#D3D3D3";
        document.body.style.backgroundColor = "#EB3637";
    } else if (computerScore == 5 & playerScore == 5) {
        resultOfOneRound.textContent = "it's a draw!";
        container.style.backgroundColor = "#D3D3D3";
        document.body.style.backgroundColor = "#ebc714";
    } else if (computerScore < 5 && playerScore < 5) {
        game(computerPlay(), e.target.value)
    }
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
        resultOfOneRound.textContent = "Draw, try again!";
        container.style.backgroundColor = "#D3D3D3";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win! Rock beats Scissors"
        container.style.backgroundColor = "green";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Paper beats Rock";
        container.style.backgroundColor = "red";
    }

    if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Rock beats Scissors!";
        container.style.backgroundColor = "red";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        resultOfOneRound.textContent = "Draw, try again!";
        container.style.backgroundColor = "#D3D3D3";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win! Scissors beats Paper";
        container.style.backgroundColor = "green";

    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win!, Paper beats Rock!"
        container.style.backgroundColor = "green";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Scissors beats Paper!";
        container.style.backgroundColor = "red";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        resultOfOneRound.textContent = "Draw, try again!";
        container.style.backgroundColor = "#D3D3D3";
    }
}