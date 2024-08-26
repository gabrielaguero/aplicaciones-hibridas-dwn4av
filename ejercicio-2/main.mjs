import primo from './script.js';
import dotenv from 'dotenv';

dotenv.config();

const nuevoNum = 17;
console.log(`El número ${nuevoNum} es primo?`, primo(nuevoNum));
