import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'Enter your age'
    },
    {
        type: 'list',
        name: 'gender',
        message: 'What is your gender',
        choices: ['male', 'female', 'Prefer not to say']
    }
]);
console.log("Your name is " + answer.name + ", your age is "
    + answer.age + "Your gender is" + answer.gender);
