#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getRandomInt, getUserAnswer } from '../src/utils.js';

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

const name = greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const userAnswer = getUserAnswer('Your answer');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    i -= 1; // Повторить этот вопрос
  }
}

console.log(`Congratulations, ${name}!`);
