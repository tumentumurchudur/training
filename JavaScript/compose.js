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