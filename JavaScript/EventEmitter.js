class Emitter {
  constructor() {
    this.callbacks = [];
    this.subscription = {
      event: null,
      release: function() {
        const callbacks = this.getCallbacks().filter(cb => cb.event !== this.event);

        this.setCallbacks(callbacks);
      }
    }
  }

  getCallbacks() {
    return this.callbacks
  }

  setCallbacks(callbacks) {
    this.callbacks = callbacks
  }

  subscribe(event, callback) {
    this.callbacks.push({ event, callback });

    return Object.assign({}, this.subscription, { event });
  }

  emit(event, ...args) {
    for (const obj of this.callbacks) {
      if (obj.event === event) {
        obj.callback(...args);
        break;
      }
    }
  }
};

const myEmitter = new Emitter();
const sub = myEmitter.subscribe('event-1', function(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3)
});
myEmitter.emit('event-1', 'foo1', 100, 200);
sub.release();
myEmitter.emit('event-1', 'foo2', 300, 400);
