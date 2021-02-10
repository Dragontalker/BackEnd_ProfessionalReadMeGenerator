// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Creating writeFile function using promises instead of a callback function.
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [];

const userInput = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
    ]);
};

// TODO: Create a function to initialize app
const init = () => {
    userInput()
      .then((answers) => writeFileAsync('./results/result.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created your professional README file!'))
      .catch((err) => console.error(err));
};

// Function call to initialize app
init();
