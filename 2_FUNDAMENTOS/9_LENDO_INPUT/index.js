const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("Qual a sua linguagem preferida? ", (language) => {

  if (language === 'Python') {
    console.log('Ai sim em')
  } else {
    console.log(`A minha linguagem preferida é: ${language}`)
  }

  console.log(`A minha linguagem preferida é: ${language}`)
  readline.close()

})