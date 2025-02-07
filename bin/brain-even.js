#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getUserAnswer, generationRandomNumer, getResponseProcessing } from '../src/commonFun.js';

const playEvenGame = () => {
  const QUESTIONS_COUNT = 3;
  const name = greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const number = generationRandomNumer(100, 1);
    console.log(`Question: ${number}`);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const userAnswer = getUserAnswer();

    if (!getResponseProcessing(userAnswer, correctAnswer, name)) {
      break;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();
