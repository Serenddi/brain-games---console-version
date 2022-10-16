#!/usr/bin/env node

import readlineSync from 'readline-sync';

let random;
let q1;
let userName;

function rules() {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function randomNum() {
  random = Math.floor(Math.random() * (40 - 1 + 1) + 1);
  console.log(`Question: ${random}`);
  q1 = readlineSync.question('Your answer: ');
}

let count = 0;

function output() {
  for (let i = 0; i < 2; i += 1) {
    if (random % 2 === 0 && q1 === 'yes') {
      console.log('Correct!');
      count = count + 1;
      randomNum();
    } else if (random % 2 !== 0 && q1 === 'no') {
      console.log('Correct!');
      count = count + 1; 
      randomNum();
    }
  }

  if (count === 2) {
    console.log(`Congratulations, ${userName}!`)
  };

  if (random % 2 === 0 && q1 === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
  } else if (random % 2 !== 0 && q1 === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
  };

  if (q1 !== 'yes' && q1 !== 'no') {
    console.log('Wrong!')
  };
}

function even() {
  console.log('Welcome to the Brain Games!');
  rules();
  randomNum();
  output();
}

even()