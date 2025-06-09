// CLASSE HOTEL
class Hotel {
    constructor(id, nome, categoria, endereco, telefone) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

// CLASSE RESERVA
class Reserva {
    constructor(id, hotelId, responsavel, entrada, saida) {
        this.id = id;
        this.hotelId = hotelId;
        this.responsavel = responsavel;
        this.entrada = entrada;
        this.saida = saida;
    }
}

// LISTAS E CONTADORES
const hoteis = [];
const reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

// FUNÇÃO PARA CADASTRAR HOTEL
function cadastrarHotel() {
    const nome = prompt("Nome do hotel:");
    const categoria = parseInt(prompt("Categoria do hotel (ex: 3):"));
    const endereco = prompt("Endereço:");
    const telefone = prompt("Telefone:");

    const hotel = new Hotel(proximoIdHotel++, nome, categoria, endereco, telefone);
    hoteis.push(hotel);

    alert("Hotel cadastrado com sucesso!");
}

// FUNÇÃO PARA CADASTRAR RESERVA
function cadastrarReserva() {
    let hotelId;
    let hotelExiste = false;

    do {
        hotelId = parseInt(prompt("ID do hotel:"));
        hotelExiste = false;

        for (let i = 0; i < hoteis.length; i++) {
            if (hoteis[i].id === hotelId) {
                hotelExiste = true;
                break;
            }
        }

        if (!hotelExiste) {
            alert("Hotel não encontrado. Tente novamente.");
        }

    } while (!hotelExiste);

    const responsavel = prompt("Nome do responsável:");
    const entrada = prompt("Data de entrada (ex: 2025-06-10):");

    let saida;
    do {
        saida = prompt("Data de saída (ex: 2025-06-12):");

        if (saida <= entrada) {
            alert("A data de saída deve ser maior que a de entrada.");
        }
    } while (saida <= entrada);

    const reserva = new Reserva(proximoIdReserva++, hotelId, responsavel, entrada, saida);
    reservas.push(reserva);

    alert("Reserva cadastrada com sucesso!");
}
