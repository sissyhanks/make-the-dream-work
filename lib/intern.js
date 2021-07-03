const Employee = require("./employee");

class Intern extends Employee{
  constructor(name, id, email, roll, school){
    super(name, id, email, roll);
    this.school = school;
  }
}

module.exports = Employee;