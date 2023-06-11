// números primos
// isPrime(5) = true (1 * 5 or 5 * 1)

// my
function isPrime(number) {
	let isPrimeNumber = number < 1 || number === 2;

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			isPrimeNumber = false;
			break;
		}

		isPrimeNumber = true;
	}

	return `${number} ${isPrimeNumber ? "é" : "não é"} um número primo`;
}

function isPrime1(n) {
	if (n < 2) return false;

	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false;

		console.log("isPrime1", i);
	}

	return true;
}

function isPrimeOptimized(n) {
	if (n < 2) return false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;

		console.log("isPrimeOptimized", i);
	}

	return true;
}

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(17));
console.log(isPrime1(83));
console.log(isPrimeOptimized(83));
