const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

/*
var bob = new Manager("Bob", 56, "bob@company.net");
bob.getRole()  //--> "Manager"
*/