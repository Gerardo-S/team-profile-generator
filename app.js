const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const arrayTeam = [];
initManager();

// manager prompt to add team members----------------------------------------------------------------------------
function initManager() {
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

    ]).then(function (managerInput) {
        const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber);
        arrayTeam.push(manager);
        if (managerInput.teamMember == "Engineer") {
            addEngineer();
        }
        else if (managerInput.teamMember == "Intern") {
            addIntern();

        } else {
            const Html = render(arrayTeam)
            writeToFile(Html);
        }

    });

};

// Manager section ends here --------------------------------------------------------------------------------------------

// If an Engineer is to be added to team information questions begin here------------------------------------------------
function addEngineer() {
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

    ]).then(function (engineerInfo) {
        const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
        arrayTeam.push(engineer);

        if (engineerInfo.teamMember == "Engineer") {
            addEngineer();
        }
        else if (engineerInfo.teamMember == "Intern") {
            addIntern();

        }
        else {
            const Html = render(arrayTeam)
            writeToFile(Html);
        }
    });
};
// Engineer section ends here--------------------------------------------------------------------------------------------

// If intern is chosen information questions are asked here--------------------------------------------------------------
function addIntern() {
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

    ]).then(function (internInfo) {
        const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
        arrayTeam.push(intern);

        if (internInfo.teamMember == "Engineer") {
            addEngineer();
        }
        else if (internInfo.teamMember == "Intern") {
            addIntern();

        }
        else {
            const Html = render(arrayTeam)
            writeToFile(Html);
        }
    });
};
// Intern section ends here -----------------------------------------------------------------------------------------------

// function to transfer Html string to a new file--------------------------------------------------------------------------
function writeToFile(Html){

    fs.writeFile(outputPath, Html, (err) => {
        if(err){
            console.log(err)
            return console.log(err);
        }
        console.log("success")
    });
};

