const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const user = {
    name: "Gabriel",
    surname: "Mello",
    age: 22
  }
  const palavra = "Teste"

  res.render('home', {
    user: user,
    palavra: palavra
  })
})


app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})