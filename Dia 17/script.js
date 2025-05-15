//CRIANDO CLASSE HOTEL
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone

    constructor(Id, nome, categoria, endereco, telefone) {
        this.Id = Id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

//CRIANDO CLASSE RESERVA
class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida

    constructor(Id, IdHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = Id
        this.IdHotel = IdHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}
// ARRAYS PARA ARMAZENAR OS DADOS
let hoteis = [];
let reservas = [];
let idHotel = 0;
let idReserva = 0;

// FUNÇÃO PARA CADASTRAR HOTEL
function cadastrarHotel() {
    let nome = prompt("Digite o nome do hotel");
    let categoria = parseInt(prompt("Digite a categoria do hotel"));
    let endereco = prompt("Digite o endereço do hotel");
    let telefone = prompt("Digite o telefone do hotel");

    let hotel = {
        id: ++idHotel,
        nome: nome,
        categoria: categoria,
        endereco: endereco,
        telefone: telefone
    };
    hoteis.push(hotel);
    alert("Hotel cadastrado com sucesso!");
}

// FUNÇÃO PARA CADASTRAR RESERVA
function cadastrarReserva() {
    let idHotelReserva;
    let existe = false;

    do {
        idHotelReserva = parseInt(prompt("Digite o ID do hotel"));
        for (let i = 0; i < hoteis.length; i++) {
            if (hoteis[i].id === idHotelReserva) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            console.log("ID do total não cadastrado.");
        }
    } while (!existe);

    let nome = prompt("Digite o nome do responsável");
    let dataEntrada = prompt("Digite a data de entrada");
    let dataSaida;
    let dataValida = false;

    do {
        dataSaida = prompt("Digite a data de saída");
        if (dataSaida <= dataEntrada) {
            console.log("A data de saída deve ser maior que a data de entrada.");
        } else {
            dataValida = true;
        }
    } while (!dataValida);

    let reserva = {
        id: ++idReserva,
        hotelId: idHotelReserva,
        nomeResponsavel: nome,
        dataEntrada: dataEntrada,
        dataSaida: dataSaida
    };
    reservas.push(reserva);
    alert("Reserva cadastrada com sucesso!");
}