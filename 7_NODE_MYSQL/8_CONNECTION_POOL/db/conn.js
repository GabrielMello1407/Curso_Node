const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql2'
})
console.log('Conectado ao MySQL!')
module.exports = pool