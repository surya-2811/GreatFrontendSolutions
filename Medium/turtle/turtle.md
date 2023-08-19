# Turtle

### Problem

https://www.greatfrontend.com/questions/javascript/turtle

#

### Problem Description

Python comes with a turtle module that is a great graphical way for introducing programming to kids. The turtle starts at (0, 0) on an x-y plane, and you can move the turtle around and change the direction its facing. When the turtle moves, it leaves a line trail behind it that appears on a canvas. With these movement APIs, users can draw shapes and even complex ones by leveraging loops.

Implement a `Turtle` class in JavaScript that simulates the movement of a turtle. The turtle starts at (0, 0) facing north, and has the following methods:

- `forward(distance)`: Moves the turtle forward by distance units in the direction it is facing.
- `backward(distance)`: Moves the turtle backward by distance units while facing the same direction.
- `left()`: Rotates the turtle in-place 90 degrees to the left, changing only the direction it is facing.
- `right()`: Rotates the turtle in-place 90 degrees to the right, changing only the direction it is facing.
- `position()`: Returns the coordinates of the turtle as [x, y].

### Example

```
 const turtle = new Turtle();
turtle.position(); // [0, 0]
turtle.forward(1); // Position: [0, 1]
turtle.backward(1); // Position: [0, 0]
turtle.right(); // Position remains unchanged
turtle.forward(2); // Position: [2, 0] because it moved 2 units to the right.

// Methods can also be chained.
turtle.right().right().forward(5); // Position: [-3, 0] because it turned 180 degrees and moved 5 units forward (towards the left).

```

#

### Solution

[Turtle](./turtle.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
