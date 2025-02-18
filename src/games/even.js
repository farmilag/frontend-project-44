import greetUser from '../cli.js';
import { generationRandomNumer, runGame } from '../commonFun.js';

const playGame = () => {
  const name = greetUser();

  const generateRound = () => {
    const number = generationRandomNumer(100, 1);
    return {
      question: number,
      correctAnswer: number % 2 === 0 ? 'yes' : 'no',
    };
  };

  runGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
    name,
  );
};

export default playGame;
