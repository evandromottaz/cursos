/** 
  n = 8
  8/2 = 4
  4/2 = 2
  2/2 = 1
  if remainder is not 0 in any step, 'n' is not a power of two
  if remainder is 0 ad 'n' comes down to 1 eventually, 'n' is a power of two
*/

// my
function isPowerOfTwo(number) {
	if (number > 0 && number < 3) return true;

	while (number) {
		if (number % 2 !== 0) return false;

		number = number / 2;
		if (number / 2 === 1) return true;
	}
}

function isPowerOfTwo2(number) {
	if (number < 1) return false;

	while (number > 1) {
		if (number % 2 !== 0) return false;

		number = number / 2;
	}

	return true;
}

function isPowerOfTwoBitWise(n) {
	if (n < 1) return false;

	// '&' operador lógico que verifica bit a bit
	return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1444));
