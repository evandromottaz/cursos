const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";

const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({ type: MODIFICAR_EMAIL, payload: email });

export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const initialAluno = {
	nome: "André Rafael",
	email: "andre@origamid.com",
	diasRestantes: 120,
};

const initialAulas = [
	{
		id: 1,
		nome: "Design",
		completa: true,
	},
	{
		id: 2,
		nome: "HTML",
		completa: false,
	},
	{
		id: 3,
		nome: "CSS",
		completa: false,
	},
	{
		id: 4,
		nome: "JavaScript",
		completa: false,
	},
];

const aluno = immer.produce((state, action) => {
	switch (action.type) {
		case INCREMENTAR_TEMPO:
			state.diasRestantes += 1;
			break;
		case REDUZIR_TEMPO:
			state.diasRestantes -= 1;
			break;
		case MODIFICAR_EMAIL:
			state.email = action.payload;
	}
}, initialAluno);

const aulas = immer.produce((state, action) => {
	switch (action.type) {
		case COMPLETAR_AULA:
			const findState = state.find((aula) => aula.id === action.payload);
			findState && (findState.completa = true);
			break;
		case COMPLETAR_CURSO:
			state.forEach((aula) => (aula.completa = true));
			break;
		case RESETAR_CURSO:
			state.forEach((aula) => (aula.completa = false));
	}
}, initialAulas);

const reducer = Redux.combineReducers({ aluno, aulas });

export default reducer;
