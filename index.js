let c1 = "rock";
let c2 = "paper";
let c3 = "scissors";

let playerChoice = prompt("Select between rock, paper, scissors.");

playerSelection = playerChoice.toLowerCase();

let playerScore = 0;
let computerScore = 0;


function selectRock() {
    playerSelection = 'rock';
    gameplay(playerChoice, getComputerChoice());
    console.log(`You have selected ${playerSelection}`);
}

function selectPaper() {
    playerSelection = 'paper';
    gameplay(playerChoice, getComputerChoice());
    console.log(`You have selected ${playerSelection}`);
}

function selectScissors() {
    playerSelection = 'scissors';
    gameplay(playerChoice, getComputerChoice());
    console.log(`You have selected ${playerSelection}`);
}



function getComputerChoice() {

    let choiceNumber = Math.floor(Math.random() * 3);



    if (choiceNumber == 0) {
        console.log(`Computer has selected ${c1}`);
        return c1;
    } else if (choiceNumber == 1) {
        console.log(`Computer has selected ${c2}`);
        return c2;
    } else {
        console.log(`Computer has selected ${c3}`);
        return c3;
    }

}

// let playerSelection = playerChoice;
let computerSelection = getComputerChoice();

function gameplay(player_Selection, computer_Selection) {

    if (player_Selection == 'rock' && computer_Selection == 'paper') {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (player_Selection == 'paper' && computer_Selection == 'scissors') {
        console.log("You lose! Scissors beat Paper");
        computerScore++;
    } else if (player_Selection == 'scissors' && computer_Selection == 'rock') {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (player_Selection == computer_Selection) {
        console.log("Its a tie!!!");
    } else if (computer_Selection == 'rock' && player_Selection == 'paper') {
        console.log("You Win! Paper beats Rock.");
        playerScore++;
    } else if (computer_Selection == 'paper' && player_Selection == 'scissors') {
        console.log("You Win! Scissors beat Paper");
        playerScore++;
    } else if (computer_Selection == 'scissors' && player_Selection == 'rock') {
        console.log("You Win! Rock beats Scissors");
        playerScore++;
    } else {
        console.log("Please enter valid String!")
    }

}

gameplay(playerSelection, computerSelection)

function finals(a, b) {
    if (a > b) {
        console.log("You win this round!");
    } else if (a < b) {
        console.log("Computer wins this round!");
    }
}

finals(playerScore, computerScore);