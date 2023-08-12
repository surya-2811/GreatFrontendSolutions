
/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
function dropWhile(array, predicate) {
    let index = 0;
  
    while (index < array.length && predicate(array[index], index, array)) {
      index++;
    }
  
    return array.slice(index);
}  

dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []
