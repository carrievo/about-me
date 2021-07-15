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

console.log('user entered to question 5: ' + answerFive);

// check if the answer is correct:
if (answerFive === 'yes' || answerFive === 'y') {
  alert('Yay! Me too, thanks for playing! You may now enter my site..');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Rude. However, I\'ll be nice and let you enter my site. Go on now..');
} else {
  alert('Sorry, answers need to be yes or no.')
}