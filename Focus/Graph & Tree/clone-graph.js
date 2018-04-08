// Recursive solution
// O(N)
function cloneGraph(node) {
  let map = new Map()

  return dfs(node, map)
}

function dfs(node, map) {
  if (node === null) return null

  if (map.has(node.label)) {
    return map.get(node.label)
  } else {
    let clone = new Node(node.label)
    map.set(node.label, clone)

    for (let i = 0; i < node.neighbors.size(); i++) {
      clone.neighbors.add(
        dfs(node.neighbors.get(i), map)
      )
    }
    return clone
  }
}
