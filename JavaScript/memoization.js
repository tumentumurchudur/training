/*
  Wraps any function and caches it results based its arguments.
  Following best practices, memoization should be implemented on pure functions.
  Speed over memory.
*/
function memoize(fn) {
  return function() {
    fn.cache = fn.cache || {};
    const args = Array.prototype.slice.call(arguments);

    return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this, args));
  };
}

/*
  We can add the memoize function to the Function prototype
  so that every function defined in our apps inherits the
  memoize function and can call it.

  We know that all functions defined in JS are inherited from the
  Function.prototype. So, anything added to the Function.prototype
  will be available to all the functions we define.
*/
Function.prototype.memoize = function() {
  var self = this;

  return function() {
    var args = Array.prototype.slice.call(arguments);
    self.cache = self.cache || {};

    return self.cache[args] ? self.cache[args] : (self.cache[args] = self(args));
  };
};

function sum(n1, n2) { return n1 + n2 }
sum.memoize()(100, 200)

/*
  Memoization should be implemented on pure functions
*/
function factorial(num) {
  if(num == 1 || num == 0) {
      return 1
  }
  return num * factorial(num-1)
}
memoize(factorial)(100)


function fibanochi(num) {
  if (num === 1 || num === 2) {
    return 1
  }
  return fibanochi(num - 1) + fibanochi(num - 2)
}
memoize(fibanochi)(20)

const t1 = memoize(factorial)
const t2 = memoize(fibanochi)
