const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("Can create a new Engineer object", () => {
    const newEmployee = new Engineer("tim", 5, "tim@company.net");
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