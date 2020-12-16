# dom-traversal-with-flex

A Pen created on CodePen.io. Original URL: [https://codepen.io/robem/pen/bGwqQLV](https://codepen.io/robem/pen/bGwqQLV).
~~~
const parentDOM = document.getElementById("container");

// need to get to iterable object
[...parentDOM.getElementsByClassName("child")];

parentDOM.querySelectorAll(".parent")

parentDOM.querySelector(".parent")

element.children
[...element.children]

element.closest(".parent"))

firstChild.nextElementSibling;
secondChild.previousElementSibling;
~~~
