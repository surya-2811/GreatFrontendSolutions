# Compose

### Problem

https://www.greatfrontend.com/questions/javascript/compose

#

### Problem Description

Implement a function `compose` that takes multiple functions as arguments and returns a new function that applies those functions in reverse order. The output of one function becomes the input of the next function, creating a chain of function compositions.

If there are no functions passed to the `compose` function, the default behavior is to return a new function that simply returns the input it receives. In other words, the default behavior of `compose` without any functions results in a simple identity function.

You may assume that all the functions accept a single parameter.


```
const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
composedFn(3); // (3 + 1) * 2 - 10 => -2

```


#

### Solution

[Compose](./compose.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
