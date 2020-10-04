const Manager = require('../lib/Manager');

test("Can set office number", () => {
    const testOffice = 87;
    
    const manager = new Manager("Foo", 1, "email@email.com", testOffice);
    expect(manager.officeNumber).toBe(testOffice)
});

test("getRole() should return Manager", () => {
    const mRole = 'Manager';
    const manager = new Manager("Foo", 1, "email@email.com", 87)
    expect(manager.getRole()).toBe(mRole);
});

test("Can get office number", () => {
    const testOffice = 87;
    const manager = new Manager("Foo", 1, "email@email.com", testOffice)
    expect(manager.getOfficeNumber()).toBe(testOffice);
})