const Employee = require("./employee");

class Manager extends Employee{
  constructor(name, id, email, role, officeNumber){
    super(name, id, email);
    this.role = role;
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;