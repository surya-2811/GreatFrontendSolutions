function uniqueArray(array) {
    const result = [];
  
    array.forEach((item) => {
      if (!result.includes(item)) {
        result.push(item);
      }
    });
  
    return result;
}

uniqueArray([1, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]
