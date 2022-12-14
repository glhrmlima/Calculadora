let valores = document.querySelector(".resultado");

function insert(numero) {
  valores.innerHTML += numero;
}

function apagaTudo() {
  valores.innerHTML = "";
}

function apagaUm() {
  let resultado = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  let resultado = document.querySelector(".resultado").innerHTML;
  if (resultado) {
    document.querySelector(".resultado").innerHTML = eval(resultado);
  }
}
