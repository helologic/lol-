
const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i <  botoes.lenght; i++) {
botoes[i].onclick = function () {
 for (let j = 0; j < botoes.lenght; j++) {
    botoes[j].classlist.remove("ativo");
    texto[j].classlist.remove("ativo");

  }

  botoes[i].classList.add("ativo")
  texto[i].classList.add("ativo")
}
}

const contadores = document.querySelectorAll (".contador");
const tempoObjetivo1 = new Date ("2024-12-22T23:59:59");

const tempos = [tempoObjetivo1]

for (let i=0; i< contadores.lenght; i++){
  contadores[i].textContent = calculaTempo(tempos[i]);

}

contaores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo1 - tempoAtual
  let segundos = Math.floor(tempoFinal/1000);
  let minutos = Math.floor(segundos/60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor (horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}


