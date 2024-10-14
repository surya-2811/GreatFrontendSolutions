/**
 * Solution - 1
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
 let res = [];
 value.forEach((item)=>{
  if(Array.isArray(item)){
    res = res.concat(flatten(item))
   }else{
    res.push(item)
   }
 })

 return res
}

// Single-level arrays are unaffected.
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// Inner arrays are flattened into a single level.
console.log(flatten([1, [2, 3]])); // [1, 2, 3]
console.log(flatten([
  [1, 2],
  [3, 4],
])); // [1, 2, 3, 4]

// Flattens recursively.
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]