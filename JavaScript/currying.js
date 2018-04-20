/*
  Briefly, currying is a way of constructing functions that allows partial application of
  a function’s arguments. What this means is that you can pass all of the arguments a
  function is expecting and get the result, or pass a subset of those arguments and get a
  function back that’s waiting for the rest of the arguments. It really is that simple.
*/

const curryIt = function(fn) {
  const parameters = Array.prototype.slice.call(arguments, 1);

  return function() {
    return fn.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

const greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

const greetHello = curryIt(greeter, "Hello", ", ", ".");

greetHello("Heidi"); //"Hello, Heidi."
greetHello("Eddie"); //"Hello, Eddie."


/*
  -------------------Handles edge cases---------------------
*/
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function _curried(depth, args) {
    return function(newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }
      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

var result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]
