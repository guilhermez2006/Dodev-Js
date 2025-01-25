//CRIANDO VARIÁVEIS
let num1 =parseInt(prompt("Digite o primeiro número:"))
let num2 = parseInt(prompt("Digite o segundo número:"))
let opcao = parseInt(prompt("Escolha a operação que deseja realizar:"
 + "\n1 = +; \n2 = -; \n3 = *; \n4 = /;"))

//CRIANDO SWITCHCASE
switch(opcao) {
    case 1: 
     console.log(num1 + "+" + num2 + "=" + (num1 + num2))
     break;
    case 2:
     console.log(num1 + "-" + num2 + "=" + (num1 - num2))
     break;
    case 3:
     console.log(num1 + "*" + num2 + "=" + (num1 * num2))
     break;
    case 4:
     console.log(num1 + "/" + num2 + "=" + (num1 / num2))
     break;
    default:
     console.log("Opção inválida!");
}