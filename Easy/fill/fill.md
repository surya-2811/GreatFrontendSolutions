# Fill

### Problem

https://www.greatfrontend.com/questions/javascript/fill

#

### Problem Description

Implement a function `fill(array, value, [start=0], [end=array.length])` that fills an array with values from `start` up to, but not including, `end`.

Note: This method mutates `array`.

### Arguments

1. `array` (Array): The array to fill.
2. `value` (*): The value to fill array with.
3. `[start=0]` (number): The start position.
4. `[end=array.length]` (number): The end position.

### Returns
(Array): Returns array.


```
fill([1, 2, 3], 'a'); // ['a', 'a', 'a']
fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
fill([4, 6, 8, 10, 12], '*', -3, -1); // [4, 6, '*', '*', 12]

```
Make sure to handle negative indices and out of bound indices.

#

### Solution

[Fill](./fill.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
