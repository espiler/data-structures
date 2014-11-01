var HashTable = function(){
  this._size = 0;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[index]){
    //create bucket array
    this._storage[index] = [];
  }
  this._storage[index].push({ key: k, val: v});
  this._size++;
  if(this._size > this._limit * 0.75){
      this.resize(2);
    }
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index].length === 0) {
    return null;
  }
  for(var i = 0; i < this._storage[index].length; i++){
    if (!this._storage[index][i]) {
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
      this._storage[index].splice(i,1);
      this._size--;
    }
  }
  if(this._size <= this._limit * 0.25 && this._limit > 8){
    this.resize(0.5);
  }
};

HashTable.prototype.resize = function(factor){
  this._limit *= factor;
  var copy = this._storage;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
  var props = Object.keys(copy);
  for (var k=0; k<props.length; k++) {
    for (var i=0; i<copy[props[k]].length; i++) {
      this.insert(copy[props[k]][i].key, copy[props[k]][i].val);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
