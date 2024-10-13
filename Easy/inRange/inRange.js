/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */

function inRange(value, startParam, endParam) {
  let start = startParam;
  let end = endParam;
  if(endParam === undefined){
    start =0;
    end = startParam
  }
  if(value >= start && value <end) return true;
  return value >=end && value < start
}
  

console.log(inRange(3, 2, 4)); // => true
console.log(inRange(4, 8)); // => true
console.log(inRange(4, 2)); // => false
console.log(inRange(2, 2)); // => false
console.log(inRange(1.2, 2)); // => true
console.log(inRange(5.2, 4)); // => false
console.log(inRange(-3, -2, -6)); // => true
