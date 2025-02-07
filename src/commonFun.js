import readlineSync from 'readline-sync';

function getUserAnswer() {
  return readlineSync.question('Your answer: ');
}

function generationRandomNumer(limit, plus) {
  return Math.floor(Math.random() * limit) + plus;
}

function getResponseProcessing(userAnswer, correctAnswer, name) {
  if (userAnswer !== String(correctAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }

  console.log('Correct!');
  return true;
}
export { generationRandomNumer, getUserAnswer, getResponseProcessing };
