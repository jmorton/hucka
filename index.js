import inquirer from 'inquirer'

async function main () {
  let it = {
    type: 'list',
    name: 'readiness',
    message: 'Are you ready?',
    choices: ['Yes', 'No']
  };
  let answers = await inquirer.prompt([ it ])
  console.log(answers)
  process.exit(1);
}

main();