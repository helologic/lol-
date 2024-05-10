
const botões = document.querySelectorAll(".botao");
const botões = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i <  botoes.lenght; i++) {
botoes[i].onclick = function () {
 for (let j = 0; j < botões.lenght; j++) {
    botoes[j].classlist.remove("ativo");
    textos[j].classlist.remove("ativo");

  }

  botoes[i].classList.add("ativo")
  textos[i].classList.add("ativo")
}
}

const contadores = document.querySelectorAll (".contador");
const tempoObjetivo1 = new Date ("2024-12-11T23:59:59");

