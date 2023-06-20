function validPath(n, edges, source, destination) {
  const graph = new Map();

  for (let [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  const visited = new Array(n).fill(false);
  return dfs(graph, source, destination, visited);
}

function dfs(graph, node, destination, visited) {
  if (node === destination) {
    return true;
  }

  visited[node] = true;
  if (graph.has(node)) {
    for (let neighbor of graph.get(node)) {
      if (!visited[neighbor]) {
        if (dfs(graph, neighbor, destination, visited)) {
          return true;
        }
      }
    }
  }

  return false;
}

const n1 = 3;
const edges1 = [
  [0, 1],
  [1, 2],
  [2, 0],
];
const source1 = 0;
const destination1 = 2;
console.log(validPath(n1, edges1, source1, destination1)); // Output: true

const n2 = 6;
const edges2 = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];
const source2 = 0;
const destination2 = 5;
console.log(validPath(n2, edges2, source2, destination2)); // Output: false
