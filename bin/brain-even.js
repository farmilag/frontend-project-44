#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getRandomInt, getUserAnswer } from '../src/utils.js';

const QUESTIONS_COUNT = 3;
const name = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);

  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = getUserAnswer('Your answer').toLowerCase();

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    i -= 1; // Повторить этот вопрос
  }
}

console.log(`Congratulations, ${name}!`);
