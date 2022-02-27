const { expect } = require('@jest/globals');
const { Intern, Engineer } = require('../lib/Classes');

test('Engineer class returns an object with properties', () => {
    const mockEngineerAnswers = {
        name: "Matt",
        ID: "42069",
        email: "maflarson@gmail.com",
        github: "mjlars",
    }
    const engineerObject = new Engineer(mockEngineerAnswers)
    expect(engineerObject.name).toEqual("Matt");
    expect(engineerObject.ID).toEqual("42069");
    expect(engineerObject.email).toEqual("maflarson@gmail.com")
    expect(engineerObject.github).toEqual("mjlars")
});

test('intern class returns an object with properties', () => {
    const mockInternAnswers = {
        name: "Jake",
        ID: "123123",
        email: "test@gmail.com",
        school: "Yale",
    }
    const internObject = new Intern(mockInternAnswers)
    expect(internObject.name).toEqual("Jake");
    expect(internObject.ID).toEqual("123123");
    expect(internObject.email).toEqual("test@gmail.com")
    expect(internObject.school).toEqual("Yale")
});