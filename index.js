// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
console.log("** Start of New Homework **")

const questions = [
    {
        type:"input",
        message:"What's the name of your project? ",
        name:"title"
    },
    {
        type:"input",
        message:"Provide a short description of your code. ",
        name:"description"
    },
    {
        type:"confirm",
        message:"Would you like to have an table of contents? ",
        name:"index"
    },
    {
        type:"input",
        message:"Please add installation instructions: ",
        name:"installation"
    },
    {
        type:"input",
        message:"Please add usage instructions: ",
        name:"usage"
    },
    {
        type: 'rawlist',
        message: 'Which open source license would you like to use? ',
        name: 'license',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },
    
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('success')
    );
}

// TODO: Create a function to initialize app

function init() {
inquirer
    .prompt(questions)
    .then(function(data){            
          fs.writeFile("README.md", JSON.stringify(data), function(err) {
            if (err) {
              throw err;
            };
            console.log("New README file created with success!");
          });
        });

}

// Function call to initialize app
init();
