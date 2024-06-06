#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n \t wellcome to 'codehub with Moiz' >===WORD_COUNTER===<\n"));
console.log("=".repeat(60));
let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: chalk.bold.italic.bgBlue("please enter your sentence"),
});
let word_count = user_ans.words.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold.yellow("= sentence word:"));
console.log(word_count);
console.log(chalk.bold.red(`\n - words count: ${chalk.italic.yellowBright(word_count.length)})`));
console.log("=".repeat(60));
