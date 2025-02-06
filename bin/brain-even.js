#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const playEvenGame = () => {
  const QUESTIONS_COUNT = 3;
  const name = greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();
