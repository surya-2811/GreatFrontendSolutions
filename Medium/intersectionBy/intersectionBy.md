# Intersection By

### Problem

https://www.greatfrontend.com/questions/javascript/intersection-by

#

### Problem Description

The intersectionBy function takes an iteratee function and multiple arrays as arguments. It creates an array of unique values that are included in all given arrays based on the result of applying the iteratee function to each value. The order and references of result values are determined by the first array.

The iteratee function is invoked with one argument: value, where value is the current value being iterated.

```
intersectionBy(iteratee, ...arrays);

```


### Arguments
1. `iteratee` (Function): The iteratee invoked per element.
2. `arrays` (Array): The arrays to inspect.

### Returns
(Array): Returns the new array of chunks.


### Example

```
// Get the intersection based on the floor value of each number
const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2]

// Get the intersection based on the lowercase value of each string
const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ['apple', 'banana', 'orange'],
  ['Apple', 'Banana', 'Orange'],
);
// => ['apple']

```

#

### Solution

[Intersection By](./intersectionBy.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
