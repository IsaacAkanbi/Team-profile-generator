const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("Can create a new Engineer object", () => {
    const newEmployee = new Engineer("tim", 5, "tim@company.net", 0);
    expect(typeof(newEmployee)).toBe('object')
})

test("Can get Engineer using getRole() method", () => {
    const newEmployee = new Engineer("tim", 5, "tim@company.net", 0);

    expect(newEmployee.getRole()).toBe("Engineer");
});