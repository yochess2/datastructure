var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var index = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    var item;
    if (index > 0) {
      item = storage[index-1];
      index--;
    }
    return item;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};

/* Notes
  As a beginner, a functional class is easy to understand. The lack of "this" helps a ton.
  Another benefit is functional classes take advantage of closures. I can access private
  variables.

  The bad thing about a functional class is every new instance creates multiple methods,
  which all can just be simplifed into one container.
*/
