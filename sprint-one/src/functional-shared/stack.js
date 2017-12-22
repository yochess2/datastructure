var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {
    _internal: {
      _index: 0,
      _storage: {}
    }
  };

  for(var key in stackMethods) {
    stackInstance[key] = stackMethods[key];
  }

  return stackInstance;
};

var stackMethods = {
  push: function(item) {
    var internal = this._internal;
    var storage = this._internal._storage;
    storage[internal._index] = item;
    internal._index++;
  },
  pop: function() {
    var internal = this._internal;
    var storage = this._internal._storage;
    var item;
    if (internal._index > 0) {
      item = storage[internal._index-1];
      internal._index--;
    }
    return item;
  },
  size: function() {
    console.log(this)
    return this._internal._index;
  }
};

/*
  Functional-shared had me confused. I forgot how this works. I went ahead and looked at
  examples and realized I needed to use "this".

  "this" in this case is easy to understand. When I invoke a new instance:
    var myStack = Stack();
  'myStack' will have several methods that uses 'this'. 'this' in all these examples
  belongs to 'myStack'.

  I'm trying to thnk if I ever will need to invoke bind, and I am unsure atm. I'll figure
  this out as I continue along as I think it becomes an issue under trees.

  The advantage is the methods now are just re-used for every new instance.
  The drawback however is that the private methods aren't private. I used the convention
  of adding "_" before a variable to have the user know the variable is private.
*/
