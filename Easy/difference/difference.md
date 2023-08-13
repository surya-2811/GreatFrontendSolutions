# Difference

### Problem

https://www.greatfrontend.com/questions/javascript/difference

#

### Problem Description

Implement a function `difference(array, values)` that creates an array of array values not included in the other given arrays using `SameValueZero` for equality comparisons. The order and references of result values are determined by the first array.

### Arguments

1. array (Array): The array to inspect.
2. values (Array): The values to exclude.

### Returns
(Array): Returns the new array of filtered values.


```
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]

```

The function should return the original array values if values is empty.

```

difference([1, 2, 3], []); // => [1, 2, 3]

```


#

### Solution

[Difference](./difference/difference.js)