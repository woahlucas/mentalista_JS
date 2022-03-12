var numeroSecreto = parseInt(Math.random() * 11);
var chute;

function chutar() {
  chute = parseInt(document.getElementById("valor").value);
  verificar();
}

function verificar() {
  var mensagem;
  if (chute == numeroSecreto) {
    mensagem = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    mensagem = "Você deve digitar um número de 1 a 10!";
  } else {
    mensagem = "Você errou!";
  }
  elementoH2 = document.getElementById("resultado");
  elementoH2.innerHTML = mensagem;
}