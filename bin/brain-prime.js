#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getUserAnswer, generationRandomNumer, getResponseProcessing } from '../src/commonFun.js';

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function playGame() {
  const name = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0; // Counter to track correct answers

  for (let i = 0; i < 3; i += 1) {
    const number = generationRandomNumer(100, 1);
    console.log(`Question: ${number}`);

    const userAnswer = getUserAnswer();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (!getResponseProcessing(userAnswer, correctAnswer, name)) {
      console.log(`Let's try again, ${name}!`);
      return; // Exit the function if the answer is wrong
    }

    correctAnswersCount += 1; // Increment the counter for correct answers
  }

  // Only print congratulations if all answers are correct
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

playGame();
