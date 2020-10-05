const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Use inquirer to collect information about team members

const employees = [];

createTeam();

function createTeam() {
    // Prompt #1
    console.log("Please build your team")

    inquirer.prompt([
        // Manager questions
        {
            type: "input",
            name: "name",
            message: "What is your manager's name? (Required)",
            default: "Manager's Name",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name");
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's ID? (Required)",
            default: "Manager's ID Number",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter your Mananger's ID");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email? (Required)",
            default: "manager@email.com",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's email");
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's Office Number? (Required)",
            default: "Manager's Office Number",
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's Office Number");
                }

            }
        }

    ])

    .then(function (managerAnswers) {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        employees.push(manager);

        // Inquirer Prompt #2
        teamPrompt()

        function teamPrompt() {
            inquirer.prompt([
                // Select your team member 
                {
                    type: "list",
                    message: "Which type of team member would you like to add?",
                    name: "employee",
                    choices: [
                        "Engineer",
                        "Intern",
                        "No more team members"
                    ]
                }
            ])

            .then(function(userInput) {
                if(userInput.employee === "Engineer") {

                    // Inquirer Prompt #3
                    engineerPrompt()

                    function engineerPrompt() {
                        inquirer.prompt([{
                            // Engineer questions
                            type: "input",
                            name: "name",
                            message: "What is your engineer's name? (Required)",
                            default: "Engineer's Name",
                            validate: nameInput => {
                                if(nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name");
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "What is your engineer's id? (Required)",
                            default: "Engineer's ID Number",
                            validate: idInput => {
                                if(idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's id");
                                }
                            }
                        },
                        {
                            type: "input",
                                name: "email",
                                message: "What is your engineer's email? (Required)",
                                default: "engineer@gmail.com",
                                validate: emailInput => {
                                    if(emailInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the engineer's email");
                                    }
                                }
                            },
                        {
                            type: "input",
                                name: "github",
                                message: "What is your engineer's GitHub username? (Required)",
                                default: "Engineer's GitHub username",
                                validate: gitInput => {
                                    if(gitInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the engineer's GitHub username");
                                    }
                                }
                            }
                            ])

                            .then(function (engineerAnswers) {
                                const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                                employees.push(engineer);
                                teamPrompt();
                            })
                    }
                } else if(userInput.employee === "Intern") {

                    // Inquirer Prompt $4
                    internPrompt()

                    function internPrompt() {
                        inquirer.prompt([
                            // Intern Questions
                        {
                            type: "input",
                            name: "name",
                            message: "What is your intern's name? (Required)",
                            default: "Intern's Name",
                            validate: nameInput => {
                                if(nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name");
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "What is your intern's id? (Required)",
                            default: "Intern's ID Number",
                            validate: idInput => {
                                if(idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's id");
                                }
                            }
                        },
                        {
                            type: "input",
                                name: "email",
                                message: "What is your intern's email? (Required)",
                                default: "intern@gmail.com",
                                validate: emailInput => {
                                    if(emailInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the intern's email");
                                    }
                                }
                            },
                        {
                            type: "input",
                                name: "school",
                                message: "What is your intern's School? (Required)",
                                default: "Intern's School",
                                validate: schoolInput => {
                                    if(schoolInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the interns's school");
                                    }
                                }
                            }                            
                        ])

                            .then(function (internAnswers) {
                                const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                                employees.push(intern);
                                teamPrompt();
                            })
                    }
                } else {
                    // Exit Inquirer
                    const html = render(employees);
                    fs.writeFile(distPath, html, function(err) {
                        if (err) {
                            return console.log(err);
                        };
                    });

                    console.log(" Team successfully created!");
                
                }
            
            })


        }
    })

}