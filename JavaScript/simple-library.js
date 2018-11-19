function _$(key) {
  let element = null;

  if (key[0] === "#") {
    element = document.getElementById(key.substr(1));
  } else {
    element = document.querySelector(key);
  }

  return {
    queue: [],
    element,
    addClass,
    removeClass,
    delay
  };
}

function addClass(className) {
  setTimeout(() => {
    this.element.classList.add(className);
  }, this.queue.shift() || 0);

  return this;
}

function removeClass(className) {
  setTimeout(() => {
    this.element.classList.remove(className);
  }, this.queue.shift() || 0);

  return this;
}

function delay(d) {
  this.queue.push(d);
  return this;
}

/*
_$("#hello")
.addClass("blue")
.addClass("bg-lime")
.removeClass("blue")
.delay(1000)
.addClass("bold")
*/

