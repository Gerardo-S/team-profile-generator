const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function initManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your Manager's office number?"
        },
        {
            type: "list",
            message: "Which typeof team member would you like to add?",
            name: "teamMember",
            choices: [
                "Engineer",
                "Intern",
                "I do not want to add any more team members."
                
            ]
        }

    ]).then(function(managerInput){
        console.log(managerInput);
        const manager = new Manager(managerInput.name,managerInput.id,managerInput.email,managerInput.officeNumber);
        console.log(manager);
        if (managerInput.teamMember == "Engineer"){
            addEngineer();
        }
        else if(managerInput.teamMember == "Intern"){
            addIntern();

        }
        else{
            render(manager);
        }
    });
};
initManager();

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Engineer's Github username?"
        },
        {
            type: "list",
            message: "Which typeof team member would you like to add?",
            name: "teamMember",
            choices: [
                "Engineer",
                "Intern",
                "I do not want to add any more team members."
            ]
        }

    ]).then(function(engineerInfo){
        console.log(engineerInfo);

        if (engineerInfo.teamMember == "Engineer"){
            addEngineer();
        }
        else if(engineerInfo.teamMember == "Intern"){
            addIntern();

        }
        else{
            render();
        }
    });
};

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your Intern's school?"
        },
        {
            type: "list",
            message: "Which typeof team member would you like to add?",
            name: "teamMember",
            choices: [
                "Engineer",
                "Intern",
                "I do not want to add any more team members."
            ]
        }

    ]).then(function(internInfo){
        console.log(internInfo);

        if (internInfo.teamMember == "Engineer"){
            addEngineer();
        }
        else if(internInfo.teamMember == "Intern"){
            addIntern();

        }
        else{
            render();
        }
    });
};
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
