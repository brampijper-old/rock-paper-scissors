let playerScore = 0;
let computerScore = 0;
let maximumScore = 5;
let pickChoiceAllowed = true;

let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');

pScore.textContent =+ playerScore;
cScore.textContent =+ computerScore;

let resultOfOneRound = document.getElementById('resultOfOneRound');
let container = document.querySelector('#text-container');

resultOfOneRound.textContent = "Start Playing!";

const winColor = "#06D6A0"
const loseColor = "#EF476F";
const baseColor = "#FFD166";


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if(button.className == 'btn') button.addEventListener('click', startRound)
    // if(button.id == 'reset-game-btn') button.addEventListener('click', resetGame)
});

// function resetGame() {
//     pickChoiceAllowed = true;
//     playerScore = 0;
//     computerScore = 0;
//     resultOfOneRound.textContent = "New Game!";
//     document.body.style.backgroundColor = "#ebc714";
//     document.body.style.backgroundColor = "#D3D3D3";
//     pScore.textContent =+ playerScore;
//     cScore.textContent =+ computerScore;
// }

function newRound() {
    pickChoiceAllowed = false; 

    setTimeout(function(){
        pickChoiceAllowed = true;
        playerScore = 0;
        computerScore = 0;
        resultOfOneRound.textContent = "Next round";
        document.body.style.backgroundColor = baseColor;
        document.body.style.backgroundColor = baseColor;
        pScore.textContent =+ playerScore;
        cScore.textContent =+ computerScore;
    }, 4000 )
}

function startRound(e) {

    pScore.textContent =+ playerScore;
    cScore.textContent =+ computerScore;

    if(pickChoiceAllowed) {
    
        if(playerScore == 5 && computerScore < 5) {
            resultOfOneRound.textContent = "You have won!";
            document.body.style.backgroundColor = winColor;
            newRound()
        } else if (computerScore == 5 && playerScore < 5) {
            resultOfOneRound.textContent = "AI has won!";
            document.body.style.backgroundColor = loseColor;
            newRound()
        } else if (computerScore == 5 & playerScore == 5) {
            resultOfOneRound.textContent = "it's a draw!";
            document.body.style.backgroundColor = baseColor;
            newRound()
        } else if (computerScore < 5 && playerScore < 5) {
            game(computerPlay(), e.target.value)
        }
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
        document.body.style.backgroundColor = baseColor;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win! Rock beats Scissors"
        document.body.style.backgroundColor = winColor;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Paper beats Rock";
        document.body.style.backgroundColor = loseColor;
    }

    if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Rock beats Scissors!";
        document.body.style.backgroundColor = loseColor;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        resultOfOneRound.textContent = "Draw, try again!";
        document.body.style.backgroundColor = baseColor;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win! Scissors beats Paper";
        document.body.style.backgroundColor = winColor;
    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        resultOfOneRound.textContent = "You Win! Paper beats Rock!"
        document.body.style.backgroundColor = winColor;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        resultOfOneRound.textContent = "You Lose! Scissors beats Paper!";
        document.body.style.backgroundColor = loseColor;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        resultOfOneRound.textContent = "Draw, try again!";
        document.body.style.backgroundColor = baseColor;
    }
}