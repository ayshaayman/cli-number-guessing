#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//1 computer will generate the random number
//2 user input for guessing number 
//3 user number and computer no. need to be compared and then the results will be evaluated
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guesss a number between 1-6:",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log(chalk.greenBright(chalk.bold("congratulations you guess right number.")));
}
else {
    console.log(chalk.red(chalk.italic("you guess wrong number.\n Try again")));
}
