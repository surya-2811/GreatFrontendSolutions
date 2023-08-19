# Array.prototype.at

### Problem

https://www.greatfrontend.com/questions/javascript/array-at

#

### Problem Description

Array.prototype.at takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

Implement Array.prototype.at. To avoid overwriting the actual Array.prototype.at, we shall instead implement it as Array.prototype.myAt.

```
const arr = [42, 79];
arr.myAt(0); // 42
arr.myAt(1); // 79
arr.myAt(2); // undefined

arr.myAt(-1); // 79
arr.myAt(-2); // 42
arr.myAt(-3); // undefined

```

#

### Solution

[Array.prototype.at](./arrayPrototypeAt.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
