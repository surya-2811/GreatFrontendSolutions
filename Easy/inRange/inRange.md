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

[In Range](./inRange.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
