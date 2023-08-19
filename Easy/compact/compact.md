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

[Compact](./compact.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
