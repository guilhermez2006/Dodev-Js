function soma(a, b, callback) {
    const resultado = a + b;    // calcula soma
    callback(resultado);        // chama callback passando resultado
}

function mostrarResultado(valor) {
    console.log("O resultado é: " + valor);
}

soma(100, 200, mostrarResultado);
