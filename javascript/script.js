function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"]; //Only three choices 
    const randomIndex = Math.floor(Math.random() * choice.length); //gets random number between 0 and 1 returns the index value of the choice array
    return choice[randomIndex]; //returns the value of the index
}

// console.log(getComputerChoice());

//Asking for the choice from player
function getPlayerChoice(){
    const choice = prompt("Enter your choice (rock, paper, or scissors): ");
    return choice; 
}

//Game conditions
function playRound(playerChoice, computerChoice) {
    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(playerChoice)) { //if player choice not include valid choice
        return "Invalid choice. Please enter 'rock', 'paper', or 'scissors'.";
    }
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

//Game logic 
function playGame(){
    let playerScore = 0;
    let computerScore = 0; 

    const validChoices = ["rock", "paper", "scissors"];

    for(let r =1; r<=5; r++){
        let playerChoice = getPlayerChoice();
        if (!validChoices.includes(playerChoice)) { //If the choice is invalid
            console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
            r--; 
            continue;
        }
        const computerChoice = getComputerChoice();
        console.log("Computer chose: ", computerChoice);
        console.log("Your choice: ", playerChoice);

        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result == "You win!"){
            playerScore ++;
        }else if (result == "Computer wins!"){
            computerScore++;
        }
    
        console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`)
    }

    if(playerScore > computerScore){
        console.log("Congrats! You won the game against computer.");
    }else if (playerScore < computerScore){
        console.log("Uh ohhh! Better luck next time!")
    }else{
        console.log("The game is tie!");
    }
}

playGame();
