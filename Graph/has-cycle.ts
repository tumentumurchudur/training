// Finds a cycle if there is any in the given graph.
function hasCycle(graph) {
    let whiteSet = []; // all vertices in the graph
    let greySet = []; // vertices being explored
    let blackSet = []; // vertices done explored

    // Adds all vertices to whiteSet, so we can start exploring them.
    for(const node of graph.getAllNodes()) {
      whiteSet.push(node);
    }

    while(whiteSet.length) {
      const current = whiteSet.pop();

      // Explore current vertex and check if it has a cycle
      if (dfs(current, whiteSet, greySet, blackSet)) {
        return true;
      }
    }
    return false;
  }

  // Helper recursive function
  function dfs(current, whiteSet, greySet, blackSet) {
    // Move current node from whiteSet to greySet, so it can be explored
    moveNode(current, whiteSet, greySet);

    // Get neighbors of current and explore them
    for(const neighbor of current.getNeighboringNodes()) {
      // Check neighbor is explored
      if (blackSet.contains(neighbor)) continue;

      // Cycle found
      if (greySet.contains(neighbor)) return true;

      dfs(neighbor, whiteSet, greySet, blackSet);
    }

    // Done with current node, so move it to blackSet
    moveNode(current, greySet, blackSet);

    return false;
  }

  // Helper function
  function moveNode(node, fromSet, toSet) {
      // moves node from fromSet to toSet
  }
