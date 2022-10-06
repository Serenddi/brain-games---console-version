import readlineSync from 'readline-sync';

export default function user() {
  
  let name = readlineSync.question('May I have your name? ');
  console.log('Hi ' + name + '!')
}

