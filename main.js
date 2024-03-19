const botões = document.querySelectorAll(".botao");

for (let i = 0; i <  botoes.lenght; i++) {
botoes{i}.onclick = function () {

  for (let j = 0; j < botões.lenght; j++) {
    botoes[j].classlist.remove("ativo");

  }

  botoes[i].classList.add("ativo")
    
