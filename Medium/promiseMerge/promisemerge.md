# Promise Merge

### Problem

https://www.greatfrontend.com/questions/javascript/promise-merge

#

### Problem Description

Implement a function that accepts two promises and returns a single Promise. This returned promise fulfills when both input promises fulfill, with a single value according to the order and types of the fulfillment values:

- Numbers should be added together.
- Strings should be concatenated.
- Arrays should be combined into a single array.
- Plain objects should be merged into a single object.
- Other types aren't supported.

The return promise can also be rejected if one of the following happens:

- The types of the fulfilled results do not match, reject with the string 'Unsupported data types'.
- One of the promises fail, reject with the rejected promise's reason.

### Example

```
await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}

await promiseMerge(Promise.resolve(1), Promise.resolve([])); // Rejected with 'Unsupported data types'
await promiseMerge(Promise.reject(1), Promise.resolve(2)); // Rejected with 1

```

#

### Solution

[Promise Merge](./promiseMerge.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
