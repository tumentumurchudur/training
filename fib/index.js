// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Recursive
function fib(n) {
  if (n < 2) {
		return n
	}
	return fib(n - 1) + fib(n - 2)
}

// Iterative
function fibIterative(n) {
	const result = [0, 1]

	for(let i = 2; i <= n; i++) {
		const a = result[i - 1];
		const b = result[i - 2]

		result.push(a + b)
	}
	return result
}


// --------------------Memoized fib---------------------
// Save results of a function call and then return that if called with the same arguments
function memoize(fn) {
	const cache = {}

	return (...args) => {
		if (cache[args]) {
			return cache[args]
		}

		const result = fn.apply(this, args)
		cache[args] = result

		return result
	}
}

function fib(n) {
  if (n < 2) {
		return n
	}
	return fib(n - 1) + fib(n - 2)
}

const fibMem = memoize(fib)
fibMem(3)

// -----------------------------------------------------
