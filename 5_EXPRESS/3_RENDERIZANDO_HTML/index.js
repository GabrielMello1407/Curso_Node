const express = require('express')

const app = express()

const port = 3000 //variavel ambiente

const path = require("path")

const basePath = path.join(__dirname, 'templates') //unindo template com a home

app.get('/', (req, res) => {
  
  res.sendFile(`${basePath}/index.html`) // renderizando o arquivo na home

})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})