const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


const userInput = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "Please enter your name: "
        },
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your project: "
        },
        {
            type: "input",
            name: "description",
            message: "Please enter the description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter the instructions for installation (ie. npm install): "
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter the usage information (ie: node index.js): "
        },
        {
            type: "input",
            name: "contribution",
            message: "Please enter the contribution guidelines: "
        },
        {
            type: "input",
            name: "test",
            message: "Please enter the test instructions: "
        },
        {
            type: "list",
            name: "license",
            message: "Please select the license used for this project: ",
            choices: [
                "Apache-2.0",
                "ISC",
                "MIT",
                "MPL-2.0",
            ],
        },
        {
            type: "input",
            name: "userGit",
            message: "Please enter your GitHub user name: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your E-mail address: "
        },
    ]);
};

const init = () => {
    userInput()
      .then((answers) => writeFileAsync('./results/README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created your professional README file!'))
      .catch((err) => console.error(err));
};

init();
