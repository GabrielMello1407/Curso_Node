const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get("/dashboard", (req, res) => {

  const items = ["Item a", "Item b", "Item c"]

  res.render('dashboard', {
    items
  })
})

app.get('/post', (req, res) => {
  const post = {
    title: "Aprender Node.JS",
    category: "Javascript",
    body: "Este artigo vai te ajudar a a aprender Node.js",
    comments: 4
  }
  res.render('blogpost', {
    post
  })
})

app.get('/', (req, res) => {
  const user = {
    name: "Gabriel",
    surname: "Mello",
    age: 22
  }
  const palavra = "Teste"

  const auth = true

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