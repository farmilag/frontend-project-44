#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';

function getUserAnswer() {
    return readlineSync.question('Your answer: ');
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return number !== 1;
  }

function playGame() {
    const name = greetUser();
    console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.")
    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * 15) + 1

        console.log(number)
        const userAnswer = getUserAnswer();
        let corectAnswer
        if (isPrime(number) == true) {
            corectAnswer = "yes"
        }
        else {
            corectAnswer = "no"
        }

        if (userAnswer == corectAnswer) {
            console.log("Correct!");
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);  
            console.log(`Let's try again, ${name}`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
playGame();

