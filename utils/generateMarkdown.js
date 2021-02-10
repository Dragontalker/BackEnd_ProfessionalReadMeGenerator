// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "MPL-2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  } else {
    return "";
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
  } else if (license === "MPL-2.0") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "";
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
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [Contribution](#Contribution)
  * [Test](#Test)
  
  ## Installation
  In console, type: "${data.installation}" to install the required modules.

  ## Usage
  In console, type: "${data.usage}" to initiate the application.

  ## Credits
  Author: ${data.userName}, visit GitHub Page at https://github.com/${data.userGit}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}
  
`;
}

module.exports = generateMarkdown;
