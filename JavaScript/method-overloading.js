// using Function.prototype.length, it allows us
// to overload methods with different signatures
function addMethod(object, name, fn) {
  // Reference to old function
  const oldMethod = object[name]

  object[name] = function() {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments)
    } else if (typeof oldMethod === 'function') {
      return oldMethod.apply(this, arguments)
    }
  }
}

function Ninja() {
  let ninjas = [
    'Brian Hannan',
    'Jason Sweat',
    'Erick Granados',
    'Ulziijargal Baatarkhuu',
    'Ricardo Bustamante'
  ]

  addMethod(this, 'find', function() {
    return ninjas
  })

  addMethod(this, 'find', function(first) {
    // ...
  })

  addMethod(this, 'find', function(first, last) {
    // ...
  })
}

const ninjas = new Ninja()
ninjas.find()
ninjas.find('Brian')
ninjas.find('Brian', 'Hannan')
