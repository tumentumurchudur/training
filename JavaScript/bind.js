// This is how bind() function works.
Function.prototype.bind = Function.prototype.bind || function() {
  const fn = this;

  // argument is different from arguments in the inner function!!!
  const args = Array.prototype.slice.call(arguments); // arguments => obj
  const context = args.shift();

  return function() {
    return fn.apply(context, args.concat(Array.prototype.slice.call(arguments))); // arguments => 25, 30
  };
}

function add(num1, num2) {
  return `${this.name}'s age is ${num1 + num2}`
}

const obj = { name: 'Nick' };
const binder = add.bind(obj);
binder(25, 30);
