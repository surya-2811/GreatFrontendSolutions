# In Range

### Problem

https://www.greatfrontend.com/questions/javascript/in-range

#

### Problem Description

Implement a function `inRange(value, [start=0], end)` to check if a number value is between start and up to, but not including, end. If end is not specified, the start argument becomes end and start is set to 0. If start is greater than end the parameters are swapped to support negative ranges.

### Arguments

1. `value` (number): The number to check.
2. `[start=0]` (number): The start of the range.
3. `end` (number): The end of the range (not including).

### Returns

(boolean): Returns true if value is in the range, else false.

### Examples

```
inRange(3, 2, 4); // => true
inRange(4, 8); // => true
inRange(4, 2); // => false
inRange(2, 2); // => false
inRange(1.2, 2); // => true
inRange(5.2, 4); // => false
inRange(-3, -2, -6); // => true
```

#

### Solution

[In Range](./inRange/inRange.js)