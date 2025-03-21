#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Function to display the timer
const displayTimer = function (timeLeft) {
    // Clear the previous line
    process.stdout.clearLine(0);
    // Move the cursor to the beginning of the line
    process.stdout.cursorTo(0);
    // Display the timer
    process.stdout.write(chalk.blue.bold(`\t   Time Left: ${timeLeft}s`));
};
// Function to start the countdown timer
const startTimer = function (duration) {
    let timeLeft = duration;
    // Display the countdown timer
    console.log(chalk.bold("-".repeat(40)));
    console.log(chalk.yellow.bold("\tCountdown Timer Started"));
    console.log(chalk.bold("-".repeat(40)));
    // Display the timer
    displayTimer(timeLeft);
    // Start the countdown timer
    const timerInterval = setInterval(function () {
        timeLeft--;
        // Update the timer display
        displayTimer(timeLeft);
        // Stop the timer when the time is up
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            console.log('\n' + chalk.green.bold(`\n\t    Time is up!`));
            console.log(chalk.bold("-".repeat(40)));
            ``;
        }
    }, 1000);
};
// Main function to prompt the user and start the timer
const main = async function () {
    // Prompt the user to enter the duration of the countdown timer
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'duration',
            message: 'Enter the duration of the countdown timer (in seconds):',
            // Validate the user input
            validate: function (value) {
                // Parse the input value to an integer
                const duration = parseInt(value);
                // Check if the input is a valid positive number
                return !isNaN(duration) && duration > 0 ? true : 'Please enter a valid positive number.';
            }
        }
    ]);
    // Parse the duration entered by the user
    const duration = parseInt(answers.duration);
    // Start the countdown timer
    startTimer(duration);
};
// Call the main function to start the program
main();
