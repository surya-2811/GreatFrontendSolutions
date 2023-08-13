# Compact

### Problem

https://www.greatfrontend.com/questions/javascript/compact

#

### Problem Description

Implement a function `compact(array)` that creates an array with all falsey values removed. The values `false, null, 0, '', undefined, and NaN` are falsey (you should know this by heart!).


### Arguments

`array` (Array): The array to compact.

### Returns
(Array): Returns the new array of filtered values.


```
compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
compact(['hello', 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]

```


#

### Solution

[Compact](./compact/compact.js)