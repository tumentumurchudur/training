class Emitter {
  constructor() {
    this.callbacks = [];
    this.subscription = {
    	event: null,
      release: function() {
 				this._removeCallback(this.event);
      },
      _removeCallback: (event) => {
        this.callbacks = this.callbacks.filter(cb => cb.event !== event)
      }
    }
  }

  subscribe(event, fn) {
    this.callbacks.push({ event, fn });

    return { ...this.subscription, event };
  }

  emit(event, ...args) {
    for (const obj of this.callbacks) {
      if (obj.event === event) {
        obj.fn(...args);
        break;
      }
    }
  }
}

const myEmitter = new Emitter();
const sub = myEmitter.subscribe('event-1', function(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3)
});
myEmitter.emit('event-1', 'foo1', 100, 200);
sub.release();
myEmitter.emit('event-1', 'foo2', 300, 400);
