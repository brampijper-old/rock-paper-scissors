
let playerScore = 0;
let computerScore = 0;
let round = 0;

startNewRound()

function startNewRound() {
    console.log(game(computerPlay()))
    round ++
    return (round < 5 ? startNewRound() : countScore())
}

function computerPlay() {
    let randomInteger = Math.floor( Math.random() * (4 - 1) + 1);
    // console.log(randomInteger)
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

function game(computerSelection) {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    if(playerSelection == "rock" && computerSelection == "rock") {
        return "Draw, try again!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        return "You Win! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        return "You Lose! Paper beats Rock"
    }

    if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        return "You Lose!, Rock beats Scissors!"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw, try again!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        return "You Win! Scissors beats Paper"
    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        return "You Win!, Paper beats Rock!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Draw, try again!"
    }
}

function countScore() {
    if(playerScore > computerScore) { console.log('player wins with: ', playerScore)}
    else if (playerScore < computerScore) { console.log('computer wins with: ', computerScore)}
    else { console.log("It's a draw!")}
}

