// Mock service that takes a while to return.
const service = {
  loadResources: (val) => {
  	return new Promise(resolve => {
      setTimeout(() => {
        resolve(val + ' => Hello World')
      }, val % 2 === 0 ? 500 : 1000)
    })
  }
}

Rx.Observable.interval(250)
  .take(4)
  //.concatMap(val => service.loadResources(val)) // same as mergeMap but the order is preserved
  //.mergeMap(val => service.loadResources(val))  // merges everything on all streams
  //.switchMap(val => service.loadResources(val)) // switches on latest stream
  .exhaustMap(val => service.loadResources(val))  // ignores stream while inner stream is pending. Opposite of switchMap
  .subscribe(result => console.log(result))
