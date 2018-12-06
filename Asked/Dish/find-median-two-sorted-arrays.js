// Find median of two sorted array of different lengths
function medianOfTwoSortedArrays(x, y) {
	const z = x.concat(y).sort((a, b) => a - b);
	const mid = Math.floor(z.length / 2);

	return z.length % 2 === 0 ? (z[mid] + z[mid - 1]) / 2 : z[mid];
}

function Statistics() {
  return {
    median(nums) {
      const sortedNums = [...nums.sort((a, b) => a - b)];
      const mid = Math.floor(sortedNums.length / 2);

      return sortedNums.length % 2 === 0 ?
        (sortedNums[mid - 1] + sortedNums[mid]) / 2 :
        sortedNums[mid];
    },
    mean(nums) {
      return nums.reduce((x, y) => x + y) / nums.length;
    },
    mode(nums) {
      let dict = {};

      for (const num of nums) {
        if (dict[num]) {
          dict[num]++;
        } else {
          dict[num] = 1;
        }
      }

      let maxVal = Number.MIN_SAFE_INTEGER;
      let maxKey = null;

      for (const key in dict) {
        if (dict[key] > maxVal) {
          maxVal = dict[key];
          maxKey = key;
        }
      }

      return { key: maxKey, value: maxVal };
    }
  };
}

let x = [12, 3, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4];
let stat = new Statistics();

console.log(`Median: ${stat.median(x)}`);

console.log(`Mean: ${stat.mean(x)}`);

const mode = stat.mode(x);
console.log(`Mode: key:${mode.key}, value:${mode.value}`)
