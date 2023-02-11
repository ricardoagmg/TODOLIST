let amostra = document.getElementById("amostra");
let banco = window.localStorage;

function gerarId() {
  return (Math.random() * (100000000)).toFixed(0);
}

function mandar() {
  let tarefas = [];
  let titulo = document.getElementById("titulo").value;
  let desc = document.getElementById("descricao").value;

  if (titulo == null || titulo == undefined || titulo == "") {
    alert("Insira um título!");
  }
  else if (desc == null || desc == undefined || desc == "") {
    alert("Insira uma descrição!")
  }
  else {
    let ident = gerarId();
    let tarefa = { title: titulo, desc: desc , id:ident}
    tarefas.push(tarefa);
    banco.setItem(ident, JSON.stringify(tarefa));
    amostra.innerHTML += `<div class="card mt-4" id=${ident}>
    <div class="card-body">
      <h5 class="card-title">${titulo}</h5>
      <p class="card-text">${desc}</p>
    </div>
    <button id="delete" type="button" onclick="apagar(this.parentNode)" class="btn-close" aria-label="Close"></button>
  </div>`
  }
  console.log(banco.length)
}

function apagar(tarefa) {
  let tarefas = document.getElementById("amostra");
  console.log(tarefa)
  banco.removeItem(tarefa.id)
  tarefas.removeChild(tarefa)
}

function atualizar() {
  for (let i = 0; i < banco.length; i++) {
    amostra.innerHTML += `<div class="card mt-4" id=${JSON.parse(banco.getItem(banco.key(i))).id}>
    <div class="card-body">
      <h5 class="card-title">${JSON.parse(banco.getItem(banco.key(i))).title}</h5>
      <p class="card-text">${JSON.parse(banco.getItem(banco.key(i))).desc}</p>
    </div>
    <button id="delete" type="button" onclick="apagar(this.parentNode)" class="btn-close" aria-label="Close"></button>
  </div>`
  }
}


