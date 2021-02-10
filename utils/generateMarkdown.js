// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "Apache-2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  return `${badge}(${link})`;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Badges](#Badges)
  * [Features](#Features)
  * [Contributing](#Contributing)
  * [Test](#Test)
  
  ## Installation
  In console, type: "${data.installation}" to install the required modules.

  ## Usage
  ${data.usage}

  ## Credits
  Author: ${data.userName}, visit GitHub Page at https://github.com/${data.userGit}

  ## Badges
  ${renderLicenseSection("Apache-2.0")}
  ${renderLicenseSection("ISC")}
  ${renderLicenseSection("MIT")}
`;
}

module.exports = generateMarkdown;
