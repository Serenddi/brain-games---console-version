#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName;
let q1;
let random;


function rules() {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
}

function randomNum() {
  random = Math.floor(Math.random() * (40 - 1 + 1) + 1);
  isPrime(random);
  console.log(`Question: ${random}`);
  q1 = readlineSync.question('Your answer: ');
}

let count = 0;

function output() {
  for (let i = 0; i < 2; i++) {
    if (isPrime() === true && q1 === 'yes') {
      console.log('Correct!')
      count++
      randomNum()
    } else if (isPrime() === false && q1 === 'no') {
      console.log('Correct!')
      count++
      randomNum()
    }
  }


  if (count === 2) {
    console.log(`Congratulations, ${userName}!`)
  }


  if (isPrime() === true && q1 === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`)
  } else if (isPrime() === false && q1 === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
  }

  if (q1 != 'yes' && q1 != 'no') {
    console.log('Wrong!')
  }

}


function isPrime() {
  if (random === 1) {
    return false;
  }
    for (let i = 2; i < random; i++) {
      if (random % i === 0) {
        return false;
      } 
    }
    return true;
  }

  function calc() {
    console.log('Welcome to the Brain Games!');
    rules();
    randomNum();
    output()
  }

  calc()