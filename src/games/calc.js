import greetUser from '../cli.js';
import { generationRandomNumer, runGame } from '../commonFun.js';

const playGame = () => {
  const name = greetUser();

  const generateRound = () => {
    const number1 = generationRandomNumer(100, 1);
    const number2 = generationRandomNumer(100, 1);
    const operators = ['*', '+', '-'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

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
        result = null;
    }

    return {
      question: `${number1} ${randomOperator} ${number2}`,
      correctAnswer: result,
    };
  };

  runGame(
    'What is the result of the expression?',
    generateRound,
    name,
  );
};

export default playGame;
