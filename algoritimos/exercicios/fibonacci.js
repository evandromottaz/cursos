// a soma do último número, será o número atual
// 0 1 1 2 3 5 8 13 21 34

// minha forma
function Fibonacci(number) {
	const countArray = [0];

	for (let i = 0; i < number - 1; i++) {
		countArray.push(i === 0 ? 1 : countArray[i - 1] + countArray[i]);
	}

	return countArray;
}

console.log(Fibonacci(7));

function fibonacci2(n) {
	const fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
}

console.log(fibonacci2(7));
