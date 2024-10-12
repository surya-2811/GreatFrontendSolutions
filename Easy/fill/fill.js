
/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */

function fill(array, value, start = 0, end = array.length) {
  let length = array.length;
  if(start < 0){
    start = -start >length ? 0 : start + length
  }
  if(end > length){
    end = length +1
  }
  if(end < 0){
    end = end + length
  }
   for(let i = start; i< end; i++){
    array[i] = value
   }
  return array
}
  
console.log(fill([1, 2, 3], 'a')); // ['a', 'a', 'a']
console.log(fill([4, 6, 8, 10], '*', 1, 3)); // [4, '*', '*', 10]
console.log(fill([4, 6, 8, 10, 12], '*', -3, -1)); // [4, 6, '*', '*', 12]
