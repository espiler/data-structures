var max = 18;
var set = makeSet();
var bitMap = new Array(max);
bitMap.forEach(function(el){
  el = false;
})


var bloomHash1 = function(input){
  var hash = 0;
  input = String(input);
  for (var i = 0; i < input.length; i++) {
    hash = (hash<<5) + hash + input.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  return hash % max;
};

var bloomHash2 = function(input){
  var hash = 0;
  input = String(input);
  for (var i = 0; i < input.length; i++) {
    hash = (hash<<8) + hash + input.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
var bloomHash3 = function(input){
  var hash = 0;
  input = String(input);
  for (var i = 0; i < input.length; i++) {
    hash = (hash<<5) - hash + input.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};
var setPrototype = {};

setPrototype.add = function(item){
  bitMap[bloomHash1(item)] = true;
  bitMap[bloomHash2(item)] = true;
  bitMap[bloomHash3(item)] = true;
  this._storage.push(item);
};

setPrototype.contains = function(item){
  for (var i=0; i<this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  if (bitMap[bloomHash1(item)] && bitMap[bloomHash2(item)] && bitMap[bloomHash3(item)]){
    var index = this._storage.indexOf(item);
    this._storage.splice(index,1);
  } else {
    alert('Bloom Filter says: "Definitely not in set!"');
  }
};

/** TESTS **/

for (var i=0; i<31; i++) {
  set.add(i);
}

