#!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';

function getUserAnswer() {
    return readlineSync.question('Your answer: ');
}

function playGame() {
    const name = greetUser();
    console.log("What number is missing in the progression?");

    for (let j = 0; j < 3; j++) {
        const shagProgressii = Math.floor(Math.random() * 9) + 1;
        const lengthArr = Math.floor(Math.random() * 9) + 3;
        const indexVirez = Math.floor(Math.random() * (lengthArr - 1)) + 1;
        let nachNumber = Math.floor(Math.random() * 15) + 1;
        let arrNum = [];

        for (let i = 0; i < lengthArr; i++) {
            nachNumber = nachNumber + shagProgressii;
            arrNum.push(nachNumber);
        }

        const corectAnswer = arrNum[indexVirez];
        arrNum.splice(indexVirez, 1, ".."); 
        console.log(arrNum.join(" "));

        const userAnswer = getUserAnswer();
        
        if (userAnswer != corectAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);  
            console.log(`Let's try again, ${name}`);
            return;
        }
        
        console.log("Correct!");
    }
    
    console.log(`Congratulations, ${name}!`);
}

playGame();
