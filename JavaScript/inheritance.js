// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;

  // this.move = function(x, y) {
  //   this.x += x;
  //   this.y += y;
  //   console.info('Shape moved.');
  // };
}

// superclass method
// same as declare the function on line 6.
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
// Declare Rectangle extending Shape.
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
// Causes instance of Rectangle to be of type Shape.
// rect instanceof Shape; // true
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true

console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true

rect.move(1, 1); // Outputs, 'Shape moved.'
