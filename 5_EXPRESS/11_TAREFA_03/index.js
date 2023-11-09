const express = require('express')

const app = express()

const port = 5000

const path = require('path')

const cars = require('./cars')
app.use(express.static('public'))

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.use('/cars', cars)

app.get('/', (req, res) => {

  res.sendFile(`${basePath}/index.html`) // renderizando o arquivo na home

})
app.use(function (req, res) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})