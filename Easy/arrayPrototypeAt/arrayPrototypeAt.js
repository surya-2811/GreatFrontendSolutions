/**
 * @param {number} index
 * @return {any | undefined}
 */

Array.prototype.myAt = function (index) {
    const len = this.length;
    if (index < -len || index >= len) {
      return;
    }
  
    return this[(index + len) % len];
};  

const arr = [42, 79];
arr.myAt(0); // 42
arr.myAt(1); // 79
arr.myAt(2); // undefined

arr.myAt(-1); // 79
arr.myAt(-2); // 42
arr.myAt(-3); // undefined
