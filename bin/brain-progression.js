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
        const shagProgressii = Math.floor(Math.random() * 10) + 1; // Шаг прогрессии от 1 до 10
        const lengthArr = Math.floor(Math.random() * 6) + 5; // Длина прогрессии от 5 до 10
        const indexVirez = Math.floor(Math.random() * lengthArr); // Случайный индекс скрытого элемента
        let nachNumber = Math.floor(Math.random() * 50) + 1; // Начальное число от 1 до 50

        let arrNum = [];
        for (let i = 0; i < lengthArr; i++) {
            arrNum.push(nachNumber);
            nachNumber += shagProgressii;
        }

        const corectAnswer = arrNum[indexVirez];
        arrNum[indexVirez] = ".."; // Заменяем элемент на ".."
        console.log(`Question: ${arrNum.join(" ")}`);

        const userAnswer = getUserAnswer();

        if (Number(userAnswer) !== corectAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log("Correct!");
    }

    console.log(`Congratulations, ${name}!`);
}

playGame();