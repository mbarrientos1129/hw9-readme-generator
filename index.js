// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Credits',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'License',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contrubuting',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'questions',
    }
];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((promptData) => {
            fs.writeFileSync("newReadMe.md", generateMarkdown(promptData));
        })
}

// Function call to initialize app
init();
