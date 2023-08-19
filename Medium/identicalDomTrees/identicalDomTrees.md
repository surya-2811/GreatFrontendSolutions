# Indentical DOM Trees

### Problem

https://www.greatfrontend.com/questions/javascript/identical-dom-trees

#

### Problem Description

Implement a function `isSameTree` that checks if two DOM trees are identical or not. The function takes two DOM nodes as the root nodes of two DOM trees and returns a boolean result.

Two DOM trees are considered identical if they are structurally similar, and the DOM nodes on one tree have the exact same attributes as the nodes on the same relative position on the other tree.

### Examples

Tree A and Tree B are considered the same.

```
<!-- Tree A -->
<div>Hello World</div>

<!-- Tree B -->
<div>Hello World</div>
```

Tree C and Tree D are considered the different.


```
<!-- Tree C -->
<div class="header">Hello World</div>

<!-- Tree D -->
<div id="foo">Hello World</div>
```

#

### Solution

[Indentical DOM Trees](./identicalDomTrees.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
