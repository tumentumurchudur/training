// Implement stack using queue
//    [1, 5, 3] => stack
// <= [1 ,5, 3]
// queueA = []
// queueB = [5, 10]
// lastElement = 15
class Stack {
  constructor() {
    this.queueA = new Queue()
    this.queueB = new Queue()
    this.size = 0
  }

  push(value) {
    this.queueA.enqueue(value)
    this.size++
  }

  pop() {
    if (this.size === 0) {
      return null
    }

    while (this.queueA.size() > 1) {
      const data = this.queueA.dequeue()

      this.queueB.enqueue(data)
    }
    const lastElement = this.queueA.dequeue()

    while (this.queueB.size() > 0) {
      this.queueA.enqueue(this.queueB.dequeue())
    }

    this.size--
    return lastElement
  }
}

//---------------------------------------------------------
// queueA = []
// queueB = [50, 40, 10, 15, 20]
class Stack {
  constructor() {
    this.queueA = new Queue()
    this.queueB = new Queue()
    this.size = 0
  }

  push(value) {
    this.size++;

    // Push value first in empty queueA
    // Keep queueA empty for this to work.
    this.queueA.push(value);

    // Push all the remaining elements from B to A.
    while (!this.queueB.empty()) {
      this.queueA.push(this.queueB.front());
      this.queueB.pop();
    }

    // swap the names of two queues
    const tempQueue = this.queueA;
    this.queueA = this.queueB;
    this.queueB = this.queueA;
  }

  pop() {
    if (this.queueB.empty())
      return

    this.queueB.pop();
    this.size--;
  }
}
