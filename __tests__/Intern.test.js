const Intern = require('../lib/Intern');

test("Can set school", () => {
    const testSchool = "U of A";
    
    const intern = new Intern("Foo", 1, "email@email.com", testSchool);
    expect(intern.school).toBe(testSchool)
});

test("getRole() should return Intern", () => {
    const iRole = 'Intern';
    const intern = new Intern("Foo", 1, "email@email.com", "U of A")
    expect(intern.getRole()).toBe(iRole);
});

test("Can get School", () => {
    const testSchool = "U of A";
    const intern = new Intern("Foo", 1, "email@email.com", testSchool)
    expect(intern.getSchool()).toBe(testSchool);
})