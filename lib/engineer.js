const Employee = require("./employee");

class Engineer extends Employee{
  constructor(name, id, email, git){
    super(name, id, email);
    this.git = git;
    this.role = "engineer";
  }
}

module.exports = Engineer;