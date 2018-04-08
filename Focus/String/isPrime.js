// Check if given number n is a prime number
function isPrime(n) {
  let isPrime = n !== 1 // Everything but 1 can be a prime number

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false
      break
    }
  }
  return isPrime
}
