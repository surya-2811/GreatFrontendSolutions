# Resumable Interval

### Problem

https://www.greatfrontend.com/questions/javascript/resumable-interval

#

### Problem Description

Implement a function createResumableInterval, that acts like setInterval and has the exact same signature. However instead of returning a timer ID, it returns an object that contains three methods:

- `start`: Runs the callback immediately and every delay milliseconds.
- `pause`: Pauses the interval so that it stops running. Execution can be resumed by calling start() again.
- `stop`: Stops the interval permanently, cannot be restarted.

```
createResumableInterval(callback);
createResumableInterval(callback, delay);
createResumableInterval(callback, delay, param1);
createResumableInterval(callback, delay, param1, param2);
createResumableInterval(callback, delay, param1, param2, /* … ,*/ paramN);

```


### Example

```
let i = 0;
// t = 0:
const interval = createResumableInterval(() => {
  i++;
}, 10);
// t = 10:
interval.start(); // i is now 1.
// t = 20: callback executes and i is now 2.
// t = 25:
interval.pause();
// t = 30: i remains at 2 because interval.pause() was called.
// t = 35:
interval.start(); // i is now 3.
// t = 45: callback executes and i is now 4.
// t = 50:
interval.stop(); // i remains at 4.

```

#

### Solution

[Resumable Interval](./resumableInterval.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
