var Graph = function(){
  var graph = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  //debugger;
  if(Object.keys(this).length === 1){
    onlyNode = Object.keys(this)[0];
    this[newNode] = {};
    this.addEdge(newNode, onlyNode);
  } else {
    this[newNode] = {};
  }
  if(toNode){
    this.addEdge(newNode, toNode)
  }
};

Graph.prototype.contains = function(node){
  return (this[node]) ? true : false;
};

Graph.prototype.removeNode = function(node){
  for(var n in this[node]) {
    this.removeEdge(node, n);
  }
  delete this[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return (this[fromNode][toNode]) ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode][toNode] = true;
  this[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
  if(Object.keys(this[fromNode]).length === 0) { delete this[fromNode]; }
  if(Object.keys(this[toNode]).length === 0) { delete this[toNode]; }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
