// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# Project: ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Credits](#Credits)
  [License](#License)
  [Badges](#Badges)
  [Features](#Features)
  [Contributing](#Contributing)
  [Test](#Test)

  ## GitHub URL
  https://github.com/${data.userName}
`;
}

module.exports = generateMarkdown;
