class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // Filter out vertex2 from the adjacency list of vertex1
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );

      // Filter out vertex1 from the adjacency list of vertex2
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );

      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        let temp = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, temp);
      }
      delete this.adjacencyList[vertex];
      return this;
    }
    return false;
  }
}

let myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");

myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("A", "C");
myGraph.removeVertex("A");

console.log(myGraph);
