// tipos primitivos 
// string, boolean, number, bigint, symbol, null, undefined

// type / interface

type CPF = String | Number

interface User {
    nome: String,
    email: String,
    cpf: CPF
}

const test: User = {
    cpf: "a", email: "a",
    nome: "a"
}

console.log(test)
