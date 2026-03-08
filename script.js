function getComputerChoice() {
    let random = Math.random();

    if (random <= 0.33) {
        return 'rock';
    } else if (random <= 0.66) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        console.log("Tie!");
    }

    else if (
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissor') ||
        (playerChoice === 'scissor' && computerChoice === 'rock')
    ) {
        computerScore++;
        console.log("You Lose!");
    }

    else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log("You Win!");
    }

    else {
        console.log("Invalid input");
        return;
    }

    console.log(`Player chose: ${playerChoice}`);

    console.log(`Computer chose: ${computerChoice}`);

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function playGame() {

    for (let i = 1; i <= 5; i++) {

        console.log(`===== Round ${i} =====`);

        let playerChoice = prompt("Enter rock, paper, or scissor").toLowerCase();

        let computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);
    }


    console.log("======= Final Result =====");

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }

    else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }

    else {
        console.log("Game is tied!");
    }
}

playGame();