# getElementsByTagName

### Problem

https://www.greatfrontend.com/questions/javascript/get-elements-by-tag-name

#

### Problem Description

`getElementsByTagName()` is a method which exists on the Document and Element objects and returns an HTMLCollection of descendant elements within the Document/Element given a tag name.

Let's implement our own Element.`getElementsByTagName()` that is similar but slightly different:

- It is a pure function which takes in an element and a tag name string.
- Like Element.`getElementsByTagName()`, only descendants of the specified element are searched, not the element itself.
- Return an array of Elements, instead of an HTMLCollection of Elements.


### Examples

```
const document = new DOMParser().parseFromString(
  `<div id="foo">
    <span>Span</span>
    <p>Paragraph</p>
    <div id="bar">Div</div>
  </div>`,
  'text/html',
);

getElementsByTagName(document.body, 'div');
// [div#foo, div#bar] <-- This is an array of elements.


```

#

### Solution

[getElementsByTagName](./getElementsByTagName.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
