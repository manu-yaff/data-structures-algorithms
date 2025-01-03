const { Graph, Vertex } = require('./index');

describe(Graph.name, () => {
  describe(Graph.prototype.addVertex.name, () => {
    it('should add new vertex', () => {
      // Arrange
      const graph = new Graph();
      const key = '1';

      // Act
      graph.addVertex(key);

      // Assert
      expect(graph.adjacencyList.size).toBe(1);
      expect(graph.adjacencyList.has(key)).toBe(true);
    });

    it('should not add vertex that is already in the graph', () => {
      // Arrange
      const graph = new Graph();
      const key = '1';
      graph.addVertex(key);

      // Act
      graph.addVertex(key);

      // Assert
      expect(graph.adjacencyList.size).toBe(1);
      expect(graph.adjacencyList.has(key)).toBe(true);
    });
  });

  describe(Graph.prototype.getVertex.name, () => {
    it('should return value for the given key', () => {
      // Arrange
      const graph = new Graph();
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);

      // Act
      const vertex = graph.getVertex(2);

      // Assert
      expect(vertex).toBeInstanceOf(Vertex);
      expect(vertex.id).toBe(2);
    });

    it('should return null for a key that does not exist in the graph', () => {
      // Arrange
      const graph = new Graph();
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);

      // Act
      const vertex = graph.getVertex(10);

      // Assert
      expect(vertex).toBe(null);
    });
  });

  describe(Graph.prototype.addEdge.name, () => {
    it('should add between existing nodes', () => {
      // Arrange
      const graph = new Graph();
      graph.addVertex(1);
      graph.addVertex(2);

      const v1Connections = graph.getVertex(1).getConnections();

      // Act
      graph.addEdge(1, 2, 100);

      // Assert
      expect(Array.from(v1Connections).includes(2)).toBe(true);
    });

    it('should add between nodes and create vertices if they do not exist', () => {
      // Arrange
      const graph = new Graph();

      const graphVertices = graph.getVertices();

      // Act
      graph.addEdge(1, 2, 100);

      // Assert
      const v1Connections = graph.getVertex(1).getConnections();

      expect(Array.from(graphVertices)).toEqual([1, 2]);
      expect(Array.from(v1Connections).includes(2)).toBe(true);
    });
  });

  describe(Graph.prototype.getVertices.name, () => {
    it('should return graph vertices', () => {
      // Arrange
      const graph = new Graph();
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);

      // Act
      const vertices = graph.getVertices();

      // Assert
      expect(Array.from(vertices)).toEqual([1, 2, 3]);
    });
  });
});
