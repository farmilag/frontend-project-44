import greetUser from '../cli.js';
import { getUserAnswer, generationRandomNumer, getResponseProcessing } from '../commonFun.js';

function playGame() {
  const name = greetUser();
  console.log('What number is missing in the progression?');

  for (let j = 0; j < 3; j += 1) {
    const shagProgressii = generationRandomNumer(10, 1);
    const lengthArr = generationRandomNumer(6, 5);
    const indexVirez = generationRandomNumer(lengthArr, 0);
    let nachNumber = generationRandomNumer(50, 1);

    const arrNum = [];
    for (let i = 0; i < lengthArr; i += 1) {
      arrNum.push(nachNumber);
      nachNumber += shagProgressii;
    }

    const correctAnswer = arrNum[indexVirez];
    arrNum[indexVirez] = '..';
    console.log(`Question: ${arrNum.join(' ')}`);

    const userAnswer = getUserAnswer();

    if (!getResponseProcessing(userAnswer, correctAnswer, name)) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
export default playGame;
