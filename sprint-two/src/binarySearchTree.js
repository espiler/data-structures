var makeBinarySearchTree = function(value){
  var binaryST = Object.create(binarySearchTreeMethods);
  binaryST.left = null;
  binaryST.right = null;
  binaryST.value = value;
  return binaryST;
};

var binarySearchTreeMethods = {

  insert: function(value){
    if(value < this.value){
      this.left ? this.left.insert(value) :
        this.left = makeBinarySearchTree(value);
    }
    if(value > this.value){
      this.right ? this.right.insert(value) :
        this.right = makeBinarySearchTree(value);
    }
  },

  contains: function(value){
    if(value === this.value){
      return true;
    }
    if(value < this.value){
      return this.left ? this.left.contains(value) : false;
    }
    if(value > this.value){
      return this.right ? this.right.contains(value) : false;
    }
  },

  depthFirstLog: function (callback){
    callback(this.value);
    if(this.left){
      this.left.depthFirstLog(callback);
    }
    if(this.right){
      this.right.depthFirstLog(callback);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 depthFirstLog: O(n)
 insert: O(log n)
 contains: O(log n)
 */
