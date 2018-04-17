// https://jsfiddle.net/41awjgda/415/
// Difference between mergeMap and switchMap
var outer = Rx.Observable.interval(1000).take(2);

/* var source = outer.mergeMap(function (x) {
  return Rx.Observable.interval(500).take(3).map(y => `${x}:${y}`)
}); */

var source = outer.switchMap(function (x) {
  return Rx.Observable.interval(500).take(3).map(y => `${x}:${y}`)
});

source.subscribe(d => console.log(d));

// Marble Diagram
/*
source: -0-------1|
          \       \
inner2:    \       0---1---2|
            \
inner1:      0---1---2|

    mergeMap()

output: -----x---x-x-x-x---x|
*/

// Marble Diagram (switchMap)
/*
source: -0-------1|
          \       \
inner2:    \       0---1---2|
            \
inner1:      0---1---2|

    switchMap()

output: -----x-----x---x---x|
*/