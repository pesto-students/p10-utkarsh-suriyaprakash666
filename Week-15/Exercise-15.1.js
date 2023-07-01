class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdges(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdges(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList(vertex)) {
      return;
    }
    for (let adjacencyList in this.adjacencyList[vertex]) {
      this.removeEdges(vertex, adjacencyList);
    }
    delete this.adjacencyList[vertex];
  }

  display() {
    for (let vertex in this.adjacencyList) {
      const edges = [...this.adjacencyList[vertex]];
      if (edges.length > 0) {
        console.log(vertex + " -> " + edges.join(", "));
      } else {
        console.log(vertex);
      }
    }
  }
}

const graph = new Graph();

const vertices = [0, 1, 2];
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];

vertices.forEach((vertex) => graph.addVertex[vertex]);
edges.forEach(([vertex1, vertex2]) => graph.addEdges(vertex1, vertex2));

graph.display();
console.log(graph.hasEdges(0, 2));
