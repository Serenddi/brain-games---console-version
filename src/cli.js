import readlineSync from 'readline-sync';

export default function user() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
}
