/**
 * unary() is a function decorator that takes a function and
 * returns a function taking one parameter. It’s usually used to fix problems
 * when the function is called with more arguments than necessary.
 */

function unary(fn) {
  return function unaryDecorator(arg) {
    return fn.call(this, arg);
  }
}

let numbers = [1,2,3,4,5,6];
numbers.forEach(console.log);
//1 0 (6) [1, 2, 3, 4, 5, 6]
//2 1 (6) [1, 2, 3, 4, 5, 6]
//...

numbers.forEach(unary(console.log));
//1 2 3 4 5 6

let numbers = [1,2,3,4,5,6];
numbers.map(parseInt); //[1, NaN, NaN, NaN, NaN, NaN]
numbers.map(unary(parseInt)); //[1, 2, 3, 4, 5, 6]
