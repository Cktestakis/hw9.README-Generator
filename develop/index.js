// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    // First Question
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
     // 
     {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install this project?",
    },

    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use of this project:"
    }
    // 
    {
        type: 'input',
        name: 'title',
        message: "What's your GitHub User Name?",
    },
    //  
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
        validate: function (value) {
            let pass = value.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address!";
        },
    },
    // Project name
    {
        type: 'input',
        name: 'project name',
        message: "What is the name of your project?",
    },
    // Description of Project
    {
        type:'input',
        name: 'description',
        message: "Please write a short description of your project?",
    },
    // License for Project
    {
        type: 'list',
        message: "Choose a license for your project",
        choices: ['MIT', 'APACHE 2,0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) => {
        err ? console.log(err) : console.log("Success");
    });
};

// TODO: Create a function to initialize app
function init() {
    const output = './output';
    if((fs.existsSync(output)) !==true) {
        fs.mkdirSync(output);
    }
    questions().then(data => {
        writeToFile(output + "/README.md", generateMarkdown(data));
    })
};

function questions() {
    return inquirer.prompt(userInput);
};

// Function call to initialize app
init();
