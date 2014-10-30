var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    linkedListNode = makeNode(value);
    if(list.tail !== null){
      list.tail.next = linkedListNode;
    }
    if(list.head === null){
      list.head = linkedListNode;
    }
    list.tail = linkedListNode;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    for(var key in list){
      if(list[key].value === target )
        return true;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
