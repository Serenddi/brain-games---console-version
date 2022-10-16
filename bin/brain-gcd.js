#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName;
let random1;
let random2;
let q1;
let gcd;

function rules() {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
}

function randomExpression() {
  random1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  random2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log(`Question: ${random1} ${random2}`);
  q1 = readlineSync.question('Your answer: ');

  while (random1 !== random2) {
    if (random1 > random2) {
      random1 -= random2;
    } else {
      random2 -= random1;
    }
  }
  gcd = random1;
}

let count = 0;

function output() {
  for (let i = 0; i < 2; i += 1) {
    if (gcd === Number(q1)) {
      console.log('Correct!');
      count += 1;
      randomExpression();
    }
  }

  if (count === 2) {
    console.log(`Congratulations, ${userName}!`);
  }

  if (gcd !== Number(q1)) {
    console.log(`${q1} is wrong answer ;(. Correct answer was ${gcd}.\nLet's try again, ${userName}!`);
  }
}

function calc() {
  console.log('Welcome to the Brain Games!');
  rules();
  randomExpression();
  output();
}

calc();
