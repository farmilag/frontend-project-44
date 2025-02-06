#!/usr/bin/env node

import greetUser from '../src/cli.js';
import { getRandomInt, getUserAnswer } from '../src/utils.js';

function playGame() {
  const name = greetUser();
  console.log('What number is missing in the progression?');

  for (let j = 0; j < 3; j += 1) {
    const shagProgressii = getRandomInt(1, 10);
    const lengthArr = getRandomInt(5, 10);
    const indexVirez = getRandomInt(0, lengthArr - 1);
    let nachNumber = getRandomInt(1, 50);

    const arrNum = [];
    for (let i = 0; i < lengthArr; i += 1) {
      arrNum.push(nachNumber);
      nachNumber += shagProgressii;
    }

    const corectAnswer = arrNum[indexVirez];
    arrNum[indexVirez] = '..';
    console.log(`Question: ${arrNum.join(' ')}`);

    const userAnswer = getUserAnswer('Your answer');

    if (Number(userAnswer) === corectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      j -= 1; // Повторить этот вопрос
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGame();
