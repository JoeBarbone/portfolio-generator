const inquirer = require("inquirer");

// const gererateSite = require("./utils/generate-site.js");
// line below and line above are the same thing
const { writeFile, copyFile } = require("./utils/generate-site.js");
const generatePage = require("./src/page-template.js");

//const pageHTML = generatePage(name, github);

//fs.writeFile("index.html", generatePage, err => {
//    if (err) throw err;

//    console.log("Portfolio Complete! Check out index.html to see the output!");
//});

const promptUser = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name (required)?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username (required):",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub Username!");
                    return false;
                }
            }
        },
        
        {
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to enter some information about yourself for an 'About' section?:",
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:",
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
    // .then(answers => console.log(answers));

}



const promptProject = portfolioData => {

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`

    =================
    Add a new project
    =================
    
    `)

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project (required)?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of your project!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (required):",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a project description!");
                    return false;
                }
            }
        },
        
        {
            type: "checkbox",
            name: "languages",
            message: "What did you build this project with? (Check all that apply)",
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },

        {
            type: "input",
            name: "link",
            message: "Enter the GitHub link to your project (required):",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub link!");
                    return false;
                }
            }
        },

        {
            type: "confirm",
            name: "feature",
            message: "Would you like to feature this project?",
            default: false
        },

        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Would you like to enter another project?",
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
}



promptUser()
    .then(promptProject)
    .then(portfolioData => {

        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });


        //fs.writeFile('./dist/index.html', pageHTML, err => {
        //  if (err) {
        //    console.log(err);
        //    return;
        //  }
        //  console.log('Page created! Check out index.html in this directory to see it!');

        //  fs.copyFile("./src/style.css", "./dist/style.css", err => {
        //    if (err) {
        //        console.log(err);
        //        return;
        //    }

        //    console.log("Stylesheet copied successfully");
        //  });
        //});

    //});