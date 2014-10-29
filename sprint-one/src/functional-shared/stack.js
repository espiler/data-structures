var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack._storage = {};
  stack._size = 0;
  extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function(val) {
    this._storage[this._size] = val;
    this._size++;
  },
  pop: function(){
    if (this._size > 0) {
      var result = this._storage[this._size-1];
      delete this._storage[this._size-1];
      this._size--;
      return result;
    }
  },
  size: function(){
    return this._size;
  }
};


var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};
