let nota = parseInt(prompt("Insira sua nota (0-10)"))
/*
Resumo: 
O código usa "switch case" para verificar a nota do usuário e exibir uma mensagem correspondente.
*/
switch (nota) {
    case 0:

    case 1:    

    case 2:    

    case 3:     
    
    case 4:
        console.log("Reprovado!")
        break;
    case 5:
        console.log("Recuperação!")
        break;
    case 6:
        console.log("Recuperação!")
        break
    case 7:
        console.log("Aprovado!")
        break;
    case 8:
        console.log("Aprovado!")
        break;
    case 9:
        console.log("Aprovado com excelência!")
        break;
    case 10:
        console.log("Aprovado com excelência!")
    default:
        console.log("Erro! Digite um número válido entre 0 e 10.")
}
/*
Os "cases" com a mesma resposta foram agrupados para simplificar o código.
*/
