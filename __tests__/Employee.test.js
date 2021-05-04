
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("Can create a new Employee object", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net", "manager");
    expect(typeof(newEmployee)).toBe('object')
})

test("Can add a new name to Employee object", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net", "manager");
    expect(newEmployee.name).toBe("tim");
});


test("Can get name using getName() method", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net", "manager");

    expect(newEmployee.getName()).toBe("tim");
});

test("Can get emplyee ID using getId() method", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net","manager");

    expect(newEmployee.getId()).toBe(5);
});

test("Can get email using getEmail() method", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net","manager");

    expect(newEmployee.getEmail()).toBe("tim@company.net");
});

test("Can get employee role using getRole() method", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net","manager");

    expect(newEmployee.getRole()).toBe("Employee");
});