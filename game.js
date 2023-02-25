function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*100) + 1;
    if (randomNumber>66) {
        return "Rock"
    } else if (randomNumber>33) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1).toLowerCase();
    if ((playerSelection=="Rock" && computerSelection=="Scissors")
    || (playerSelection=="Paper" && computerSelection=="Rock")
    || (playerSelection=="Scissors" && computerSelection=="Paper")) {
        console.log (`You Win! ${playerSelection} beats ${computerSelection}!`);
        return "player";
    }else if (playerSelection==computerSelection) {
        console.log (`It's a tie game! Both chose the ${playerSelection}!`);
        return "tie";
    } else {
        console.log (`You Lose! ${computerSelection} beats ${playerSelection}!`);
        return "computer";
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("What is your choice for this round");
        const computerSelection = getComputerChoice();
        let result = (playRound(playerSelection, computerSelection));
        if (result == "player") {
            playerScore++;
        } else if (result == "computer") {
            computerScore++;
        }
    }
    if (playerScore>computerScore) {
        console.log("You are the winner!")
    } else if (playerScore<computerScore) {
        console.log("Computer is the winner!")
    }
}