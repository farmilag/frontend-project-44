#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getUserAnswer, generationRandomNumer, getResponseProcessing } from '../src/commonFun.js';

const name = greetUser();
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const number1 = generationRandomNumer(100, 1);
  const number2 = generationRandomNumer(100, 1);
  const operators = ['*', '+', '-'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  console.log(`Question: ${number1} ${randomOperator} ${number2}`);

  let result;
  switch (randomOperator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = null;
  }

  const userAnswer = getUserAnswer();

  if (!getResponseProcessing(userAnswer, result, name)) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
