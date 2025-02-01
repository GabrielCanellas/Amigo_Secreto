const listaAmigos = [];

function adicionarAmigo() {
  const inputNome = document.getElementById("amigo");
  const nome = inputNome.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  listaAmigos.push(nome);
  atualizarLista();
  inputNome.value = "";
}

function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaAmigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${sorteado}</strong></li>`;
}
