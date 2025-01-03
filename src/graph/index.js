class Vertex {
  #id;
  #connectedTo;

  constructor(key) {
    this.#id = key;
    this.#connectedTo = new Map();
  }

  addNeighbor(nbrId, weight = 0) {
    this.#connectedTo.set(nbrId, weight);
  }

  getConnections() {
    return this.#connectedTo.keys();
  }

  getWeight(nbrId) {
    this.#connectedTo.get(nbrId);
  }

  get id() {
    return this.#id;
  }
}

class Graph {
  #adjacencyList;
  #numVertices;

  constructor() {
    this.#adjacencyList = new Map();
    this.#numVertices = 0;
  }

  addVertex(key) {
    this.#numVertices = this.#numVertices + 1;

    const newVertex = new Vertex(key);

    this.#adjacencyList.set(key, newVertex);

    return newVertex;
  }

  getVertices() {
    return this.adjacencyList.keys();
  }

  getVertex(node) {
    if (this.adjacencyList.has(node)) {
      return this.adjacencyList.get(node);
    } else {
      return null;
    }
  }

  addEdge(fromNodeKey, toNodeKey, cost = 0) {
    if (!this.adjacencyList.has(fromNodeKey)) {
      this.addVertex(fromNodeKey);
    }

    if (!this.adjacencyList.has(toNodeKey)) {
      this.addVertex(toNodeKey);
    }

    const toNode = this.adjacencyList.get(fromNodeKey);
    const fromNode = this.adjacencyList.get(toNodeKey);

    toNode.addNeighbor(fromNode.id, cost);
  }

  get adjacencyList() {
    return this.#adjacencyList;
  }
}

module.exports = {
  Graph,
  Vertex,
};
