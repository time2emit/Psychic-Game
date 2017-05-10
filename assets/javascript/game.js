// Universal Variables

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var userInputArray = [''];
var wins = 0;
var loses = 0;
console.log('This is the length of the letter array: ' + letters.length)

// Select random number with range length of array

var randomNumber = function (range) {
	return Math.floor(Math.random() * range.length);

}

// Computer's letter choice based selected index of selected number

console.log('This is the value of randomNumber: ' + randomNumber(letters));
var compChoice = letters[randomNumber(letters)];
console.log('This is the value of compChoice: ' + compChoice);

// User's letter choice
var userInput = document.onkeyup = function(event){
	console.log('This is the value of event.key: ' + event.key);
	}
console.log('This is the value of userInput: ' + userInput);

// Place user's letter choice in an array

userInputArray = userInputArray.push(userInput);
console.log('This is the value of userInputArray: ' + userInputArray);

// Compaire computer's choice to user's choice

if (compChoice != userInput){
	loses = loses +1;
} else {
	wins = wins +1;
}

console.log('This is the value of loses: ' + loses);
console.log('This is the value of wins: ' + wins);


// var guessedLetters = [''];
// var userInput = document.onkeyup = function(event){
// 	console.log(event.key);
// 	}

// 	guessedLetters.push(userInput);
// 	console.log(guessedLetters);
