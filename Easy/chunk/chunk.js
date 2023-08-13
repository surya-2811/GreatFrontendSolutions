/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
function chunk(array, size = 1) {
    if (!Array.isArray(array) || size < 1) {
      return [];
    }
  
    const result = [];
    let chunk = [];
  
    for (let i = 0; i < array.length; i++) {
      chunk.push(array[i]);
      if (chunk.length === size || i === array.length - 1) {
        result.push(chunk);
        chunk = [];
      }
    }
  
    return result;
}

chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]

  