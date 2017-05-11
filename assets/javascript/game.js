// Universal Variables

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var loses = 0;
var guessesLeft = 9;

// Select random number with range length of array

var randomNumber = function (range) {
	return Math.floor(Math.random() * range.length);
}

// Computer's letter choice based selected index of selected number

var compChoice = letters[randomNumber(letters)];
console.log('This is the value of compChoice: ' + compChoice);

// User's letter choice and array of user choices
var userGuessArray = []
var userGuess

		document.onkeyup = function(event){
        userGuess = event.key;
        userGuessArray.push(userGuess);
        console.log('This is the userGuess: ' + userGuess);
        console.log('This is the userGuessArray: ' + userGuessArray)

      }

//Increment wins/loses, decrement guessesLeft

	if (compChoice !== userGuess) {
		loses++;
		guessesLeft--;
	}

	else {
		wins++;
		guessesLeft--;
	}
}

 
