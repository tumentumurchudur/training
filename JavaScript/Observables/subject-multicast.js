// https://jsfiddle.net/wqm1e13y/22/
const source = Rx.Observable.defer(() => Rx.Observable.of(
  Math.floor(Math.random() * 100)
));

function observer(name) {
  return {
    next: (value) => console.log(`observer ${name}: ${value}`),
    complete: () => console.log(`observer ${name}: complete`)
  };
}

// Observable is created and returned for every subscription.
// That is why you see two complete.
const sub1 = source.subscribe(observer('a'))
const sub2 = source.subscribe(observer('b'))

/* source.subscribe(value => {
  console.log(`observer a: ${value}`)
}, error => {},
() => {
  console.log('complete')
}) */

/*
  A subject is both an observable and an observer.
  By subscribing observers to a subject and then subscribing the subject
  to a cold observable, a cold observable can be made hot
*/
// Subsribes once and Subject multcast it to all subscribers.
// That is why you see one complete.
const subject = new Rx.Subject()
subject.subscribe(observer("a"))
subject.subscribe(observer("b"))

const sub3 = source.subscribe(subject)
