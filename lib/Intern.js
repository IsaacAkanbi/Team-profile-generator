const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
