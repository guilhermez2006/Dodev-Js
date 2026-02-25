// TESTE 1 - MAIS SIMPLES POSSÍVEL
console.log("1 - Isso aparece?");

async function contagemRegressiva(segundos) {
  console.log("2 - Entrou na função");
  
  for(let i = segundos; i > 0; i--) {
    console.log(i + "...");
    await new Promise(resolve => {
      console.log("3 - Dentro da Promise");
      setTimeout(resolve, 1000);
    });
  }
  
  console.log("4 - FOGO!");
}

console.log("5 - Antes de chamar");
contagemRegressiva(3);
console.log("6 - Depois de chamar");