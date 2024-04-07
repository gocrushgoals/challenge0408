// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: InputPrompt } = require('inquirer/lib/prompts/input');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your README?',
            
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter description of your project?',
      
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Explain how to install the application',
      
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Describe how you can use this application',
      
    },    
    {
      type: 'input',
      name: 'contribute',
      message: 'Please provide guidelines for contributing.',
 
    },
    {
      type: 'list',
      message: 'Select a license for this project?',
      name: 'license',
      choices: [
        'GNU AGPLv3', 
        'GNU GPLv3', 
        'GNULGPLv3',
        'Apache 2.0',
        'Boost Software 1.0',
        'MIT',
        'Mozilla',
        "Other listed in the repository"
      ],
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter any tests and/or test instructions for your application',
      
    },
    {
      type: 'input',
      name: 'Username',
      message: 'What is your GitHub username?',
      
    },
    {
      type: 'input',
      name: 'email',
      message: '(required) What is your email address?',
      validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
      }
    },
  ]

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if(err) throw err;
    console.log('Writing the README.md file is complete. Have a look at it!');
  });
}

// TODO: Create a function to initialize app

function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()

.then(userAnswers => {

  return generateMarkdown(userAnswers);
})
.then(markdownContent => {
writeToFile(`C:\Users\krist\OneDrive\Documents\GitHub\challenge0408\Develop\generatereadme.md`, markdownContent);
})
.catch(err => {
  console.log('The error is: ', err);
});