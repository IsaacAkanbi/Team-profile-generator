
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("Can create a new Employee object", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net");
    expect(typeof(newEmployee)).toBe('object')
})

test("Can add a new name to Employee object", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net");
    expect(newEmployee.name).toBe("tim");
});


test("Can get name using getName() method", () => {
    const newEmployee = new Employee("tim", 5, "tim@company.net");

    expect(newEmployee.getName()).toBe("tim");
});