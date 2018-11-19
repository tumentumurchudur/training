class BTree {
  public children = [];

  constructor(public data: number) {
    this.data = data;
  }
}

const hm = new Map<number, number>();

// Breadth first traversal
function findMaxWidth(root: BTree): void {
  const marker = new BTree(0);
  const queue = [root, marker];
  let level = 0;
  let sum = 0;

  while(queue.length) {
    const node = queue.shift();

    if (node.children.length) {
      queue.push(...node.children, marker);
    }

    if (node !== marker) {
      hm.set(level, sum += node.data);
    } else {
      sum = 0;
      level++;
    }
  }
}

function findMaxWidth2(root: BTree): void {
  const queue = [root];
  const queueNodes = [];
  let maxSum = 1;

  while(queue.length) {
    const node = queue.shift();

    queueNodes.push(...node.children);
    let sum = 0;

    while(queueNodes.length) {
      queueNodes.shift();
      sum++;
    }

    if (sum > maxSum) {
      maxSum = sum;
    }

    queue.push(...node.children);
  }
}
