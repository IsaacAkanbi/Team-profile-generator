const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Manager');

test("Can create a new Manager object", () => {
    const newEmployee = new Manager("tim", 5, "tim@company.net", 0);
    expect(typeof(newEmployee)).toBe('object')
})

test("Can get Manager using getRole() method", () => {
    const newEmployee = new Manager("tim", 5, "tim@company.net", 0);

    expect(newEmployee.getRole()).toBe("Manager");
});