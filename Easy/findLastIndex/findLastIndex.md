# Find Last Index

### Problem

https://www.greatfrontend.com/questions/javascript/find-last-index

#

### Problem Description

Implement a function `findLastIndex(array, predicate, [fromIndex=array.length-1])` that takes an array of values, a function predicate, and an optional fromIndex number argument, and returns the index of the last element in the array that satisfies the provided testing function predicate. The elements of the array are iterated from `right to left`.

### Arguments

1. `array` (Array): The array to inspect.
2. `predicate` (Function): The function invoked per iteration. The function is invoked with three  arguments: (value, index, array).
3. `[fromIndex=array.length-1]` (number): The index to search from.

### Returns

(number): Returns the index of the found element, else -1.

### Examples

```
const arr = [5, 4, 3, 2, 1];

// Search for the last value in the array that is greater than 3 and return the index.
findLastIndex(arr, (num) => num > 3); // => 1

// Start searching from index 3 (inclusive).
findLastIndex(arr, (num) => num > 1, 3); // => 3

// Start searching from index 3 (inclusive).
findLastIndex(arr, (num) => num < 1, 3); // => -1

```

#

### Solution

[Find Last Index](./findLastIndex.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
