let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let valor = input.value.trim();
    if (valor === ""){
        alert ("Preencha o espaço vazio.");
        return;
    }

    amigos.push(valor);

    atualizarLista();

    input.value = "";
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }


}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo disponível para sortear.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}