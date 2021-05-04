const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');


test("Can create a new Manager object", () => {
    const newEmployee = new Intern("tim", 5, "tim@company.net", 0, "university");
    expect(typeof(newEmployee)).toBe('object')
})

test("Can get Manager using getRole() method", () => {
    const newEmployee = new Intern("tim", 5, "tim@company.net", 0, "university");

    expect(newEmployee.getRole()).toBe("Intern");
});