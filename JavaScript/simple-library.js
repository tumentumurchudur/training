function SimpleLib() {
  const addClass = function(className) {
    setTimeout(() => {
      this.element.classList.add(className);
    }, this.queue.shift() || 0);

    return this;
  }

  const removeClass = function(className) {
    setTimeout(() => {
      this.element.classList.remove(className);
    }, this.queue.shift() || 0);

    return this;
  }

  const delay = function(d) {
    this.queue.push(d);
    return this;
  }

  return function(selName) {
    element = document.querySelector(selName);

    return {
      queue: [],
      element,
      addClass,
      removeClass,
      delay
    }
  }
}

const _$ = new SimpleLib()

_$("#hello")
  .addClass("blue")
  .addClass("bg-lime")
  .removeClass("blue")
  .delay(1000)
  .addClass("bold")
