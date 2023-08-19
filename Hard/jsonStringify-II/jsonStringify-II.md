# JSON.Stringify II

### Problem

https://www.greatfrontend.com/questions/javascript/json-stringify-ii

#

### Problem Description

Implement your a `jsonStringify` function that converts a JavaScript value into a JSON string, similar to JSON.stringify.

- You may ignore the second and the third optional parameters in the original API.
- The function should behave exactly like JSON.stringify() for any data type. Refer to the examples below.
- Other cases:
  - Cyclic references: throw `TypeError('Converting circular structure to JSON')`.
  - BigInt: throw `TypeError('Do not know how to serialize a BigInt')`.

### Examples


```
jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar",bar:[1,2,3]}'

jsonStringify(); // undefined
jsonStringify(undefined); // undefined
jsonStringify(null); // 'null'
jsonStringify(true); // 'true'
jsonStringify(false); // 'false'
jsonStringify(1); // '1'
jsonStringify(Infinity); // 'null'
jsonStringify(NaN); // 'null'
jsonStringify('foo'); // '"foo"'
jsonStringify('"foo"') === '"\\"foo\\""'; // Double quotes present in the original input are escaped using backslashes
jsonStringify(Symbol('foo')); // undefined
jsonStringify(() => {}); // undefined
jsonStringify(['foo', 'bar']); // '["foo","bar"]'
jsonStringify(/foo/); // '{}'
jsonStringify(new Map()); // '{}'
jsonStringify(new Set()); // '{}'


```

#

### Solution

[JSON.Stringify II](./jsonStringify-II.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
