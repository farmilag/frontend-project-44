#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getRandomInt, getUserAnswer } from '../src/utils.js';

const name = greetUser();
console.log('What is the result of the expression?');

let correctAnswers = 0;

for (let i = 0; i < 3; i += 1) {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operators = ['*', '+', '-'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
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

  const userAnswer = getUserAnswer('Your answer');

  if (Number(userAnswer) === result) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    i -= 1; // Повторить этот вопрос
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
