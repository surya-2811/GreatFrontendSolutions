/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */

function inRange(value, startParam, endParam) {
    let start = startParam;
    let end = endParam;
    if (end === undefined) {
      end = start;
      start = 0;
    }
  
    if (start < end) {
      return value >= start && value < end;
    }
  
    return value >= end && value < start;
}
  

inRange(3, 2, 4); // => true
inRange(4, 8); // => true
inRange(4, 2); // => false
inRange(2, 2); // => false
inRange(1.2, 2); // => true
inRange(5.2, 4); // => false
inRange(-3, -2, -6); // => true
