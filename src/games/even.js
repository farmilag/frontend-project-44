import greetUser from '../cli.js';
import { getUserAnswer, generationRandomNumer, getResponseProcessing } from '../commonFun.js';

const playGame = () => {
  const QUESTIONS_COUNT = 3;
  const name = greetUser();
  let correctAnswersCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const number = generationRandomNumer(100, 1);
    console.log(`Question: ${number}`);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const userAnswer = getUserAnswer();

    if (!getResponseProcessing(userAnswer, correctAnswer, name)) {
      console.log(`Let's try again, ${name}!`);
      return; // Exit the function if the answer is wrong
    }

    correctAnswersCount += 1;
  }

  // Only print congratulations if all answers are correct
  if (correctAnswersCount === QUESTIONS_COUNT) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default playGame;
