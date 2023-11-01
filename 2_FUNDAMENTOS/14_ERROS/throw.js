const x = '10'

// checar de x é numero
if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um número inteiro!")
}
console.log("Continuando o código...")