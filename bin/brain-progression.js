#!/usr/bin/env node

import readlineSync from 'readline-sync';

let q1;
let userName;
let count = 0;
let hiddenNumber;

function rules() {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?')
}

function randomExpression() {
  let arr = [];

  let plusNum = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  let random1 = Math.floor(Math.random() * (40 - 1 + 1) + 1);
  let hiddenIndex = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  for (let i = 0; i < 6; i++) {
    arr.push(random1 = random1 + plusNum);
  }

  hiddenNumber = arr[hiddenIndex];

  arr[hiddenIndex] = '...'

  console.log(arr.join(', '))

  q1 = readlineSync.question('Your answer: ');
}

function output() {
  for (let i = 0; i < 2; i++) {
    if (hiddenNumber === Number(q1)) {
      console.log('Correct!')
      count++
      randomExpression()
    }
  }

  if (count === 2) {
    console.log(`Congratulations, ${userName}!`)
  }


  if (hiddenNumber !== Number(q1)) {
    console.log(`${q1} is wrong answer ;(. Correct answer was ${hiddenNumber}.\nLet's try again, ${userName}!`)
  }

}

function calc() {
  console.log('Welcome to the Brain Games!');
  rules();
  randomExpression();
  output();
}

calc()