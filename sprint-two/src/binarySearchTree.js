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
  },

  breadthFirstLog: function(){
    var now = [this];
    var next = [];
    while(now.length > 0){
      for(var i = 0; i < now.length; i++){
        console.log(now[i].value);
        if(now[i].left !== null){
          next.push(now[i].left);
        }
        if(now[i].right !== null){
          next.push(now[i].right);
        }
      }
      now = next;
      next = [];
    }
  }

};


var tree = makeBinarySearchTree(5);
tree.insert(10);
tree.insert(1);
tree.insert(15);
tree.insert(8);
tree.insert(0);
tree.insert(3);
tree.insert(6);
tree.insert(9);

/*
 * Complexity: What is the time complexity of the above functions?
 depthFirstLog: O(n)
 insert: O(log n)
 contains: O(log n)
 */
