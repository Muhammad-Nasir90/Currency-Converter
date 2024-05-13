#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright(`\n\tWellcome to Currency Converter 😊\n\t`));
const currency = {
    USD: 1,
    EUR: 0.92,
    INR: 83.3,
    BAN: 109.6,
    PKR: 277.54,
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: chalk.yellow("enter from currency"),
        type: "list",
        choices: ["USD", "EUR", "INR", "BAN", "PKR"],
    },
    {
        name: "to",
        message: chalk.yellow("enter to currency"),
        type: "list",
        choices: ["USD", "EUR", "INR", "BAN", "PKR"],
    },
    {
        name: "amount",
        message: chalk.yellowBright.bold("enter your amount"),
        type: "number",
    },
]);
let fromAmount = currency[userAns.from]; // usd : 1
let toAmount = currency[userAns.to]; // pkr : 277.54
let amount = userAns.amount; // 50
let baseAmount = amount / fromAmount; // amount = 50 / 1= 50 
let convertedAmount = baseAmount * toAmount; //convertedAmount = 50 * 277.54
console.log(`your amount is :${chalk.green.bold(convertedAmount.toFixed(2))}`); //convertedAmount = 13877
