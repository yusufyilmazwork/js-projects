/*
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
const buttons = document.querySelectorAll("button");



const randomSelect = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

const result = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++
            document.querySelector(".score").firstChild.innerText.textContent = playerScore;
            return "You win!";
        } else {
            computerScore++
            document.querySelector(".score").firstChild.innerText.textContent = computerScore;
            return "You lose!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++
            document.querySelector(".score").firstChild.innerText.textContent = playerScore;
            return "You win!";
        } else {
            computerScore++
            document.querySelector(".score").firstChild.innerText.textContent = computerScore;
            return "You lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++
            document.querySelector(".score").firstChild.innerText.textContent = playerScore;
            return "You win!";
        } else {
            computerScore++
            document.querySelector(".score").firstChild.innerText.textContent = computerScore;
            return "You lose!";
        }
}
console.log(result)
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const winner = result(button.id,randomSelect())
        resultEl.textContent = winner;

})
})

*/

let playerScore = 0;
let computerScore = 0;
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("score");

const randomSelect = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

const result = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            playerScoreElement.textContent = playerScore;
            return "You win!";
        } else {
            computerScore++;
            computerScoreElement.textContent = computerScore;
            return "You lose!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            playerScoreElement.textContent = playerScore;
            return "You win!";
        } else {
            computerScore++;
            computerScoreElement.textContent = computerScore;
            return "You lose!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            playerScoreElement.textContent = playerScore;
            return "You win!";
        } else {
            computerScore++;
            computerScoreElement.textContent = computerScore;
            return "You lose!";
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const winner = result(button.id, randomSelect());
        
    });
});
