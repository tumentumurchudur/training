// https://jsfiddle.net/5o6yca5s/43/
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
  //.mergeMap(val => service.loadResources(val))
  //.switchMap(val => service.loadResources(val))
  //.concatMap(val => service.loadResources(val))
  //.exhaustMap(val => service.loadResources(val))
  .subscribe(result => console.log(result))

  /*
    mergeMap()
    source: ----0----1----2----3
                |    |    |    |
                |    |    |    -------------------
                |    |    ----------
                |    --------------------
                ----------

            -------------0---------2----1--------3
  */

  /*
    switchMap()
    source: ----0----1----2----3
                |    |    |    |
                |    |    |    -------------------
                |    |    -----
                |    -----
                -----

            --------------------------------------3
  */

  /*
    concatMap()
    source: ----0----1----2----3
                |    |    |    |
                |    |    |                             -------------------
                |    |                        ----------
                |         --------------------
                ----------

            -------------0--------------------1--------2-------------------3
  */

  /*
    exhaustMap()
    source: ----0----1----2----3
                |    |    |    |
                |    |    |
                |    |    ----------
                |
                ----------

            -------------0---------2
  */
