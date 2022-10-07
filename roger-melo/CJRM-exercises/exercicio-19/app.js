/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const divQuestions = document.querySelectorAll("[data-quiz]");

const answers = { q4: "A" };

let points = 0;
let checkedAnswers = 0;

const messages = {
  0: "Você não fez nenhum ponto :/",
  1: "Você fez apenas 1 ponto :|",
  [divQuestions.length]: "Você acertou tudo, parabéns :D",
};

divQuestions.forEach((el) => {
  const inputs = el.querySelectorAll("input");
  inputs.forEach((input) => input.addEventListener("change", handleChange));
});

function handleChange({ target }) {
  const setAnswers = answers[target.name] || "B";
  checkedAnswers++;

  if (setAnswers === target.value) {
    points++;
  }

  if (checkedAnswers === divQuestions.length) {
    const setMessage = messages[points] || `Você fez ${points} pontos.`;
    renderAlert(setMessage);
  }
}

function renderAlert(setMessage) {
  setTimeout(() => {
    alert(setMessage);
    resetValues();
  }, 50);
}

function resetValues() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((el) => (el.checked = false));
  points = 0;
  checkedAnswers = 0;
}
