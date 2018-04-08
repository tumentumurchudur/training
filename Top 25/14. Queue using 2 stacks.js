// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class Queue {
  constructor() {
    this.stackA = new Stack()
    this.stackB = new Stack()
  }

  enqueue(value) {
    this.stackA.push(value)
  }

  dequeue() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop())
    }
    const data = this.stackB.pop()

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop())
    }
    return data
  }
}
