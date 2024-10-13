/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */

function intersection(...arrays) {
  if (!arrays.length) return [];
  let [array, ...restOfArray] = arrays;
  let result = array.filter((item) => {
    return restOfArray.every((array) => {
      return array.includes(item);
    });
  });
  return result;
}
  

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

intersection(arr1, arr2, arr3); // => [3]
