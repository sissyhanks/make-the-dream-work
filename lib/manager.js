const Employee = require("./employee");

class Manager extends Employee{
  constructor(name, id, email, roll, officeNumber){
    super(name, id, email, roll);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;