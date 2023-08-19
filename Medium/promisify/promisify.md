# Promisify

### Problem

https://www.greatfrontend.com/questions/javascript/promisify

#

### Problem Description

Before `promises,/async/await` became the standard, it was a convention for async APIs in JavaScript to accept callbacks as the last argument. Many async versions of Node.js APIs (e.g. `fs.readFile` and `fs.rm`) have such signatures. Node.js' `util.promisify` function was created to wrap around callback-based functions by returning Promises so that they can be used with async/await.

Implement a function promisify that takes a function following the common callback-last error-first style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.



### Example

```
// Example function with callback as last argument
// The callback has the signature `(err, value) => any`
function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
const data = await promisifiedFoo('example.com', { foo: 1 });


```

#

### Solution

[Promisify](./promisify.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
