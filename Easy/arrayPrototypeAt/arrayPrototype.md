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

Clearly this is the same tree structure but only in object literal.

Now you are asked to serialize/deserialize the DOM tree, like what React does.

**Note**

**Functions like event handlers and custom components are beyond the scope of this problem, you can ignore them**, just focus on basic HTML tags.

You should support:

1. TextNode (string) as children
2. single child and multiple children
3. camelCased properties

`virtualize()` takes in a real DOM tree and create an object literal. `render()` takes in a object literal presentation and recreate a DOM tree.

#

### Solution

arrayPrototypeAt.js