const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


const userInput = () => {
    return inquirer.prompt([
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
        message: "Please enter the commands for installing NPM modules (Ex. npm install): "
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter the usege of your project: "
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
        name: "userName",
        message: "Please enter contributor's name: "
      },
      {
        type: "input",
        name: "userGit",
        message: "Please enter contributor's GitHub user name: "
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
