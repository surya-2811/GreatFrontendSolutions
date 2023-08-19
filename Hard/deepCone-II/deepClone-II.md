# Deep Clone II

### Problem

https://www.greatfrontend.com/questions/javascript/deep-clone-ii

#

### Problem Description

It is not realistic to expect candidates to produce a complete deep clone solution in typical interview settings, though the interviewer might ask you a simple version a la Deep Clone and engage you in a discussion regarding the edge cases and how you would handle them.

Implement a deepClone function that performs a deep clone as thoroughly as possible, while also handling the following:

- The input object can contain any data type.
- Handle the edge case where the input object is cyclic, i.e. the circular references should also be cloned.

### Examples

```

const obj1 = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: 'foo', id: 1 },
  arr: [0, 1, 2],
  date: new Date(),
  reg: new RegExp('/bar/ig'),
  [Symbol('s')]: 'baz',
};

const clonedObj1 = deepClone(obj1);
clonedObj1.arr.push(3);
obj1.arr; // Should still be [0, 1, 2]

const obj2 = { a: {} };
obj2.a.b = obj2; // Circular reference

const clonedObj2 = deepClone(obj2); // Should not cause a stack overflow by recursing into an infinite loop.

clonedObj2.a.b = 'something new';

obj2.a.b === obj2; // This should still be true


```

#

### Solution

[Deep Clone II](./deepClone-II.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
