const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


const userInput = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
    ]);
};

const init = () => {
    userInput()
      .then((answers) => writeFileAsync('./results/result.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created your professional README file!'))
      .catch((err) => console.error(err));
};

init();
