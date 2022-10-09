#!/usr/bin/env node

import readlineSync from 'readline-sync';

let random1;
let random2;
let q1;
let userName;
let result = 0;
let chars = ['+', '-', '*'];
let char;

function rules() {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('What is the result of the expression?')
}

function randomExpression() {
  random1 = Math.floor(Math.random() * (40 - 1 + 1) + 1);
  random2 = Math.floor(Math.random() * (40 - 1 + 1) + 1);
  char = chars[Math.floor(Math.random() * chars.length)];
  console.log(`Question: ${random1} ${char} ${random2}`);
  q1 = readlineSync.question('Your answer: ');

    switch (char) {
      case '+':
        result = random1 + random2;
        break;
      case '-':
        result = random1 - random2;
        break;
      case '*':
        result = random1 * random2;
        break;
      default:
        result = null;
    }
  
    console.log(result)
}

let count = 0;

function output() {
  for (let i = 0; i < 2; i++) {
    if (result === Number(q1)) {
      console.log('Correct!')
      count++
      randomExpression()
  }
}

  if (count === 2) {
    console.log(`Congratulations, ${userName}!`)
  }


  if (result !== Number(q1)) {
    console.log(`${q1} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`)
  }

}


function calc() {
  console.log('Welcome to the Brain Games!');
  rules();
  randomExpression()
  output()
}

calc()
