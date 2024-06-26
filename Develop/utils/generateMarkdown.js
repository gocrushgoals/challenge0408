//function to generate the markdown here
function generateMarkdown(data) {
  return `
# Project Title
${data.title}
${data.license}

# Description
${data.description}

# Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#installation)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#contact-information)
  
## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}
* As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added. 

## Contributing 
${data.contribute}

## Tests
${data.tests}

# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}

`;
}

//need to export the generateMarkdown function 
module.exports = generateMarkdown;

