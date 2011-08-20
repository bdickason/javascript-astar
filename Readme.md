A* Pathing implementation for NodeJS in Coffeescript
(Forked from bgrins' awesome Javascript implementation via MIT License)

Uses a Binary Heap for speeeeeed!

Usage:
Graph = (require './graph').Graph
astar = (require './astar.js').astar

graph = new Graph 10
start = graph.nodes[5][5]
end = graph.nodes[9][9]

path = astar.search graph.nodes, start, end


To run the tests:
npm install
cake tests