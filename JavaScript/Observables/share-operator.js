// https://jsfiddle.net/Lmesxxaq/160/
//emit value in 1s
const source = Rx.Observable.interval(1000).take(1)
//log side effect, emit result
const example = source
  .do(() => console.log('***SIDE EFFECT***'))
  .map(() => console.log('mapping...'))
  .map(() => [1, 56, 152, 6, 0])
  .map(data => data.filter(d => d > 50))
  //.share()

const subscribe = example.subscribe(val => console.log('1', val))
const subscribeTwo = example.subscribe(val => console.log('2', val))
const subscribeThree = example.subscribe(val => console.log('3', val))
