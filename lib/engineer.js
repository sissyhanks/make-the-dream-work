const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email, roll, git){
        super(name, id, email, roll);
        this.git = git;
    }
}

module.exports = Engineer;