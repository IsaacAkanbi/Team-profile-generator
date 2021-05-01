var fileSystem = require("fs");
var inquirer = require("inquirer");
var util = require("util");

var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");

const questions = [];
var team = [];

const managerQuestion = [
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the team manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is email address?",
  },
  {
    type: "input",
    name: "number",
    message: "Enter office number?",
  },
];
const engineerQuestion = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of the name of the Engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is email address?",
  },
  {
    type: "input",
    name: "git",
    message: "What is the GitHub username?",
  },
];

const internQuestion = [
  {
    type: "input",
    name: "internName",
    message: "What is the name of the Intern you are adding?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address?",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the school name?",
  },
];

const q = {
  type: "list",
  name: "memberType",
  message: "Which type of team member would you like to add?",
  choices: [
    "Manager",
    "Engineer",
    "Intern",
    "I do't want to add any more team member",
  ],
};
const promptUser = () => {
  return inquirer.prompt(q).then((answer) => {
    // console.log(answer)
    switch (answer.memberType) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "Manager":
        addManager();
        break;
      case "I do't want to add any more team member":
        quit();
        break;
    }
  });
};

const addManager = () => {
  console.log("Adding Manager");
  // run login to create a new Manager
  inquirer.prompt(managerQuestion).then((answer) => {
    //console.log(answer)

    // Create a new Manager Object (Instance)
    var newManager = new Manager(
      answer.managerName,
      answer.id,
      answer.email,
      answer.number
    );
    //console.log(newManager);

    // Add our new TEAM MEMBER to our TEAM ARRAY
    team.push(newManager);
    //console.log(team);
    // Go Back to the Main prompt
    promptUser();
  });
};

const addEngineer = () => {
  console.log("Adding Engineer");
  inquirer.prompt(engineerQuestion).then((answer) => {
    var newEngineer = new Engineer(
      answer.engineerName,
      answer.id,
      answer.email,
      answer.git
    );

    team.push(newEngineer);
    promptUser();
  });
};

const addIntern = () => {
  console.log("Adding Intern");
  inquirer.prompt(internQuestion).then((answer) => {
    var newIntern = new Intern(
      answer.interName,
      answer.id,
      answer.email,
      answer.school
    );
    team.push(newIntern);
    promptUser();
  });
};

const quit = () => {
// const writeFileAsync = util.promisify(fileSystem.writeFile);
    fileSystem.writeFileSync("./index.html", buildHtml(team), "utf-8")

//   console.log("Quitting ....");
};

/*
const promptUser = () => {
    return inquirer.prompt(q).then(
        function(answer){
            console.log(answer)
        }
    );
};
*/

var managerCard = (manager) => {
  return `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text"> ${manager.name} </p>
        <p class="card-text"> ${manager.id} </p>
        <p class="card-text"> ${manager.email} </p>
        <p class="card-text"> ${manager.number} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;
};

var buildHtml = (answers) => {
    console.log("answers", answers);
 return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <title>Team profile</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container"> 
 <header> Team Profile </header>

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text"> ${answers.Manager} </p>
        <p class="card-text"> ${answers.id} </p>
        <p class="card-text"> ${answers.email} </p>
        <p class="card-text"> ${answers.number} </p>

        <a href="#" class="btn btn-primary">email: href="${answers.email}"</a>
        </div>
    </div> 

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text"> ${answers.Engineer} </p>
            <p class="card-text"> ${answers.id} </p>
            <p class="card-text"> ${answers.email} </p>
            <p class="card-text"> ${answers.number} </p>
           
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text"> ${answers.Engineer} </p>
            <p class="card-text"> ${answers.id} </p>
            <p class="card-text"> ${answers.email} </p>
            <p class="card-text"> ${answers.number} </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text"> ${answers.Intern} </p>
            <p class="card-text"> ${answers.id} </p>
            <p class="card-text"> ${answers.email} </p>
            <p class="card-text"> ${answers.number} </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

</div>
</div>
</body>
</html>`
};

promptUser();
/* 
const init = (type) => {
Questions = eval(type+'Questions')
    promptUser()
     
    .then((answers) => {
             
        writeFileAsync('index.html', buildHtml(answers))

    })
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init('Manager'); */
