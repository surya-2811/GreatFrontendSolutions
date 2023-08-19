# HTML Serializer

### Problem

https://www.greatfrontend.com/questions/javascript/html-serializer

#

### Problem Description

Given an object which resembles a DOM tree, implement a function that serializes the object into a formatted string with proper indentation (one tab per nesting level) and one tag per line.


### Examples

```
const tree = {
  tag: 'body',
  children: [
    { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
    { tag: 'div', children: ['baz'] },
  ],
};

serializeNode(tree);
// Output:
`<body>
	<div>
		<span>
			foo
			bar
		</span>
	</div>
	<div>
		baz
	</div>
</body>`;

```

#

### Solution

[HTML Serializer](./htmlSerializer.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
