// Longest Substring - at most 2 distinct characters
// gadfff => dfff => 4
// O(n)
function find(s) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = 0
  }

  let start = 0
  let end = 0
  let maxLen = 0
  let counter = 0

  while (end < s.length) {
    let c1 = s[end]

    if (map[c1] === 0) counter++
    map[c1]++
    end++

    while (counter > 2) {
      let c2 = s[start]

      if (map[c2] === 1) counter--
      map[c2]--
      start++
    }
    maxLen = Math.max(maxLen, end - start);
  }
  return maxLen
}
