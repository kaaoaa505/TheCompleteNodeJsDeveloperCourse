import chalk from 'chalk';
import validator from 'validator';
import { getNotes } from './notes.js';

// const getNotes = require('./notes');

console.log(`
----Notes:
`);
console.log(getNotes());

console.log(`
----Validator:
`);
console.log(validator.isEmail('test'));
console.log(validator.isEmail('test@local.host'));
console.log(validator.isEmail('t@l.eg'));


console.log(`
----Terminal Colors:
`);
console.log(chalk.red('Hello world!'));
console.log(chalk.bold.red('Hello world!'));
console.log(chalk.inverse.red('Hello world!'));
console.log(chalk.green('Hello world!'));
console.log(chalk.bold.green('Hello world!'));
console.log(chalk.inverse.green('Hello world!'));
console.log(chalk.blue('Hello world!'));
console.log(chalk.bold.blue('Hello world!'));
console.log(chalk.inverse.blue('Hello world!'));

console.log(`
________________________________________________

`, new Date());