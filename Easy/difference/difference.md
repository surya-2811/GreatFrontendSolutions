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

[Difference](./difference.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
