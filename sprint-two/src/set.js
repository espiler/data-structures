var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  for (var i=0; i<this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  this._storage.splice(index,1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
