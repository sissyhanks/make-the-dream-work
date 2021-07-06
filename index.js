const fs = require( "fs" );
const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let myTeamArray = [];


const employeeQuestions = [
  {
    type: 'input',
    message: 'Please enter your name',
    name: 'employeeName',
  },
  {
    type: 'input',
    message: 'Please enter your ID number',
    name: 'employeeIdn',        
  },
  {
    type: 'input',
    message: 'please enter your email',
    name: 'employeeEmail',        
  },
  {
    type: 'input',
    message: 'Please enter your office number',
    name: 'employeeExtention',        
  },
  {
    type: 'list',
    message: 'Would you like to add a member to your team?',
    name: 'moveOn',  
    choices: ["Add Intern", "Add Engineer", "finish team setup"],      
  },
];

// go to write HTML

function init() {
  inquirer.prompt(employeeQuestions)
  .then(function(response){
    const reply = response;
    console.log(reply);
  })
}

init();