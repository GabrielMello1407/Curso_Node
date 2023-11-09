const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get("/dashboard", (req, res) => {
  res.render('dashboard')
})

app.get('/', (req, res) => {
  const user = {
    name: "Gabriel",
    surname: "Mello",
    age: 22
  }
  const palavra = "Teste"

  const auth = false

  const approved = true

  res.render('home', {
    user: user,
    palavra: palavra,
    auth,
    approved
  })
})


app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})