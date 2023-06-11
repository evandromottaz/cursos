// números fatoriais
// fatorial 5 = 5 * 4 * 3 * 2 * 1 = 120

// minha resolução
function factorial(number) {
	let j = 1;

	for (let i = 0; i <= number; i++) {
		if (i === 0) continue;

		j = j * i;
	}

	return j;
}

console.log(factorial(4));

function factorial2(number) {
	let j = 1;

	for (let i = 2; i <= number; i++) {
		j = j * i;
	}

	return j;
}
