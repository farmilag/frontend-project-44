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

  for (let i = 0; i < 3; i += 1) {
    const number = generationRandomNumer(100, 1);
    console.log(`Question: ${number}`);

    const userAnswer = getUserAnswer();
    const corectAnswer = isPrime(number) ? 'yes' : 'no';

    if (!getResponseProcessing(userAnswer, corectAnswer, name)) {
      break;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

playGame();
