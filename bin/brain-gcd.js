#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const name = greetUser();
console.log('Find the greatest common divisor of given numbers.');

let correctAnswers = 0;

function gcd(x, y) {
  let a = x;
  let b = y;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for (let i = 0; i < 3; i += 1) {
  const number1 = Math.floor(Math.random() * 99) + 1;
  const number2 = Math.floor(Math.random() * 99) + 1;
  console.log(`Question: ${number1} ${number2}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = gcd(number1, number2);

  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;

    if (correctAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
