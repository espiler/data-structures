var makeQueue = function(){
  var queue = {};
  queue._storage = {};
  queue._size = 0;
  queue._newest= 0;
  queue._oldest= 0;
  extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(val){
    this._storage[this._newest] = val;
    this._size++;
    this._newest++;
  },
  dequeue: function(){
    if (this._size > 0) {
      var result = this._storage[this._oldest];
      delete this._storage[this._oldest];
      this._oldest++;
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
