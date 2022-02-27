const inquirer = require('inquirer');
const {Employee, Manager} = require('./Classes')

const promptManagerQuestions = () => {
    let employees = []
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager Name (required)',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter the name of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Enter the ID of the team manager (required)',
            validate: ID => {
                if (ID) {
                    return true;
                } else {
                    console.log('Please enter the ID of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of the team manager',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email of the team manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number of the team manager',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter the ID of the team manager!');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        manager = new Manager(answers)
        employees.push(manager)
        return employees
    })
}

module.exports = promptManagerQuestions
