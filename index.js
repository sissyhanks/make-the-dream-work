const fs = require( "fs" );
const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let myTeamArray = [];

// opening question and welcome text / app directions
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

//questions that correspond to general employee object
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

//questions to round out specific employee types
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

// starts inquirer questions, detects if person entering info is manager or not and then moves on to employee info
function init() {
  inquirer.prompt(startQuestion)
  .then(function(response){
    switch (response.dataEnter){
      case "yes":
        inquirer.prompt(managerStart)
        .then(function(response){
          employee();
        });
        break;
      case "no":
        inquirer.prompt(otherStart)
        .then(function(response){
          employee();
        });
    }
  });
}

//asks employee inquirer and uses info to create employee object, then asks manager question and creates manager object & pushes it to myTeam array

function employee() {
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
        const manager = new Manager(employee.name, employee.id, employee.email, officeNumber);
        myTeamArray.push(manager);
        console.log(myTeamArray);
        teamFill();
        
      });
  });
}

//function takes info from menu question and either builds intern or engineer objects or moves on to write HTML if finished with input
function teamFill() {
  inquirer.prompt(menu)
  .then(function(response){
    switch (response.moveOn){
      case "Add Intern":
        intern();
        break;
      case "Add Engineer":
        engineer();
        break;
      case "finish team setup":
        makeMembers();
    }
  });
}

//functions taking in intern & engineer info, build objects that are added to myTeamArray and then move back to menu question (build another employee or finish)
function intern() {
    
  inquirer.prompt(employeeQuestions)
  .then(function(response){
    const name = response.name;
    const id = response.id;
    const email = response.email;
    const employee = new Employee(name, id, email);
    console.log(employee);
    inquirer.prompt(internQuestions)
      .then(function(response){
        const school = response.internSchool;
        const intern = new Intern(employee.name, employee.id, employee.email, school);
        myTeamArray.push(intern);
        console.log(myTeamArray);
        teamFill();
        })
        
      });
  }

function engineer() {
    
  inquirer.prompt(employeeQuestions)
  .then(function(response){
    const name = response.name;
    const id = response.id;
    const email = response.email;
    const employee = new Employee(name, id, email);
    console.log(employee);
    inquirer.prompt(engineerQuestions)
      .then(function(response){
        const git = response.git;
        const intern = new Engineer(employee.name, employee.id, employee.email, git);
        myTeamArray.push(intern);
        console.log(myTeamArray);
        teamFill();
        })
        
      });
  }

// function created different blocks of HTML depending on employee role, inserts those blocks into HTML body and then writes to file

function makeMembers(){
  let members = [];
  myTeamArray.forEach(function(mem) {
    if (mem.role === "manager") {
      members.push(`
        <div class="col-4 mb-2">
          <div class="card">
            <div class="card-header" style="color: white; background-color: #5da271;">
              <h5>${mem.name}</h5>
              <h6><i class="fas fa-coffee"></i></i> <span>${mem.role}</span> </h6>
            </div>
          <div class="card-body" style="color: #241623; background-color: #f9f1f2;">
            <ul class="list-group" style="color: #241623;">
              <li class="list-group-item" ><a href="mailto:${mem.email}" class="text-decoration-none" style="color: #3087D9;">${mem.email}</a></li>
              <li class="list-group-item" style="color: #241623;">employee id ${mem.id}</li>
              <li class="list-group-item" style="color: #241623;">office number ${mem.officeNumber}</li>
            </ul>
          </div>
        </div>
        </div>
      `);
    } if (mem.role === "intern") {
      members.push(`
        <div class="col-4 mb-2">
          <div class="card">
            <div class="card-header" style="color: white; background-color: #5da271;">
              <h5>${mem.name}</h5>
              <h6><i class="fas fa-user-graduate"></i> <span>${mem.role}</span> </h6>
            </div>
          <div class="card-body" style="color: #241623; background-color: #f9f1f2;">
            <ul class="list-group" style="color: #241623;">
              <li class="list-group-item" ><a href="mailto:${mem.email}" class="text-decoration-none" style="color: #3087D9;">${mem.email}</a></li>
              <li class="list-group-item" style="color: #241623;">employee id ${mem.id}</li>
              <li class="list-group-item" style="color: #241623;">school ${mem.school}</li>
            </ul>
          </div>
        </div>
        </div>
      `);
    } if (mem.role === "engineer") {
      members.push(`
        <div class="col-4 mb-2">
          <div class="card">
            <div class="card-header" style="color: white; background-color: #5da271;">
              <h5>${mem.name}</h5>
              <h6><i class="fas fa-glasses"></i> <span>${mem.role}</span> </h6>
            </div>
          <div class="card-body" style="color: #241623; background-color: #f9f1f2;">
            <ul class="list-group" style="color: #241623;">
              <li class="list-group-item" ><a href="mailto:${mem.email}" class="text-decoration-none" style="color: #3087D9;">${mem.email}</a></li>
              <li class="list-group-item" style="color: #241623;">employee id ${mem.id}</li>
              <li class="list-group-item" ><a href="https://github.com/${mem.git}" class="text-decoration-none" style="color: #3087D9;">GitHub Profile</a></li>
            </ul>
          
        </div>
        </div>
      </div>`);
    }
    let html =  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="d-flex align-items-center justify-content-center" style="margin-bottom: 4em; height: 8em; width: 100%; background-color:#c84630">
      <div class="row">
        <h4 class="col" style="color: white;"> My Team</div>
      </div>
    </div>

<div class="container">
<div class="row d-flex justify-content-center">
${members.join('')}
</div>
</div>
  </body>
</html>`;
fs.writeFile("./dist/myTeam.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("file written");
    return ;
  });
}

//starts the program
init();