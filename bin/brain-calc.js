#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getUserAnswer, generationRandomNumer, getResponseProcessing } from '../src/commonFun.js';

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
  const number1 = generationRandomNumer(99, 1);
  const number2 = generationRandomNumer(99, 1);
  console.log(`Question: ${number1} ${number2}`);

  const userAnswer = getUserAnswer();
  const correctAnswer = gcd(number1, number2);

  if (getResponseProcessing(userAnswer, correctAnswer, name)) {
    correctAnswers += 1;

    if (correctAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    break;
  }
}
