function uniqueArray(array) {
  const result = [];
  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}

console.log(uniqueArray([1, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 2])); // [1, 2]
console.log(uniqueArray([2, 1, 2])); // [2, 1]
