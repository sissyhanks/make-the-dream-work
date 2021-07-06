const Employee = require("./employee");

class Engineer extends Employee{
  constructor(name, id, email, role, git){
    super(name, id, email, role);
    this.git = git;
  }
}

module.exports = Engineer;