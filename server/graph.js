(function() {
  /* graph.js from http://github.com/bgrins/javascript-astar
  # 	  MIT License
  #	
  #	    Creates a Graph class used in the astar search algorithm.
  #   	Includes Binary Heap (with modifications) from Marijn Haverbeke
  */  var Graph, GraphNode, GraphNodeType;
  GraphNodeType = {
    OPEN: 0,
    WALL: 1,
    PATH: 8
  };
  exports.Graph = Graph = (function() {
    function Graph(size) {
      var x, y;
      this.nodes = [];
      for (x = 0; 0 <= size ? x < size : x > size; 0 <= size ? x++ : x--) {
        this.nodes[x] = [];
        for (y = 0; 0 <= size ? y < size : y > size; 0 <= size ? y++ : y--) {
          this.nodes[x].push(new GraphNode(x, y, GraphNodeType.OPEN));
        }
      }
      this.nodes;
    }
    Graph.prototype.toString = function() {
      var graphString, nodes, row, rowDebug, x, y, _ref, _ref2;
      graphString = '\n';
      nodes = this.nodes;
      for (x = 0, _ref = nodes.length; 0 <= _ref ? x < _ref : x > _ref; 0 <= _ref ? x++ : x--) {
        rowDebug = '';
        row = nodes[x];
        for (y = 0, _ref2 = row.length; 0 <= _ref2 ? y < _ref2 : y > _ref2; 0 <= _ref2 ? y++ : y--) {
          rowDebug += row[y].type + ' ';
        }
        graphString = graphString + rowDebug + '\n';
      }
      return graphString;
    };
    return Graph;
  })();
  exports.GraphNode = GraphNode = (function() {
    function GraphNode(x, y, type) {
      this.data = {};
      this.x = x;
      this.y = y;
      this.pos = {
        x: x,
        y: y
      };
      this.type = type;
    }
    GraphNode.prototype.toString = function() {
      return '[' + this.x + ' ' + this.y + ']';
    };
    GraphNode.prototype.wall = function() {
      return this.type = GraphNodeType.WALL;
    };
    GraphNode.prototype.path = function() {
      return this.type = GraphNodeType.PATH;
    };
    GraphNode.prototype.isWall = function() {
      return this.type === GraphNodeType.WALL;
    };
    GraphNode.prototype.isPath = function() {
      return this.type === GraphNodeType.PATH;
    };
    return GraphNode;
  })();
}).call(this);
