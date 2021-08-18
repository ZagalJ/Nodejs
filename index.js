// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
console.log("** Start of New Homework **")

inquirer
    .prompt([
        {
            type:"input",
            message:"What's the name of your project?",
            name:"title"
        },
        {
            type:"input",
            message:"Provide a short explanation of your code. ",
            name:"explanation"
        },
        {
            type:"confirm",
            message:"Would you like to have an table of contents?",
            name:"index"
        }
    ])
    .then((response) => 
        console.log("Data saved. Wait for ReadMe File")
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();





