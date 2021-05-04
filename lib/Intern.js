const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber, schoolName) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.schoolName = schoolName;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
