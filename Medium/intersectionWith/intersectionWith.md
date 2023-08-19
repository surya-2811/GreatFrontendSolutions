# Intersection With

### Problem

https://www.greatfrontend.com/questions/javascript/intersection-with

#

### Problem Description

The intersectionWith function takes a custom comparator function and multiple arrays as arguments. It compares the elements of the arrays using the comparator function to determine equality. The function returns a new array containing the elements that are present in all given arrays.

```
intersectionWith(comparator, ...arrays);

```


### Arguments
1. `comparator` (Function): The comparator function used to determine equality between elements. The function will be invoked with two arguments (arrVal, othVal) representing the two elements being compared. It should return true if the elements are considered equal, and false otherwise.
2. `arrays` (...Array): The arrays to inspect.

### Returns
(Array): Returns the new array of chunks.


### Example

```
const arr1 = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
];
const arr2 = [
  { y: 2, x: 1 },
  { x: 3, y: 4 },
];

const result = intersectionWith(
  (a, b) => a.x === b.x && a.y === b.y,
  arr1,
  arr2,
); // => [{ x: 1, y: 2 }]

```

#

### Solution

[Intersection With](./intersectionWith.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
