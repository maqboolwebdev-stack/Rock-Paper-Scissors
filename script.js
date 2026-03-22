const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const humanScoreUI = document.querySelector('.human-score');
const computerScoreUI = document.querySelector('.computer-score');
const result = document.querySelector('.result');
const bothChoices = document.querySelector('.both-choices');
const rockText = 'rock';
const paperText = 'paper';
const scissorsText = 'scissors';
const tied = document.querySelector('.tie');
const finalResult = document.querySelector('h2');
const resetBtn = document.querySelector('.reset-btn');

function getComputerChoice() {
    let random = Math.random();

    if (random <= 0.33) {
        return 'rock';
    } else if (random <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

var humanScore = 0;
var computerScore = 0;
var tie = 0;
const WIN_SCORE = 5;
let gameOver = false;

function checkWinner() {
    if (humanScore >= WIN_SCORE) {
        gameOver = true;
        return 'human';
    }
    if (computerScore >= WIN_SCORE) {
        gameOver = true;
        return 'computer';
    } if (tie >= WIN_SCORE) {
        gameOver = true;
        return 'tie'
    }
    return null;
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        tie++;
        result.textContent = 'Tie!';
        bothChoices.textContent =  `you chose ' ${playerChoice} ' computer chose ' ${computerChoice} '`;
        tied.textContent = tie;
    }

    else if (
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
        computerScore++;
        result.textContent = `You lose!:`
        bothChoices.textContent =  `you chose ' ${playerChoice} ' computer chose ' ${computerChoice} '`;
        computerScoreUI.textContent = computerScore;
    }

    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result.textContent = `You win!:`
        bothChoices.textContent =  `you chose ' ${playerChoice} ' computer chose ' ${computerChoice} '`;
        humanScoreUI.textContent = humanScore;

    }
    const winner = checkWinner();
    

if (winner === 'human') {
    finalResult.textContent = 'You WON the game!';
    resetGame();
} else if (winner === 'computer') {
    finalResult.textContent = 'Computer WON the game!';
    resetGame();
} else if (winner === 'tie') {
    finalResult.textContent = 'Tie!';
    resetGame();
} else {
    finalResult.textContent = ' ';

}
  
}

function resetGame() {
     humanScore = 0;
     computerScore = 0;
     tie = 0;
    humanScoreUI.textContent = 0;
    computerScoreUI.textContent = 0;
    tied.textContent = 0;
    result.textContent = ' ';
    bothChoices.textContent = ' ';
}


rock.addEventListener('click', () => playRound(rockText, getComputerChoice()) );
paper.addEventListener('click', () => playRound(paperText, getComputerChoice()));
scissors.addEventListener('click', () => playRound(scissorsText, getComputerChoice()));

resetBtn.addEventListener('click', resetGame)