const { TestResult } = require('@jest/types');
const Engineer = require('../lib/Engineer');

test("Can set Github", () => {
    const testGit = "GithubName";
    
    const engineer = new Engineer("Foo", 1, "email@email.com", testGit);
    expect(engineer.github).toBe(testGit)
});

test("getRole() should return Engineer", () => {
    const eRole = 'Engineer';
    const engineer = new Engineer("Foo", 1, "email@email.com", "GithubName")
    expect(engineer.getRole()).toBe(eRole);
});

test("Can get GitHub username", () => {
    const testGit = "GithubName";
    const engineer = new Engineer("Foo", 1, "email@email.com", testGit)
    expect(engineer.getGithub()).toBe(testGit);
});