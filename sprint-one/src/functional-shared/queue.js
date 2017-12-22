var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {
    _internal: {
      _startIndex: 0,
      _endIndex: 0,
      _storage: {}
    }
  };

  for(var key in queueMethods) {
    queueInstance[key] = queueMethods[key];
  }

  return queueInstance;
};

var queueMethods = {
  enqueue: function(item) {
    var internal = this._internal;
    var storage = this._internal._storage;
    storage[internal._endIndex] = item;
    internal._endIndex++;
  },
  dequeue: function() {
    var internal = this._internal;
    var storage = this._internal._storage;
    var item;
    if ((internal._endIndex - internal._startIndex) > 0) {
      item = storage[internal._startIndex];
      internal._startIndex++;
    }
    return item;
  },
  size: function() {
    return this._internal._endIndex - this._internal._startIndex;
  }
};

/*
  No comments
*/
