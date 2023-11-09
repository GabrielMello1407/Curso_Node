const express = require("express")
const router = express.Router()
const path = require("path")

const basePath = path.join(__dirname, '../templates')

router.get('/new', (req, res) => {
  res.sendFile(`${basePath}/carform.html`)
})

router.post('/save', (req, res, next) => {
  console.log(req.body)

  const brand = req.body.brand
  const year = req.body.year
  const price = req.body.price

  console.log(`O carro é da marca ${brand} do ano de ${year} e custa ${price}.`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  console.log(`Estamos buscando pelo carro: ${id}`)
  res.sendFile(`${basePath}/cars.html`)

})


module.exports = router