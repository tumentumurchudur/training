function SimpleLib() {
  const addClass = function(className) {
    const delay = this.queue.shift();

    if (delay && delay > 0) {
      setTimeout(() => {
        this.element.classList.add(className);
      }, delay);
    } else {
      this.element.classList.add(className);
    }
    return this;
  }

  const removeClass = function(className) {
    const delay = this.queue.shift();

    if (delay && delay > 0) {
      setTimeout(() => {
        this.element.classList.remove(className);
      }, delay);
    } else {
      this.element.classList.remove(className);
    }
    return this;
  }

  const delay = function(delay) {
    this.queue.push(delay);
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
