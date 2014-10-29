var makeQueue = function(){
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var newest = 0;
  var oldest = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[newest] = value;
    count++;
    newest++;
  };

  someInstance.dequeue = function(){
    if(count > 0){
      var result = storage[oldest];
      delete storage[oldest];
      count--;
      oldest++;
      return result;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};



