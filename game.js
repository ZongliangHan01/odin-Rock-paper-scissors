const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");

const box = document.querySelector(".result");
const result = document.createElement("div");

const buttons = document.querySelectorAll(".button");
const btnImgs = document.querySelectorAll(".btnImg");

let scorePlayer = 4;
let scoreComputer = 0;

//buttons response
rock.addEventListener("click", playRound);

paper.addEventListener("click", playRound);

scissor.addEventListener("click", playRound);

// btnImgs.forEach(btnImg => {
//     btnImg.addEventListener("click", playRound);
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseover", selected);
    
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", unselected);
    
// });


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
    let playerSelection = e.target.id
    computerSelection = getComputerChoice();
    console.log(e.target.id);
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
    const reloadBtnBox = document.createElement("div");
    reloadBtn.textContent = "Play Again";
    reloadBtn.addEventListener("click", reloadGame);
    reloadBtn.classList.add("reloadBtn");
    box.appendChild(reloadBtnBox);
    reloadBtnBox.appendChild(reloadBtn);
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
    let scoreP = document.querySelector(".scorePlayer");
    let scoreC = document.querySelector(".scoreComputer");
    let playerContent = document.createElement("div");
    let computerContent = document.createElement("div");

    // console.log(scoreC);
    // console.log(scoreP);

    playerContent.textContent = `Player's score: ${scorePlayer}`;
    computerContent.textContent = `Computer's score: ${scoreComputer}`;
    playerContent.classList.add("scorePlayer");
    computerContent.classList.add("scoreComputer");
    scoreP.replaceWith(playerContent);
    scoreC.replaceWith(computerContent);
    
    const oldMessage = document.querySelector(".resultMassage");
    result.classList.add("resultMassage");
    oldMessage.replaceWith(result);
}

//reload game
function reloadGame() {
    window.location.reload();
}

// function selected(e) {
//     if (e.currentTarget !== e.target) {
//         return;
//     }
//     console.log(e.target)
//     // const select = document.querySelector(`.${e.target.value}`);
//     // console.log(select);
//     e.target.classList.add("transform")
//     const btnImg = e.target.children[0]
//     console.log(btnImg)
//     btnImg.classList.add("transform")
//     //e.stopPropagation();

// }

// function unselected(e) {
//     // if (e.currentTarget !== e.target) {
//     //     return;
//     // }
//     console.log(e.target)
//     // const select = document.querySelector(`.${e.target.value}`);
//     // console.log(select);
//     e.target.classList.remove("transform")
//     const btnImg = e.target.children[0]
//     console.log(btnImg)
//     btnImg.classList.remove("transform")
//     //e.stopPropagation();
// }

