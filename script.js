document.addEventListener("DOMContentLoaded", () => {
    const choices = ["stone", "paper", "scissors"];
    const userScoreEl = document.getElementById("user-score");
    const computerScoreEl = document.getElementById("computer-score");
    const messageEl = document.getElementById("msg");
    const gameOptions = document.querySelectorAll(".game-option");

    let userScore = 0;
    let computerScore = 0;
    
    gameOptions.forEach(option => {
        option.addEventListener("click", () => {
            const userChoice = option.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            determineWinner(userChoice, computerChoice);
        });
    });
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            messageEl.textContent = "IT'S TIE!";
            messageEl.style.backgroundColor = "#043d78";
        } else if (
            (userChoice === "stone" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "stone") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            userScore++;
            userScoreEl.textContent = userScore;
            messageEl.textContent = "YOU WIN!";
            messageEl.style.backgroundColor = "#008000";
        } else {
            computerScore++;
            computerScoreEl.textContent = computerScore;
            messageEl.textContent = "YOU LOSE!";
            messageEl.style.backgroundColor = "#ff0000";
        }
    }
});