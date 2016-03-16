////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    while(move != 'rock' && move != 'paper' && move != 'scissors'){
    move = getInput();
		if(move === 'rock' || move === 'paper' || move === 'scissors'){
			return move;
		}
	console.log('Invalid choice. Input is case sensitive.');
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
	if(move == null){
		return randomPlay();
	}
	else{
		return move;
	}
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
	if(playerMove === computerMove){
		winner = 'Tie';
        console.log('You both picked ' + playerMove + '. You tied.')
	}
	else if((playerMove === 'rock') && (computerMove === 'paper')){
		winner = 'Computer';
	}
	else if((playerMove === 'paper') && (computerMove === 'scissors')){
		winner = 'Computer';
	}
	else if((playerMove === 'scissors') && (computerMove === 'rock')){
		winner = 'Computer';
	}
	else if((playerMove === 'rock') && (computerMove === 'scissors')){
		winner = 'Player';
	}
	else if((playerMove === 'paper') && (computerMove === 'rock')){
		winner = 'Player';
	}
	else if((playerMove === 'scissors') && (computerMove === 'paper')){
		winner = 'Player';
	}

    if(winner != 'Tie'){
    console.log('You picked ' + playerMove + ' .Computer picked ' + computerMove + '.');
    console.log('     ' + winner + ' wins the round.');
    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
	var currentWinner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
	while ((playerWins < 5) && (computerWins < 5)){
		currentWinner = getWinner(getPlayerMove(),getComputerMove());
		if (currentWinner === 'Player'){
		playerWins++;
		console.log('     Player has ' + playerWins + ' wins');
		console.log('     Computer has ' + computerWins + ' wins');
    	console.log('player has ' + playerWins + ' wins');
		console.log('computer has ' + computerWins + ' wins');
		}
		else if (currentWinner === 'Computer'){
		computerWins++;
		console.log('     Player has ' + playerWins + ' wins');
		console.log('     Computer has ' + computerWins + ' wins');
		}
	}
	if (playerWins === 5){
	    return 'player';
	}
	else {
	    return 'computer';
	}
}

console.log(playToFive() + ' wins the game!')
