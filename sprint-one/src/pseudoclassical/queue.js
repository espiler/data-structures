var Queue = function() {
  this.storage = {};
  this.len = 0;
  this.oldest = 0;
  this.newest = 0;
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.newest] = val;
  this.len++;
  this.newest++;
};

Queue.prototype.dequeue = function() {
  if (this.len > 0) {
    var result = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.len--;
    this.oldest++;
    return result;
  }
}

Queue.prototype.size = function() {
  return this.len;
}


