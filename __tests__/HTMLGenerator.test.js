const { expect } = require('@jest/globals');
const {generateManagerHTML, generateEngineerHTML, generateInternHTML } = require('../lib/HTMLGenerator');

test('a div is created for manager information', () => {
    const managerObject = 
    {
        name: 'Matt',
        ID: '42069',
        email: 'maflarson@gmail.com',
        officeNumber: '123456'
    };
    const result = generateManagerHTML(managerObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Manager: Matt</h5>
                <p class="card-text">Employee ID: 42069</p>
                <a href="mailto:maflarson@gmail.com">Email: maflarson@gmail.com</a>
                <p class="card-text">Office Number: 123456</p>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});

test('a div is created for engineer information', () => {
    const engineerObject = 
    {
        name: 'jake',
        ID: '456456',
        email: 'test@gmail.com',
        github: 'testing'
    };
    const result = generateEngineerHTML(engineerObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer: jake</h5>
                <p class="card-text">Employee ID: 456456</p>
                <a href="mailto:test@gmail.com">Email: test@gmail.com</a>
                <a href="https://github.com/testing">testing</a>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});

test('a div is created for intern information', () => {
    const internObject = 
    {
        name: 'jake',
        ID: '456456',
        email: 'test@gmail.com',
        school: 'Yale'
    };
    const result = generateInternHTML(internObject);
    const expected =
    `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Intern: jake</h5>
                <p class="card-text">Employee ID: 456456</p>
                <a href="mailto:test@gmail.com">Email: test@gmail.com</a>
                <p class="card-text">University: Yale</p>
            </div>
        </div>
    `
    expect(result).toEqual(expected);
});