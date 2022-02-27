//parent class employee that intern and engineer will inherit functions from
class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'employee';
    }
}

class Manager extends Employee {
    constructor(answers) {
        let [name, ID, email, officeNumber] = [answers.name, answers.ID, answers.email, answers.officeNumber]
        super(name, ID, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'manager';
    }
}

class Engineer extends Employee {
    constructor(answers) {
        let [name, ID, email, github] = [answers.name, answers.ID, answers.email, answers.github]
        super(name, ID, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'engineer';
    }
}

class Intern extends Employee {
    constructor(answers) {
        let [name, ID, email, school] = [answers.name, answers.ID, answers.email, answers.school]
        super(name, ID, email)
        this.school = school
    }
    getRole() {
        return 'intern';
    }
}

module.exports = {Manager, Engineer, Intern, Employee}