# jQuery Class Manipulation

### Problem

https://www.greatfrontend.com/questions/javascript/jquery-class-manipulation

#

### Problem Description

Before `Element.classList` and `DOMTokenList` were part of the browser standards, it was a hassle to manipulate classes on a DOM element.

jQuery is a library that simplifies DOM manipulation (among other things). jQuery (using the $ alias function), provided convenient APIs to toggle, add, and remove classes from elements via 
`.toggleClass()`, `.addClass()` and `.removeClass()`.

```
 // <button class="foo bar">Click me</button>
$('button').toggleClass('bar'); // <button class="foo">Click me</button>
$('button').addClass('baz'); // <button class="foo baz">Click me</button>
$('button').removeClass('foo'); // <button class="baz">Click me</button>
$('button').toggleClass('bar'); // <button class="baz bar">Click me</button>

```

The return value of most jQuery manipulation APIs is the jQuery object itself so that method calls can be chained. The above can be further simplified again:

```
// <button class="foo bar">Click me</button>
$('button')
  .toggleClass('bar')
  .addClass('baz')
  .removeClass('foo')
  .toggleClass('bar');
// <button class="baz bar">Click me</button>

```

Implement the toggleClass(), addClass() and removeClass() methods according to the following specifications. Do not use Element.classList and methods to manipulate DOMTokenList otherwise the problem becomes quite trivial.

`toggleClass(className, state)`

Add or remove one or more classes from the matched element, depending on either the class's presence or the value of the state argument.

| Parameter |	Type |	Description |
| ---------- |-------- | ----------- |
| className | string	| One or more classes (separated by spaces) to be toggled for the matched element.|
| state| boolean | An optional boolean value to determine whether the class(es) should be added or removed.|

`addClass(className)`

| Parameter |	Type |	Description |
| ---------- |-------- | ----------- |
| className | string	| One or more classes (separated by spaces) to be added to the matched element.|


`removeClass(className)`

| Parameter |	Type |	Description |
| ---------- |-------- | ----------- |
| className | string	| One or more classes (separated by spaces) to be removed from the matched element.|

#

### Solution

[jQuery Class Manipulation](./jqueryClassManipulation.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
