// --------------------------------SETUP---------------------------------------//

// describe the problem
  // nodes are connected to one another, undirected
  // a node can be connected to itself
  // clone the graph, return a copy of the origin node

/*
  0 - 1
   \  /
     2
    /_\
*/

const { assert } = require('../helpers.js');

function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = [];
}

// --------------------------------FUNCTIONS---------------------------------------//

const cloneGraph = (graph, seen = new Map()) => {
  if (!graph) {
    return null;
  }

  const N = new UndirectedGraphNode(graph.label);
  seen.set(graph.label, N);
  N.neighbors = graph.neighbors.map((neighbor) => {
    return seen.get(neighbor.label) || cloneGraph(neighbor, seen);
  });

  return N;
};

// --------------------------------TESTING---------------------------------------//
const zero = new UndirectedGraphNode(0);
const one = new UndirectedGraphNode(1);
const two = new UndirectedGraphNode(2);

zero.neighbors.push(one);
zero.neighbors.push(two);
one.neighbors.push(zero);
one.neighbors.push(two);
two.neighbors.push(one);
two.neighbors.push(zero);
two.neighbors.push(two);

const clone = cloneGraph(zero);
assert('label copied correctly', 0, clone.label);
assert('chldren labels copied correctly', [1, 2], clone.neighbors.map(n => n.label).sort());
assert('pointers back to parent in child 1', true, clone.neighbors[0].neighbors.includes(clone));
assert('pointers back to parent in child 2', true, clone.neighbors[1].neighbors.includes(clone));
assert('pointers in 1 node also to two', true, clone.neighbors[1].neighbors.includes(clone.neighbors[0]));
assert('points in node 2 back to itself', true, clone.neighbors[1].neighbors.includes(clone.neighbors[1]));
