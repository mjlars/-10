const fs = require ('fs')

//function for generating manager HTML
function generateManagerHTML (manager) {
    return `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Manager: ${manager.name}</h2>
                <p class="card-text">Employee ID: ${manager.ID}</p>
                <a href="mailto:${manager.email}">Email: ${manager.email}</a>
                <p class="card-text">Office Number: ${manager.officeNumber}</p>
                </div>
        </div>
    `
}

//function is called looping over an array containing objects for each engineer
function generateEngineerHTML (engineer) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer: ${engineer.name}</h5>
                <p class="card-text">Employee ID: ${engineer.ID}</p>
                <a href="mailto:${engineer.email}">Email: ${engineer.email}</a>
                <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Engineer: ${engineer.name}</h2>
                <p class="card-text">Employee ID: ${engineer.ID}</p>
                <a href="mailto:${engineer.email}">Email: ${engineer.email}</a>
                <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </div>
        </div>
    `
}

function generateInternHTML (intern) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Intern: ${intern.name}</h5>
                <p class="card-text">Employee ID: ${intern.ID}</p>
                <a href="mailto:${intern.email}">Email: ${intern.email}</a>
                <p class="card-text">University: ${intern.school}</p>
            </div>
        </div>
    `
}

function generateBodyHTML (employees){
    let engineersHTML = []
    let internsHTML = []
    let managerHTML = generateManagerHTML(manager);
    managerHTML = managerHTML.toString();
    if(employees.engineers) {
        for (i=0; i<employees.engineers.length; i++) {
            engineersHTML.push(generateEngineerHTML(employees.engineers[i]));
        }
        engineersHTML = engineersHTML.toString();
    }
    if(employees.interns) {
        for (i=0; i<employees.interns.length; i++) {
            internsHTML.push(generateInternHTML(employees.interns[i]));
        }
        internsHTML = internsHTML.toString();
    }
    let bodyHTML = 
    `
${managerHTML}
${engineersHTML}
${internsHTML}
    `;
    return bodyHTML;
}

//writes HTML to an html document
function writeHTML (bodyHTML){
    fs.writeFile(
    './dist/team.html', 
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
        main {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 80vw;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
        }
        header {
            width: 100vw;
            text-align: center;
            font-size: 2rem;
            margin-bottom: 2rem;
        }
        header h1 {
            font-size: 2rem;
            padding: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        ${bodyHTML}
    </main>
</body>
</html>
    `,
    err => {
        if (err) {
            console.error(err)
            return
        }
    })
}
//export functions for use in the app but also for use in tests
module.exports = { generateManagerHTML, generateInternHTML, generateEngineerHTML, generateBodyHTML, writeHTML }