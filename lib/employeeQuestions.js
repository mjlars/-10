const inquirer = require('inquirer');
const {Engineer, Intern} = require('./Classes');
const { generateBodyHTML } = require('./HTMLGenerator');

const tOE = (employees) => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'addEType',
            Message: 'Select Role of Employee',
            choices: [
                'engineer',
                'intern',
                'finished',
            ]
        }
    )
    .then(tOE => {
        if(tOE.addEType === 'engineer') {
           return EngineerQuestion(employees);
        } else if(tOE.addEType === 'intern') {
           return InternQuestions(employees);
        } else {
          return employees
        }
    })

}

//engineer questions
const EngineerQuestion = (employees) => {
    if (!employees.engineers) {
        employees.engineers =[]
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer Name (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a name for the engineer!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'ID',
            message: 'Engineer ID Number (Required)',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Engineer email address (Required)',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Engineer Github name',
          },
          {
            type: 'confirm',
            name: 'confirmAddEngineer',
            message: 'Would you like to enter another engineer?',
            default: false
          }
    ])
    .then(engineerAnswers => {
      engineer = new Engineer(engineerAnswers)
      employees.engineers.push(engineer)
      if (engineerAnswers.confirmAddEngineer) {
        return EngineerQuestion(employees)
    } else {
        return tOE(employees);
    }
  })
}

const InternQuestions = (employees) => {
    if (!employees.interns) {
        employees.interns = []
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern Name',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('You need to enter a name for the intern!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'ID',
            message: 'Intern ID Number',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Intern email address',
          },
          {
            type: 'input',
            name: 'school',
            message: 'Intern School',
          },
          {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Would you like to enter another intern?',
            default: false
          }
    ])
    .then(internAnswers => {
      intern = new Intern(internAnswers)
      employees.interns.push(intern)
      if (internAnswers.confirmAddIntern) {
          return InternQuestions(employees)
      } else {
          return tOE(employees);
      }
    })
}

module.exports = tOE