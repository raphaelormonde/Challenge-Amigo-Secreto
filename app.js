//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (valor == null){
        alert ("ta vazio");
        return;
    }

    amigos.push(valor);

    atualizarLista();

    input.value = "";
}

