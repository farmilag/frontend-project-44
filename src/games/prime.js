import greetUser from '../cli.js';
import { generationRandomNumer, runGame } from '../commonFun.js';

const playGame = () => {
  const name = greetUser();

  const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) return false;
    }
    return true;
  };

  const generateRound = () => {
    const number = generationRandomNumer(100, 1);
    return {
      question: number,
      correctAnswer: isPrime(number) ? 'yes' : 'no',
    };
  };

  runGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRound,
    name,
  );
};

export default playGame;
