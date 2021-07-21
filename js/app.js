'use strict';

// get the users name so we can greet them
let username = prompt('Hey there! What is your name?');

//create score.
let correctAnswerCount = 0;

//greet the user
alert('Hi ' + username + '. Lets play a guessing game!');

// ask question 1
function questionOne(){
  let answerOne = prompt('Are you ready? Answer \'yes\' or \'no\'').toLowerCase();

  console.log('user entered to question 1: ' + answerOne);

  // check if the answer is correct:
  // if the answer is correct
  if (answerOne === 'yes' || answerOne === 'y') {
    alert('Perfect, let\'s start!');
    // adds 20 to score
    correctAnswerCount++;
  // if answer is incorrect
  } else if (answerOne === 'no' || answerOne === 'n') {
    alert('Aw come on now, you got this!');
  // if user answers with anything other than y/n
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionOne();

// ask question 2
function questionTwo() {
  let answerTwo = prompt('Am I from Minnesota?').toLowerCase();

  console.log('user entered to question 2: ' + answerTwo);

  // check if the answer is correct:
  // if answer is correct
  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Oh wow, I\'m impressed. You\'re right, I am from Minnesota!');
    // adds 20 to score
    correctAnswerCount++;
  // if answer is incorrect
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('I am from Minnesota! Listen for my \'O\'s\' & \'A\'s.');
  //if user answers anything other than y/n
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionTwo();

// ask question 3
function questionThree() {
  let answerThree = prompt('Do I live in California right now?').toLowerCase();

  console.log('user entered to question 3: ' + answerThree);

  // check if the answer is correct:
  // if answer is correct
  if (answerThree === 'yes' || answerThree === 'y') {
    alert('Oh wow, you really know a lot about me. You\'re right!');
    // adds 20 to score
    correctAnswerCount++;
  // if answer is incorrect
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('I do live in California! The weather is a lot nicer than Minne-SNOW-ta\'s.');
  // if user answers anything other than y/n
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionThree();


// ask question 4
function questionFour(){
  let answerFour = prompt('Am I a cat person?').toLowerCase();

  console.log('user entered to question 4: ' + answerFour);

  // check if the answer is correct:
  // if answer is incorrect
  if (answerFour === 'yes' || answerFour === 'y') {
    alert('Sorry, wrong answer. Cats are adorable but they kind of scare me. I\'m a huge dog person!');
  // if answer is correct
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert('You\'re right! I love dogs and have 2 very cute ones!');
    // adds 20 to score
    correctAnswerCount++;
  // if user answers anything other than y/n
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionFour();

// ask question 5
function questionFive() {
  let answerFive = prompt('Lastly, are you enjoying this guessing game?').toLowerCase();

  console.log('user entered to question 5: ' + answerFive);

  // check if the answer is correct:
  // if answer is correct
  if (answerFive === 'yes' || answerFive === 'y') {
    alert('Yay! Me too, let\'s continue!');
    // adds 20 to score
    correctAnswerCount++;
  // if answer is incorrect
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('Maybe if we keep playing, it\'ll change your mind.');
  // if user answers anything other than y/n
  } else {
    alert('Sorry, answers need to be yes or no.');
  }
}
questionFive();

// ask question 6

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
        alert(`Woo hoo! You're right!`);
        correctAnswerCount++;
        break;
      }
      else if (userResponse < myDogNumber){

        userResponse = +prompt(`Try another number.`);
        alert(`Too low, guess again! You have ${attemptsRemaining} attempts remaining.`);

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
}
questionSix();

// ask question 7
function questionSeven(){

  // arrays of correct answers
  let listOfAnswers = ['purple', 'yellow', 'gray', 'gold']

  // sets attempts to 6 for next question
  attempts = 6

  while (attempts) {
  // prompts question and gives possible answers
    let answer = prompt(`What is one of my favorite colors? \nHint: Remember, I'm from Minnesota ;) \nYou've got 6 guesses. Good luck!`);

    // logs answer to console
    console.log(`answer = ${answer}`);

    // subtracts 1 from attempts
    attempts--;

    let correct = false;

    // loops through correct answers to see if answer is correct
    for (let i = 0; i < listOfAnswers.length; i++) {
      if (answer.toLowerCase() === listOfAnswers[i]) {
        alert(`You got it, ${listOfAnswers[i]} is the best color!`);
        // sets correct to true to break while loop
        correct = true;
        break;
      } else {
        continue;
      }
    }
    if (correct == true){
    // increments correctAnswerCount by 1
      correctAnswerCount++;
      // sets attempts to 0 to break while loop
      break;
    } else {
      alert(`That\'s incorrect. You have ${attempts} attempts left.`);
    }
  }
  questionSeven();

  // Tell the user how many answers they got correct

  // calculate score

let score = correctAnswerCount / 7
score = Math.round(score * 100)

// evauates and then alerts the score to the user
if (correctAnswerCount) {
  alert(`Thanks for playing ${username}! \n You scored ${score}%. \n You may now enter my site.`)
}
}


