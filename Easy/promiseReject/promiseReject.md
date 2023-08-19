# Promise Reject

### Problem

https://www.greatfrontend.com/questions/javascript/promise-reject

#

### Problem Description

Unlike `Promise.resolve()`, `Promise.reject()` always wraps `reason` in a new `Promise` object, even when `reason` is already a Promise.

Implement the `Promise.reject()` function as `promiseReject`. You can ignore the case where this is referenced within the implemented function.


### Examples

```
try {
  promiseReject('Mayday!');
} catch (err) {
  console.log(err); // Mayday!
}


```

#

### Solution

[Promise Reject](./promiseReject.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
