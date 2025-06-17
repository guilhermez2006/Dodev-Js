// 7
const valores = [50, 10, 20, 80, 19, 30];
let valoresMaior = 0;

valores.forEach(function (valor) {
    if (valor > 100) {
        valoresMaior++;
    }
});

if (valoresMaior === 0) {
    console.log("Não tem valor maior que 100 no array!");
} else {
    console.log(valoresMaior);
}

const produtos = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Calça", preco: 80 },
    { nome: "Tênis", preco: 120 },
    { nome: "Boné", preco: 25 }
];

let produtosM50 = 0;

produtos.forEach(function (produto) {
    if (produto.preco > 50) {
        produtosM50++;
        console.log(`${produto.nome} ${produto.preco}`);
    }
});

console.log("Total de produtos acima de R$ 50:", produtosM50);

// 8
const numeros = [2, 4, 6, 8, 10];

numeros.forEach(function (num) {
    let quadrado = num * 4
    console.log(quadrado)
})
// 9

const valoresNegativos = [3, -7, 8, -2, 0, -6];

console.log(`Valores menor que zero:`)

valoresNegativos.forEach(function (valor) {
    if (valor < 0) {
        console.log(valor)
    }
})

// 10
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaPares = 0;

listaNumeros.forEach(function (num) {
    if (num % 2 === 0) {
        somaPares += num;
    }
});

console.log("Soma dos números pares:", somaPares);
