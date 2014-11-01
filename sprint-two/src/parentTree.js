var makeParentTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value, this){
  var subTree = makeParentTree(value, this);
  this.children.push(subTree);
};

treeMethods.removeFromParent = function() {
  this.parent.splice(this.parent.indexOf(this),1);
  this.parent = null;
}

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
    return true;
  } else {
    if(this.children.length > 0){
      for(var i = 0; i < this.children.length; i++){
        result = this.children[i].contains(target);
        if(result){ return result; }
      }
    }
  }
  return result;
};

treeMethods.traverse = function(callback){
  callback(this.value);
  if (this.children.length > 0){
    this.children.forEach(function(el){
      el.traverse(callback);
    };
  }
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
