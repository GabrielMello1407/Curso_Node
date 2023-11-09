const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;
const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials']
});
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Move a definição da variável products para fora do escopo da rota
const products = [{
    id: "1",
    name: "Computador",
    category: "Eletronicos",
    price: 5000
  },
  {
    id: "2",
    name: "Mesa",
    category: "Móveis",
    price: 500
  },
  {
    id: "3",
    name: "Geladeira",
    category: "Eletrodomésticos",
    price: 3000
  },
  {
    id: "4",
    name: "Webcam",
    category: "Eletronicos",
    price: 400
  },
];
app.get('/', (req, res) => {
  res.render('home', {
    products
  });
});
app.get('/product/:id', (req, res) => {
  const product = products[parseInt(req.params.id) - 1]
  res.render('product', {
    product
  });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});