const hashMap = new Map<number, number>();
const root = null;

function findVerticalSum(hm: Map<number, number>, horizontalDist: number, root): void {
  if (root === null) {
    return;
  }

  findVerticalSum(hm, horizontalDist - 1, root.left);

  const prevSum = hm.has(horizontalDist) ? hm.get(horizontalDist) : 0;
  hm.set(horizontalDist, prevSum + root.data);

  findVerticalSum(hm, horizontalDist + 1, root.right);
}

findVerticalSum(hashMap, 0, root);
hashMap.forEach((val, key) => console.log(`${key}-${val}`));
