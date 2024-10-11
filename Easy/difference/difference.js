/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
function difference(array, values) {
  return array.filter(item => !values.includes(item))
}
 
console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]