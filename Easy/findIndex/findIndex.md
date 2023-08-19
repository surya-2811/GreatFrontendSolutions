# Find Index

### Problem

https://www.greatfrontend.com/questions/javascript/find-index

#

### Problem Description

Implement a function `findIndex(array, predicate, [fromIndex=0])` that takes an array of values, a function `predicate`, and an optional `fromIndex` number argument, and returns the index of the first element in the array that satisfies the provided testing function `predicate`.

```
findIndex(array, predicate, [(fromIndex = 0)]);
```

### Arguments

1. `array` (Array): The array to inspect.
2. `predicate` (Function): The function invoked per iteration. The function is invoked with three  arguments: (value, index, array).
3. `[fromIndex=0]` (number): The index to search from.

### Returns
(number): Returns the index of the found element, else -1.


### Examples

```
const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
findIndex(arr, (num) => num > 3); // => 3

// Start searching from index 3 (inclusive).
findIndex(arr, (num) => num > 3, 4); // => 4

// No such element exists.
findIndex(arr, (num) => num > 10, 3); // => -1

```

#

### Solution

[Find Index](./findIndex.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
