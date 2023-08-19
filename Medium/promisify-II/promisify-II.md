# Promisify II

### Problem

https://www.greatfrontend.com/questions/javascript/promisify-ii

#

### Problem Description

In Promisify, the `promisify` function returns a promise for a function following the common callback-last error-first callback style, i.e. taking a (err, value) => ... callback as the last argument. However, `promisify` does not work for functions that do not follow that exact signature.

In Node.js, using the util.promisify.custom symbol, one can override the return value of util.promisify(), which is useful for cases where the original function does not follow the standard format of taking an error-first callback as the last argument. This is especially useful for functions with a legacy format that's incompatible with util.promisify's callback-last convention.

```
// Example usage in Node.js.
const util = require('node:util');

function doSomething(callback, foo) {
  // ...
}

doSomething[util.promisify.custom] = (foo) => {
  return getPromiseSomehow();
};

const promisified = util.promisify(doSomething);
console.log(promisified === doSomething[util.promisify.custom]);
// prints 'true'

```

Implement a `promisify` function that has support for custom return values. Use the symbol `Symbol('util.promisify.custom')` as the key for the overridden value.

### Example

```
// Example function with callback as the first argument.
// The callback has the signature `(err, value) => any`.
function foo(callback, url, options) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

foo[Symbol('util.promisify.custom')] = (url, options) => {
  return new Promise((resolve, reject) => {
    foo(
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      },
      url,
      options,
    );
  });
};

const promisifiedFoo = foo[Symbol('util.promisify.custom')]; // true
const data = await promisifiedFoo('example.com', { foo: 1 });

```

#

### Solution

[Promisify II](./promisify-II.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
