/**
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {string} source Source node to start traversal from. Has to be a valid node if graph is non-empty.
 * @return {string[]} A DFS-traversed order of nodes.
 */

function depthFirstSearch(graph, source) {
  // If there are no nodes in the graph, just return an empty array
  if (Object.keys(graph).length === 0) {
    return [];
  }

  // Initialize a set that tracks visited nodes.
  const visited = new Set();

  function traverse(node) {
    // Visited before, we can ignore.
    if (visited.has(node)) {
      return;
    }

    visited.add(node);
    // Recursively visit each neighbor.
    graph[node].forEach((neighbor) => {
      traverse(neighbor);
    });
  }

  // Start traversing from the source.
  traverse(source);

  // The visited nodes is the traversal order.
  return Array.from(visited);
}

const graph1 = {
  A: ["B", "C", "D"],
  B: ["E", "F"],
  C: ["G", "H"],
  D: ["I", "J"],
  E: ["D"],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};
depthFirstSearch(graph1, "A"); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
depthFirstSearch(graph1, "B"); // ['B', 'E', 'D', 'I', 'J', 'F']

const graph2 = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F", "G"],
  D: [],
  E: [],
  F: [],
  G: [],
};
depthFirstSearch(graph2, "A"); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
depthFirstSearch(graph2, "E"); // ['E']
