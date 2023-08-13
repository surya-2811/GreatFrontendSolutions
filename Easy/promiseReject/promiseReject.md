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