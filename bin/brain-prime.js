#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName;
let q1;
let random;

function isPrime() {
  if (random === 1) {
    return false;
  }
  for (let i = 2; i < random; i += 1) {
    if (random % i === 0) {
      return false;
    }
  }
  return true;
}

function rules() {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function randomNum() {
  random = Math.floor(Math.random() * (40 - 1 + 1) + 1);
  isPrime(random);
  console.log(`Question: ${random}`);
  q1 = readlineSync.question('Your answer: ');
}

let count = 0;

function output() {
  for (let i = 0; i < 2; i += 1) {
    if (isPrime() === true && q1 === 'yes') {
      console.log('Correct!');
      count += 1;
      randomNum();
    } else if (isPrime() === false && q1 === 'no') {
      console.log('Correct!');
      count += 1;
      randomNum();
    }
  }

  if (count === 2) {
    console.log(`Congratulations, ${userName}!`);
  }

  if (isPrime() === true && q1 === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
  } else if (isPrime() === false && q1 === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
  }

  if (q1 !== 'yes' && q1 !== 'no') {
    console.log('Wrong!');
  }
}

function calc() {
  console.log('Welcome to the Brain Games!');
  rules();
  randomNum();
  output();
}

calc();
