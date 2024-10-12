
/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
function dropWhile(array, predicate) {
   let index = 0;
   while(index <=array.length -1 && predicate(array[index])){
    index ++
   }
   return array.slice(index)
}  

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3)); // => [3, 4, 5]
console.log(dropWhile([1, 2, 3], (value) => value < 6)); // => []
