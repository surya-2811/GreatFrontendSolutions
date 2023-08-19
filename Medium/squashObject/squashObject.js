const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

/**
 * @param {Object} obj
 * @param {Array} path
 * @param {Object} output
 * @return {Object}
 */ function squashObject(object, path = [], output = {}) {
  for (const [key, value] of Object.entries(object)) {
    if (typeof value !== "object" || value === null) {
      output[path.concat(key).filter(Boolean).join(".")] = value;
    } else {
      squashObject(value, path.concat(key), output);
    }
  }

  return output;
}
