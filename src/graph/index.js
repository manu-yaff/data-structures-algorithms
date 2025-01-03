class Vertex {
  #id;
  #connectedTo;

  constructor(key) {
    this.#id = key;
    this.#connectedTo = new Map();
  }

  /**
   * Adds a neighbor to the current vertex
   * @param {number} nbrId The neighbor key who will be added
   * @param {number} weight The cost to reach the given neighbor
   */
  addNeighbor(nbrId, weight = 0) {
    this.#connectedTo.set(nbrId, weight);
  }

  /**
   * Gets the connections of the current vertex. The connections are the keys
   * of the map used to store the neighbors
   * @returns {Iterable} The vertices' ids to which the node is connected to
   */
  getConnections() {
    return this.#connectedTo.keys();
  }

  /**
   * Gets the cost to go from current vertex to the given neighbor
   * @returns {number} The cost
   */
  getWeight(nbrId) {
    this.#connectedTo.get(nbrId);
  }

  /**
   * Retrieves the current vertex key
   * @returns {number} The vertex key
   */
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

  /**
   *
   * @param {number} startingVertex The initial vertex to start the bfs
   * @returns {Array<number>} Array with the vertices in the order they were
   * process. Just for testing purposes
   */
  bfs(startingVertex) {
    const result = [];
    const visited = new Map();
    const queue = [];

    // add the initial vertex to the queue and to the visited store
    visited.set(startingVertex);
    queue.push(startingVertex);

    // explore all neighbors of a node first, and then repeat until queue is empty
    while (queue.length > 0) {
      const currentVertex = queue.shift();

      result.push(currentVertex); // only to visualized the process

      // explore adjacent vertices
      for (const neighbor of this.#adjacencyList
        .get(currentVertex)
        .getConnections()) {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  get adjacencyList() {
    return this.#adjacencyList;
  }
}

module.exports = {
  Graph,
  Vertex,
};
