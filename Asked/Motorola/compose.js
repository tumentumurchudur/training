function compose(...fns) {
  return (arg) => {
    let output = arg;

    for (let fn of fns) {
      output = fn(output)
    }
    return output
  }
}

const f1 = a => a + 2
const f2 = b => b * 2
compose(f1, f2)(10)
