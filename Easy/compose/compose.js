/**
 * Solution -1
 * @param {...Function} args
 * @returns Function
 */

function compose(...fns) {
    return function (x) {
      let result = x;
  
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
  
      return result;
    };
  }

  
/**
 * Solution - 2
 * @param {...Function} args
 * @returns Function
 */

function compose(...fns) {
    return function (x) {
      return fns.reduceRight((result, func) => func(result), x);
    };
  }
  

const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
composedFn(3); // (3 + 1) * 2 - 10 => -2

