#!/usr/bin/env node
import { greetUser } from "../src/cli.js";
import readlineSync from 'readline-sync';

const name = greetUser();

console.log("Find the greatest common divisor of given numbers.");

for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * 99) + 1;
const number2 = Math.floor(Math.random() * 99) + 1;
console.log(number1, number2);

const userAnswer = readlineSync.question('Your answer: ');

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const correctAnswer = gcd(number1, number2);

if (correctAnswer === Number(userAnswer)) {
    console.log("Correct!");
} else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break
}


if (i == 2) {
    console.log(`Congratulations ${name}!`);
}
}

