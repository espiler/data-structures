var makeStack = function() {
  var stack = Object.create(stackMethods);
  console.log(stack);
  stack._storage = {};
  stack._size = 0;

  return stack;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this._storage[this._size] = val;
  this._size++;
}
stackMethods.pop = function(){
  if (this._size > 0) {
    var result = this._storage[this._size-1];
    delete this._storage[this._size-1];
    this._size--;
    return result;
  }
}
stackMethods.size = function(){
  return this._size
}
