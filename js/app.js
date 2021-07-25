'use strict';


let username = prompt('Hey there! What is your name?');

let correctAnswerCount = 0;

alert('Hi ' + username + '. Lets play a guessing game!');

function questionOne(){
  let answerOne = prompt('Are you ready? Answer \'yes\' or \'no\'').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    alert('Perfect, let\'s start!');

    correctAnswerCount++;

  } else if (answerOne === 'no' || answerOne === 'n') {
    alert('Aw come on now, you got this!');
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionOne();


function questionTwo() {
  let answerTwo = prompt('Am I from Minnesota?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Oh wow, I\'m impressed. You\'re right, I am from Minnesota!');
    correctAnswerCount++;
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('I am from Minnesota! Listen for my \'O\'s\' & \'A\'s.');
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionTwo();

function questionThree() {
  let answerThree = prompt('Do I live in California right now?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    alert('Oh wow, you really know a lot about me. You\'re right!');
    correctAnswerCount++;
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('I do live in California! The weather is a lot nicer than Minne-SNOW-ta\'s.');
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionThree();


function questionFour() {
  let answerFour = prompt('Am I a cat person?').toLowerCase();

  if (answerFour === 'yes' || answerFour === 'y') {
    alert('Sorry, wrong answer. Cats are adorable but they kind of scare me. I\'m a huge dog person!');
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert('You\'re right! I love dogs and have 2 very cute ones!');
    correctAnswerCount++;
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionFour();

function questionFive() {
  let answerFive = prompt('Lastly, are you enjoying this guessing game?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    alert('Yay! Me too, let\'s continue!');
    correctAnswerCount++;
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('Maybe if we keep playing, it\'ll change your mind.');
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionFive();


function questionSix() {
  let myDogNumber = 5;
  let userResponse = +prompt('Can you guess how many dogs I\'ve had in my lifetime? \nHINT: It is less than 8. You have 4 tries to guess. \nReady? Set. Go!');

  let attemptsRemaining = 3;
  let attempts = 3;

  while (attemptsRemaining) {
    for (let i = 0; i < attempts; i++){
      console.log(`i: ${i}`);
      console.log(`attemptsRemaining: ${attemptsRemaining}`);
      if (userResponse === myDogNumber){
        attemptsRemaining = 0;
        alert('Woo hoo! You\'re right!');
        correctAnswerCount++;
        break;
      }
      else if (userResponse < myDogNumber){

        alert(`Too low, guess again! You have ${attemptsRemaining} attempts remaining.`);
        userResponse = +prompt('Try another number.');

      }
      else if (userResponse > myDogNumber){

        alert(`Too high, guess again! You have ${attemptsRemaining} attempts remaining.`);
        userResponse = +prompt('Try another number.');

      }

      else if (userResponse === myDogNumber){
        alert('Woo hoo! You\'re right!');
      }
      attemptsRemaining--;
      if (attemptsRemaining === 0){
        alert('Sorry, wrong answer. The correct answer is ' + myDogNumber + '. Better luck next time!');
      }
    }
  }
}
questionSix();

function questionSeven(){

  let listOfAnswers = ['purple', 'yellow', 'gray', 'gold']

  let attempts = 6

  while (attempts) {
    let answer = prompt(`What is one of my favorite colors? \nHint: Remember, I'm from Minnesota ;) \nYou've got 6 guesses. Good luck!`);

    attempts--;

    let correct = false;

    for (let i = 0; i < listOfAnswers.length; i++) {
      if (answer.toLowerCase() === listOfAnswers[i]) {
        alert(`You got it, ${listOfAnswers[i]} is the best color!`);
        correct = true;
        break;
      } else {
        continue;
      }
    }
    if (correct == true){
      correctAnswerCount++;
      break;
    } if (attempts === 0 ){
      alert(`That\'s incorrect. \nThe possible choices are: ${listOfAnswers}`);
    }
    else {
      alert(`That\'s incorrect. You have ${attempts} attempts left.`);
    }
  }
}
questionSeven();


let score = correctAnswerCount / 7
score = Math.round(score * 100)


if (correctAnswerCount) {
  alert(`Thanks for playing ${username}! \n You scored ${score}%. \n You may now enter my site.`)
}