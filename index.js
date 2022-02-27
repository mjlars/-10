const promptManagerQuestions = require('./lib/managerQuestions')
const tOE = require('./lib/employeeQuestions')
const { generateBodyHTML, writeHTML } = require('./lib/HTMLGenerator')

promptManagerQuestions()
.then(tOE)
.then(generateBodyHTML)
.then(writeHTML);