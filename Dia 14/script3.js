let musicas = []
let inMusica = ""
let continuar = true

function playList() {
    while (continuar) {
        let opcao = prompt(`PLAYLIST DE MÚSICAS
1- Adicionar musicas à Playlist
2- Remover uma música da Plalit
3- Exibir todas as músicas na Playlist
4- Escolher uma música aleátoria
5- Encerrar`)

        if (opcao === "") {
            alert("[ERRO] Por favor selecione uma das opções!")
        }
        else {
            switch (opcao) {
                case '1':
                    inMusica = prompt("Qual música deseja adicionar na PlayList?")
                    musicas.push(inMusica)
                    alert(inMusica + " Foi adicionada na Playlist!")
                    break;
                case '2':
                    inMusica = prompt("Qual música deseja remover da Playlist?")
                    const index = musicas.indexOf(inMusica);

                    if (index !== -1) {
                        musicas.splice(index, 1);
                        alert(`${inMusica} Removido da Playlist!`);
                    } else {
                        alert(`${inMusica} Adicionado na Playlist!`);
                    } break;
                case '3':
                    if (musicas.length = 0) {
                        alert("A Playlist está vazia!")
                    } else {
                        alert("Músicas na Playlist:\n" + musicas.join(", "))
                    } break;
                case '4':
                    if (musicas.length = 0) {
                        alert("A Playlist está vazia!")
                    } else {
                        alert("Múica na faixa aleatória:\n" + musicas[Math.floor(Math.random() * musicas.length)]);
                    } break;
                case '5':
                    alert("Programa Encerrado")
                    return;
            }
        }
    }
}
playList()
