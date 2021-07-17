'use strict';

// get the users name so we can greet them
let username = prompt('Hey there! What is your name?');
//greet the user
alert('Hi ' + username + '. Lets play a guessing game!');

// ask question 1
let answerOne = prompt('Are you ready? Answer \'yes\' or \'no\'').toLowerCase();


console.log('user entered to question 1: ' + answerOne);

// check if the answer is correct:
if (answerOne === 'yes' || answerOne === 'y') {
  alert('Perfect, let\'s start!');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Aw come on now, you got this!');
} else {
  alert('Sorry, answers need to be yes or no.')
}

// ask question 2
let answerTwo = prompt('Can you guess what state I used to live in?').toLowerCase();
l

console.log('user entered to question 2: ' + answerTwo);

// check if the answer is correct:
if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Oh wow, I\'m impressed. You\'re right, it\'s Minnesota!');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('It\'s okay, I\'m from Minnesota! Listen for my \'O\'s\' & \'A\'s.');
} else {
  alert('Sorry, answers need to be yes or no.')
}

// ask question 3
let answerThree = prompt('Can you guess where I live now?').toLowerCase();
let userScore = 0;

console.log('user entered to question 3: ' + answerThree);

// check if the answer is correct:
if (answerThree === 'yes' || answerThree === 'y') {
  alert('Oh wow, you really know a lot about me. You\'re right, it\'s California!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('I live in California! The weather is a lot nicer than Minne-SNOW-ta\'s.');
} else {
  alert('Sorry, answers need to be yes or no.')
}

// ask question 4
let answerFour = prompt('Take a guess, am I a cat person?').toLowerCase();

console.log('user entered to question 4: ' + answerFour);

// check if the answer is correct:
if (answerFour === 'yes' || answerFour === 'y') {
  alert('Sorry, wrong answer. Cats are cute but they kind of scare me. I\'m a diehard dog person!');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('You\'re right! I love dogs and have 2 very cute ones!');
} else {
  alert('Sorry, answers need to be yes or no.')
}

// ask question 5
let answerFive = prompt('Lastly, are you enjoying this guessing game?').toLowerCase();
let userScore = 0;

console.log('user entered to question 5: ' + answerFive);

// check if the answer is correct:
if (answerFive === 'yes' || answerFive === 'y') {
  alert('Yay! Me too, let\'s continue!');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Maybe if we keep playing, it\'ll change your mind.');
} else {
  alert('Sorry, answers need to be yes or no.')
}

// ask question 6

let myDogNumber = 5;
let userResponse = +prompt('Can you guess how many dogs I\'ve had in my lifetime? HINT: It is less than 8. You have 4 tries to guess, go!');

let attemptsRemaining = 3;
let attempts = 3;

while (attemptsRemaining) {
  for (let i = 0; i < attempts; i++){
    console.log(`i: ${i}`);
    console.log(`attemptsRemaining: ${attemptsRemaining}`);
    if (userResponse === myDogNumber){
      attemptsRemaining = 0;
      alert(`Woo hoo! You're right!`);
      break;
    } 
    else if (userResponse < myDogNumber){
      
      alert(`Too low, guess again! You have ${attemptsRemaining} attempts remaining.`);
      userResponse = +prompt(`Try another number.`);
    }  
    else if (userResponse > myDogNumber){
      
      userResponse = +prompt(`Try another number.`);
      alert(`Too high, guess again! You have ${attemptsRemaining} attempts remaining.`);
      
    }
    attemptsRemaining--;
    if (attemptsRemaining === 0){
      alert('Sorry, wrong answer. The correct answer is ' + myDogNumber + '. Better luck next time!');
    } 
    else if (userResponse === myDogNumber){
      alert(`Woo hoo! You're right!`);
    }
  }
}

// ask question 7

let answerCountries = 17;
let attempts = 6;

for (let i = 1; i < attempts; i + 1) {
    let answerAmount = +prompt ('Can you guess how many countries I\'ve been to? Hint: It\'s between 10 to 20'); {
        console.log (`Guess of countries: ${answerCountries}`)

  } if (answerAmount === answerCountries) {
      alert ('Yay, you got it!');
      break;

  } else if (answerAmount < answerCountries) {
    attempts--;
      alert (`You are too low! You have have ${attempts} guesses left`);
      
  } else if (answerAmount > answerCountries){
    attempts--;  
    alert (`You are too high! You have ${attempts} guesses left`);
    
  }
    attemptsRemaining--;
    if (attemptsRemaining === 0){
      alert('The correct answer is ' + 17);
      }
    }

// Tell the user how many answers they got correct




