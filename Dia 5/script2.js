let diaDaSemana = prompt("Insira um número de 1 á 7 para selecionar o dia da semana:")

switch(diaDaSemana){
    case '1':
     console.log("Hojé é Domingo!")
     break;
    case '2':
     console.log("Hojé é Segunda-feira!")
     break;
    case '3':
     console.log("Hojé é Terça-feira!")
     break;
    case '4':
     console.log("Hojé é Quarta-feira!")
     break;
    case '5':
     console.log("Hojé é Quinta feira!")
     break;
    case '6':
     console.log("Hoje é Sexta-feira!")
     break;
    case '7':
     console.log("Hojé é Sabado!")
    default:
     console.log("Número inválido! Por favor, insira um número de 1 à 7: ")
}
