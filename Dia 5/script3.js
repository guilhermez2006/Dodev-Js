//CRIANDO VARIÁVEIS
let valor
let quantidade
let opcao = prompt("Bem vindo ao Dev-Thru, você deseja: " +
    "\n1 - Abastecer com gasolina; \n2 - Abastecer com álcool; \n3 - Calibrar os pneus")

//CRIANDO SWITCHCASE
switch (opcao) {
    case "1":
     valor = parseInt(prompt("Digite o valor desejado para abastecer: "))
     quantidade = valor / 5
     console.log("Foram abastecidos " + quantidade + " litros de gasolina")
     break;

    case "2":
     valor = parseInt(prompt("Digite o valor desejado para abastecer: "))
     quantidade = valor / 3
     console.log("Foram abastecidos " + quantidade.toFixed(2) + " L de álcool")
     break;
   
    default :
     console.log("Pneus calibrados com sucesso!")
     break;
}