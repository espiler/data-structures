var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[index]){
    this._storage[index] = [];
  }
  this._storage[index].push({ key: k, val: v});
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this._storage[index].length; i++){
    if (this._storage[index][i] === null) {
      return null;
    } else if(this._storage[index][i].key === k) {
      return this._storage[index][i].val;
    }
  }
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this._storage[index].length; i++){
    if(this._storage[index][i].key === k){
      this._storage[index][i] = null;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
