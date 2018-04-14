// This is how Observable function works.

// Producer
class DataSource {
  constructor() {
    let i = 0
    this._id = setInterval(() => { this.emit(i++) }, 250)
  }

  emit(n) {
    const limit = 5

    if (this.ondata) {
      this.ondata(n)
    }

    if (n === limit) {
      if (this.oncomplete) {
        this.oncomplete()
      }
      this.destroy()
    }
  }

  destroy() {
    clearInterval(this._id)
  }
}

// Observable function that connects Producer to Observer.
const myObservable = function(observer) {
  const ds = new DataSource()

  ds.ondata = d => observer.next(d)
  ds.oncomplete = d => observer.complete()
  ds.onerror = err => observer.error(err)

  return () => {
    ds.destroy()
  }
}

// Use of Observable function.
const subs = myObservable({
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('complete')
})
