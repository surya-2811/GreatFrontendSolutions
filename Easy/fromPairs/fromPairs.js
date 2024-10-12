

// Solution - 1

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */
function fromPairs(pairs) {
  let result ={};
  for(let [key, value] of pairs){
    result[key] = value
  }
  
    return result;
}

const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];
console.log(fromPairs(pairs)); // => { a: 1, b: 2, c: 3 }
  