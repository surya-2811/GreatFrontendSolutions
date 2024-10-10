Array.prototype.myAt = function(index){
   if(index < 0){
    console.log(index)
    index = index + this.length
   }
   console.log(index)
   if(index < 0 || index >= this.length)return
   return this[index]
}


const arr = [42, 79];
console.log(arr.myAt(0)); // 42
console.log(arr.myAt(1)); // 79
console.log(arr.myAt(2)); // undefined

console.log(arr.myAt(-1)); // 79
console.log(arr.myAt(-2)); // 42
console.log(arr.myAt(-3)); // undefined
