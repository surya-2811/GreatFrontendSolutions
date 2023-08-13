# Get

### Problem

https://www.greatfrontend.com/questions/javascript/get

#

### Problem Description

Before the optional chaining operator `(?.)` existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

```
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

function getFirstName(user) {
  return user.profile.name.firstName;
}

```

Doing` getFirstName(john)` works but `getFirstName(jane)` will error because the name property doesn't exist for `jane.profile`.

### Examples

```
get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined

```

#

### Solution

[Get](./get/get.js)