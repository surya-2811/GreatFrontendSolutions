/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
function compact(array) {
  const result =[]
  for(let i=0; i<array.length; i++){
    let value = array[i]
   if(value){
    result.push(array[i])
   }
  }
  return result
}

console.log(compact([0, 1, false, 2, '', 3, null])); // => [1, 2, 3]
console.log(compact(['hello', 123, [], {}, function () {}])); // => ['hello', 123, [], {}, function() {}]

  