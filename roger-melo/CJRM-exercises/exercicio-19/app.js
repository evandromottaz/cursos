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

const answers = ["C", "D", "B", "A", "C"];

let points = 0;
const checkedAnswers = new Map();

const messages = {
	0: "Você não fez nenhum ponto :/",
	1: "Você fez apenas 1 ponto :|",
	[divQuestions.length]: "Você acertou tudo, parabéns :D",
};

divQuestions.forEach((el) => {
	const inputs = el.querySelectorAll("input");
	inputs.forEach((input) =>
		input.addEventListener("change", (event) =>
			handleChange(event, el.dataset.quiz)
		)
	);
});

function handleChange({ target }, quizNumber) {
	checkedAnswers.set(quizNumber, target.value);
	const correctAnswer = answers[quizNumber - 1];
	const isCorrectAnswer = checkedAnswers.get(quizNumber) === correctAnswer;

	if (isCorrectAnswer) {
		points++;
	}

	const isAllQuestionsChecked = checkedAnswers.size === divQuestions.length;
	if (isAllQuestionsChecked) {
		const message = messages[points] || `Você fez ${points} pontos.`;
		renderAlert(message);
	}
}

function renderAlert(message) {
	setTimeout(() => {
		alert(message);
		resetValues();
	}, 50);
}

function resetValues() {
	const inputs = document.querySelectorAll("input");

	inputs.forEach((el) => (el.checked = false));
	points = 0;
	checkedAnswers.clear();
}
