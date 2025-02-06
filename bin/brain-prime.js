#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

function getUserAnswer() {
  return readlineSync.question('Your answer: ');
}

function isPrime(number) {
  if (number < 2) return false; // Числа меньше 2 не являются простыми
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function playGame() {
  const name = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1; // Генерация числа от 1 до 100
    console.log(`Question: ${number}`); // Правильный формат вывода вопроса

    const userAnswer = getUserAnswer();
    const corectAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer === corectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGame();
