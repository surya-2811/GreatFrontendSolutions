function get(object, path) {
  const keys = path.split('.');
  let current = object;
  for(let key of keys){
    if(current === undefined || current === null){
      return undefined
    }
    current = current[key]
  }
  return current;
}


const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(john, 'profile.gender')); // 'Male'
console.log(get(jane, 'profile.name.firstName')); // undefined