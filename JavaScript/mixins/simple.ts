class MyBaseClass {
  bar() {
    console.log("bar from MyBaseClass");
  }
}

let MyMixin = (superclass) => class extends superclass {
  foo() {
    console.log('foo from MyMixin');
  }
};

class MyClass extends MyMixin(MyBaseClass) {
  /* ... */
}

let c = new MyClass();
c.foo(); // prints "foo from MyMixin"
