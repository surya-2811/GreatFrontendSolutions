# Intersection

### Problem

https://www.greatfrontend.com/questions/javascript/intersection

#

### Problem Description

Implement a JavaScript function `intersection(arrays)` that takes multiple arrays as input and returns a new array containing the unique values that are present in all given arrays `SameValueZero` for equality comparisons. The order and references of result values are determined by the first array.

### Arguments

1. `[arrays]` (...Array): The arrays to perform the intersection on.


### Returns

(Array): Returns a new array containing the unique values present in all given arrays.

### Examples

```
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

intersection(arr1, arr2, arr3); // => [3]

```

#

### Solution

[Intersection](./intersection.js)