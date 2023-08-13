/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
function compact(array) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
  
      // Skip falsey values
      if (value) {
        result.push(value);
      }
    }
  
    return result;
}

compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
compact(['hello', 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]

  