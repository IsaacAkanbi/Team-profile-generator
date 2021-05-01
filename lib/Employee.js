

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;


// var bob = new Employee("Bob", 56, "bob@company.net");
// bob.getRole()  // --> "Employee"
// console.log(bob.name)
// console.log(bob.getName())
//var sarah = new Employee();