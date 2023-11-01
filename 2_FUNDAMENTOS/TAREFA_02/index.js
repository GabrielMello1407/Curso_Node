const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'name',
    message: 'Qual seu nome?'
  },
  {
    name: 'year',
    message: 'Qual sua idade?'
  },
]).then((answers) => {

  if (!answers.nome || !answers.idade) {
    throw new Error(chalk.bgRed.black("O nome e a idade é obrigatório"))
  }

  console.log(answers)
  const name = (answers.name)
  const year = (parseInt(answers.year))

  console.log(chalk.bgYellow.black(`Seu nome é ${name} e sua idade é ${year}`))
}).catch((err) => {
  console.log(err)
})