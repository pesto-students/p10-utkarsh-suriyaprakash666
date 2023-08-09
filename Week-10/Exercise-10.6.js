function allPathsSourceTarget(graph) {
  const paths = [];
  const target = graph.length - 1;

  dfs(0, [0]);

  function dfs(node, path) {
    if (node === target) {
      paths.push([...path]);
      return;
    }

    for (let nextNode of graph[node]) {
      path.push(nextNode);
      dfs(nextNode, path);
      path.pop();
    }
  }

  return paths;
}

// Example 1
const graph1 = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph1));
// Output: [[0, 1, 3], [0, 2, 3]]

// Example 2
const graph2 = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph2));
// Output: [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]]
