function compose(...fns) {
  if (!fns.length) {
    return () => {};
  }

  return function(arg) {
    let output = arg;

    for (let i = 0; i < fns.length; i++) {
      output = fns[i](output);
    }
    return output;
  };
}
const f1 = x => x + 1
const f2 = x => x * 2
const f3 = x => x / 2

console.log(compose(f1, f2, f3)(5))

/*
  Componse function can take any # of arguments.
*/
function compose2(...fns) {
  if (fns.length === 0) {
    return () => {};
  }

  return (...args) => {
    let output = fns[0](...args);

    for (let i = 1; i < fns.length; i++) {
      output = fns[i](output);
    }
    return output;
  };
}

const f1 = (a, b) => a + b
const f2 = (a) => a * 2
console.log('result:', compose2(f1, f2)(10, 20, 30))