const express = require('express')

const app = express()

const port = 3000 //variavel ambiente

const path = require("path")

const basePath = path.join(__dirname, 'templates') //unindo template com a home

const checkAuth = function (req, res, next) {

  req.authStatus = false

  if (req.authStatus) {
    console.log("Está logado, pode continuar")
    next() //next serve para prosseguir a execução da aplicação referente alguma etapa
  } else {
    console.log("Não está logado, faça login para continuar")
    next()
  }

}

app.use(checkAuth)

app.get('/', (req, res) => {

  res.sendFile(`${basePath}/index.html`) // renderizando o arquivo na home

})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})