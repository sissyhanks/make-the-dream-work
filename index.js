const fs = require( "fs" );
const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let myTeamArray = [];

const startQuestion = [
  {
    type: 'list',
    message: 'Are you the team manager?',
    name: 'dataEnter',
    choices: ['yes', 'no'],
  },
]

const managerStart = [
  {
    type: 'list',
    message: ' "Never doubt that a small group of thoughtful, concerned citizens can change the world. \nIndeed it is the only thing that ever has." \n--Margaret Mead \n\nTo build a contact page for your small group of thoughtful, concerned citizens, provide the following information for each member of your team. ',
    name: 'isManager',
    choices: ['Start by entering your information to the following prompts. Press return to begin.'],
  },
]

const otherStart = [
  {
    type: 'list',
    message:  ' "I always did something I was a little not ready to do. \nI think that\'s how you grow. \nWhen there\'s that moment of \n"Wow, I\'m not really sure I can do this," \nand you push through those moments, that\'s when you have a breakthrough." \n— Marissa Mayer \n\nWe designed this program for managerial use, but never fear; you can use it too. \nWe believe in you! \nTo build a team contact page, provide the following prompts, first for the manager and then for each team member. ',
    name: 'isOther',
    choices: ['Start by filling out the following prompts with the the manager\'s information. press return to begin.']
  },
]


const employeeQuestions = [
  {
    type: 'input',
    message: 'name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'ID number',
    name: 'id',        
  },
  {
    type: 'input',
    message: 'email',
    name: 'email',        
  },
];

const managerQuestions = [
  {
    type: 'input',
    message: 'Please enter your office number.',
    name: 'officeNumber',
  },
]

const internQuestions = [
  {
    type: 'input',
    message: 'What school does this intern attend?',
    name: 'internSchool',
  }
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is this engineer\'s gitHub ID',
    name: 'git',
  }
]

const menu = [
  {
    type: 'list',
    message: 'Would you like to add a member to your team?',
    name: 'moveOn',  
    choices: ["Add Intern", "Add Engineer", "finish team setup"],      
  },
]

// go to write HTML



function init() {
  inquirer.prompt(startQuestion)
  .then(function(response){
    switch (response.dataEnter){
      case "yes":
        inquirer.prompt(managerStart)
        .then(function(response){
          manager();
        });
        break;
      case "no":
        inquirer.prompt(otherStart)
        .then(function(response){
          manager();
        });
    }
  });
}


function manager() {
   
      inquirer.prompt(employeeQuestions)
      .then(function(response){
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const employee = new Employee(name, id, email);
        console.log(employee);
        inquirer.prompt(managerQuestions)
        .then(function(response){
          const officeNumber = response.officeNumber;
          const manager = new Manager(employee, "manager", response.officeNumber);
          console.log(manager);
        })
      });
    
  }

init();

