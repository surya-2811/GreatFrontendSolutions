/**
 * Solution - 1
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
    const res = [];
    const copy = value.slice();
  
    while (copy.length) {
      const item = copy.shift();
      if (Array.isArray(item)) {
        copy.unshift(...item);
      } else {
        res.push(item);
      }
    }
  
    return res;
}

/**
 * Solution - 2
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
    return value.reduce(
      (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
      [],
    );
}

/**
 * Solution - 3
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
    for (let i = 0; i < value.length; ) {
      if (Array.isArray(value[i])) {
        value.splice(i, 1, ...value[i]);
      } else {
        i++;
      }
    }
  
    return value;
}
  

/**
 * Solution - 4
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
    return Array.isArray(value) ? value.flatMap((item) => flatten(item)) : value;
}
  
  
  