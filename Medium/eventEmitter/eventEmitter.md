# Event Emitter

### Problem

https://www.greatfrontend.com/questions/javascript/event-emitter

#

### Problem Description

In the observer pattern (also commonly known as the publish-subscribe model), we can observe/subscribe to events emitted by publishers and execute code whenever an event happens.

Implement an EventEmitter class similar to the one in Node.js that follows such an observer pattern.

Example usage of the EventEmitter class:

```
const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);
// > "The sum is 7"

emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);
// > "The product is -27"

```

Implement the following APIs:

`new EventEmitter()`

Creates an instance of the EventEmitter class. Events and listeners are isolated within the EventEmitter instances they're added to, aka listeners shouldn't react to events emitted by other EventEmitter instances.

`emitter.on(eventName, listener)`

Adds a callback function (listener) that will be invoked when an event with the name eventName is emitted.

| Parameter |	Type |	Description |
| ---------- |-------- | ----------- |
| eventName |	string	| The name of the event.|
| listener|	Function |	The callback function to be invoked when the event occurs.|

Returns the EventEmitter instance so that calls can be chained.

`emitter.off(eventName, listener)`

Removes the specified listener from the list of listeners for the event with the name eventName.

| Parameter |	Type |	Description |
| ---------- |-------- | ----------- |
| eventName |	string	| The name of the event.|
| listener|	Function |	Callback function to be removed from the list of listeners for the event.|

Returns the EventEmitter instance so that calls can be chained.

`emitter.emit(eventName[, ...args])`

Invokes each of the listeners listening to eventName with the supplied arguments in order.

| Parameter |	Type |	Description |
| ---------- |-------- | ----------- |
| eventName |	string	| The name of the event.|
| ...args|	any |	Arguments to invoke the list of listener functions with.|

Returns true if the event had listeners, false otherwise.


#

### Solution

[Event Emitter](./eventEmitter.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
