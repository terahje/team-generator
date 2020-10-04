const Employee = require('../lib/Employee');

//jest.mock('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Terahje', '#87', 'email@gmail.com');

    expect(employee.name).toBe(employee.name);
    expect(employee.id).toBe(employee.id);
    expect(employee.email).toBe(employee.email);
    
});

test("gets employee's name", () => {
    const employee = new Employee('Terahje');

    expect(employee.getName()).toBe(employee.name);
});

test("gets employee's ID", () => {
    const employee = new Employee('Terahje');

    expect(employee.getId()).toBe(employee.id);
});

test("gets employee's email", () => {
    const employee = new Employee('Terahje');

    expect(employee.getEmail()).toBe(employee.email);
});


test("gets role", () => {
    const eRole = 'Employee';
    const employee = new Employee('Terahje');
    

    expect(employee.getRole()).toBe(eRole);
});

