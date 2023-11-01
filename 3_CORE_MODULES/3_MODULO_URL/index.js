const url = require('url')
const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parserdUrl = new url.URL(adress)

console.log(parserdUrl.host)
console.log(parserdUrl.pathname)
console.log(parserdUrl.search)
console.log(parserdUrl.searchParams)
console.log(parserdUrl.searchParams.get('produtos'))