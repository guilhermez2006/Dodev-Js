function verificarAnagrama(a, b) {
  let aOrdenada = a.toLowerCase().split("").sort().join("");
  let bOrdenada = b.toLowerCase().split("").sort().join("");

  return aOrdenada === bOrdenada;
}

let resultado = verificarAnagrama("Rato", "Tora");
console.log(resultado);
