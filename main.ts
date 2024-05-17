#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"; // Importing chalk for color output

// USER INPUT
let userInput = await inquirer.prompt({
    name: "num1",
    message: "Please enter your number",
    type: "number",
    validate: (input) => {
        const num2 = parseInt(input); // Parsing the input to an integer
        if (isNaN(num2)) { // Checking if the input is a valid number
            return "Please enter a numeric value"; // Error message for invalid input
        } else {
            return true; // Valid input
        }
    }
});

// USER INPUT VALUES
let usrNum: number = userInput.num1; // Storing the user's input number

// LOGIC FOR TABLE
for (let i: number = 1; i <= 10; i++) { // Loop from 1 to 10
    let result: number = usrNum * i; // Calculating the product
    console.log(chalk.yellow(`${usrNum} x ${i} = ${result}`)); // Printing the result in green color
}
