'use strict';

// get the users name so we can greet them
let username = prompt('What is your name?');
//greet the user
alert('Hello ' + username);

// ask question 1
let answerOne = prompt('Do I like Strawberries? Answer \'yes\' or \'no\'').toLowerCase();

console.log('user entered to question 1: ' + answerOne);

// check if the answer is correct:
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are correct. I like strawberries.');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Sorry, you are wrong.');
} else {
  alert('Sorry, answers need to be yes or no.')
}