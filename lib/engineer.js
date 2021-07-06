const Employee = require("./employee");

class Engineer extends Employee{
  constructor(name, id, email, role, git){
    super(name, id, email);
    this.role = role;
    this.git = git;
  }
}

module.exports = Engineer;