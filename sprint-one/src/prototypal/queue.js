var makeQueue = function() {
  var queue = Object.create(queueMethods);
  queue._storage = {};
  queue._size = 0;
  queue._newest = 0;
  queue._oldest = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this._storage[this._newest] = val;
  this._newest++;
  this._size++;
};

queueMethods.dequeue = function(){
  if (this._size > 0){
    var result = this._storage[this._oldest];
    delete this._storage[this._oldest];
    this._oldest++;
    this._size--;
    return result;
  }
};

queueMethods.size = function() {
  return this._size;
}
