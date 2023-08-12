/**
 * @param {*} value
 * @return {string}
 */
function jsonStringify(value) {
    if (Array.isArray(value)) {
      const arrayValues = value.map((item) => jsonStringify(item));
      return `[${arrayValues.join(',')}]`;
    }
  
    if (typeof value === 'object' && value !== null) {
      const objectEntries = Object.entries(value).map(
        ([key, value]) => `"${key}":${jsonStringify(value)}`,
      );
      return `{${objectEntries.join(',')}}`;
    }
  
    if (typeof value === 'string') {
      return `"${value}"`;
    }
  
    return String(value);
  }
  

jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar","bar":[1,2,3]}'
jsonStringify({ foo: true, bar: false }); // '{"foo":true,"bar":false}'
