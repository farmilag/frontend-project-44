#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getRandomInt, getUserAnswer } from '../src/utils.js';

const name = greetUser();
console.log('Find the greatest common divisor of given numbers.');

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

let correctAnswers = 0;

for (let i = 0; i < 3; i += 1) {
  const number1 = getRandomInt(1, 99);
  const number2 = getRandomInt(1, 99);
  console.log(`Question: ${number1} ${number2}`);

  const userAnswer = getUserAnswer('Your answer');
  const correctAnswer = gcd(number1, number2);

  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    i -= 1; // Повторить этот вопрос
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
