const Employee =require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
