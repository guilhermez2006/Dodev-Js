function minhaFuncao(param, callback) {
  // faz algo com 'param'
  console.log("Executando com:", param);

  // chama o callback
  callback();
}

// 2. Criar a função que será usada como callback
function meuCallback() {
  console.log("Callback executado!");
}

// 3. Passar a função como argumento (sem parênteses)
minhaFuncao("Exemplo", meuCallback); 