import greetUser from '../cli.js';
import { generationRandomNumer, runGame } from '../commonFun.js';

const playGame = () => {
  const name = greetUser();

  const generateRound = () => {
    const step = generationRandomNumer(10, 1);
    const length = generationRandomNumer(6, 5);
    const hiddenIndex = generationRandomNumer(length, 0);
    let startNumber = generationRandomNumer(50, 1);

    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(startNumber);
      startNumber += step;
    }

    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return {
      question: progression.join(' '),
      correctAnswer,
    };
  };

  runGame(
    'What number is missing in the progression?',
    generateRound,
    name,
  );
};

export default playGame;
