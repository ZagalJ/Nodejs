const inquirer = require('inquirer');
const fs = require('fs');


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