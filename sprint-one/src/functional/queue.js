var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startIndex = 0;
  var endIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[endIndex] = value;
    endIndex++;
  };

  someInstance.dequeue = function() {
    var item;
    if ((endIndex - startIndex) > 0) {
      item = storage[startIndex];
      startIndex++;
    }
    return item;
  };

  someInstance.size = function() {
    return endIndex - startIndex;
  };

  return someInstance;
};

/* Queue Refreshment
  FILO

  myStack.enqueue('apple')  =>  |apple|
  myStack.enqueue('banana') =>  |apple|banana|
  myStack.enqueue('cherry') =>  |apple|banana|cherry|
  myStack.dequeue()         =>        |banana|cherry|
  myStack.enqueue('apple')  =>        |banana|cherry|apple|

  I need 2 pointers!
*/
