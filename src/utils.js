import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getUserAnswer = (message) => readlineSync.question(`${message}: `);
