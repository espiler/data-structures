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
  if(this._size === this._limit - 1){
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
      if (this._storage[index].length === 0) {}
      this._size--;
      if(this._size === this._limit / 2 - 2 && this._limit > 8){
        this.resize(0.5);
      }
    }
  }
};

HashTable.prototype.resize = function(factor){
  this._limit *= factor;
  this.rehash();
}

HashTable.prototype.rehash = function(){
  var copy = this._storage;

  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
  for(var prop in copy){
    for (var i=0; i<copy[prop].length; i++) {
      this.insert(copy[prop][i].key, copy[prop][i].val);
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
