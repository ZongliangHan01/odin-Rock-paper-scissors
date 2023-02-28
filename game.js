const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const box = document.querySelector(".result");
const result = document.createElement("div");

let scorePlayer = 0;
let scoreComputer = 0;

//buttons response
rock.addEventListener("click", playRound);

paper.addEventListener("click", playRound);

scissor.addEventListener("click", playRound);

//get the random choice of computer
function getComputerChoice() {
    randomNumber = Math.floor(Math.random()*100) + 1;
    if (randomNumber>66) {
        return "Rock"
    } else if (randomNumber>33) {
        return "Paper"
    } else {
        return "Scissor"
    }
}

//play one round when player click the button
function playRound(e) {
    let playerSelection = e.target.value 
    computerSelection = getComputerChoice();
    
    //when player win
    if ((playerSelection=="Rock" && computerSelection=="Scissor")
    || (playerSelection=="Paper" && computerSelection=="Rock")
    || (playerSelection=="Scissor" && computerSelection=="Paper")) {
        updateMessage("player", playerSelection, computerSelection);
    
    //when its a tie game
    }else if (playerSelection==computerSelection) {
        updateMessage("tie", playerSelection, computerSelection);
    
    //when computer win 
    } else {
        updateMessage("computer", playerSelection, computerSelection);
    }
    
    //when any win, display the winner info and ask player to reload game
    if (scoreComputer==5 || scorePlayer==5) {
        endGame();
    }
    
    
}


//display the winner info
function endGame() {
    //when computer win
    if (scoreComputer==5)  {
        result.textContent = "Computer win the game!";
        
    //when player win
    } else if (scorePlayer==5) {
        result.textContent = "You win the game!";    
    }
    box.appendChild(result);
    
    //get rid of choice button
    const diss = document.querySelectorAll(".disappear");
    diss.forEach(dis => {
        dis.remove();
    });
    
    //create a reload button
    const reloadBtn = document.createElement("button");
    reloadBtn.textContent = "Play Again";
    reloadBtn.addEventListener("click", reloadGame);
    result.appendChild(reloadBtn);
}

//update info showing on the screen base on the winner
function updateMessage(winner, playerSelection, computerSelection){
    //prepare the text and update scores
    if (winner === "computer") {
        result.textContent = `You Lose this Round! ${computerSelection} beats ${playerSelection}!`;
        ++scoreComputer;
        
    } else if (winner === "player") {
        result.textContent = `You Win this Round! ${playerSelection} beats ${computerSelection}!`
        ++scorePlayer;
        
    } else if (winner === "tie") {
        result.textContent = `It's a tie game! Both chose the ${playerSelection}!`;
    }

    //add text and score to DOM tree
    let score = document.querySelector(".scoreContent");
    let scoreContent = document.createElement("div");
    
    scoreContent.textContent = `Player's score: ${scorePlayer}       Computer's score: ${scoreComputer}`;
    scoreContent.classList.add("scoreContent");
    score.replaceWith(scoreContent);
    box.appendChild(result);
}

//reload game
function reloadGame() {
    window.location.reload();
}

