import greetUser from '../cli.js';
import { generationRandomNumer, runGame } from '../commonFun.js';

const playGame = () => {
  const name = greetUser();

  const gcd = (x, y) => {
    let a = x;
    let b = y;
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const generateRound = () => {
    const number1 = generationRandomNumer(99, 1);
    const number2 = generationRandomNumer(99, 1);
    return {
      question: `${number1} ${number2}`,
      correctAnswer: gcd(number1, number2),
    };
  };

  runGame(
    'Find the greatest common divisor of given numbers.',
    generateRound,
    name,
  );
};

export default playGame;
