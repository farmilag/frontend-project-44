#!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';

const name = greetUser();
console.log("What is the result of the expression?")
for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * 100) + 1
    const number2 = Math.floor(Math.random() * 100) + 1
    const operators = ['*', '+', '-'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];
    console.log(`Question: ${number1} ${randomOperator} ${number2}`)

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
    result = 'Неизвестная операция'
}
const userAnswer = readlineSync.question('Your answer: ');
if (userAnswer == result) {
    console.log("Correct!")
    if (i === 2) {
        console.log(`Congratulations, ${name}!`)
    }
}

else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);  
    console.log(`Let's try again, ${name}`)
    break
}



}
