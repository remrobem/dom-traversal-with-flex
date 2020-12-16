const parentDOM = document.getElementById("container");

// use spread to get iterable object
const children = [...parentDOM.getElementsByClassName("child")];

// map or forEach
children.map((child, index) => {
  child.innerHTML = index;
  child.style.backgroundColor = index % 2 === 0 ? "yellow" : "purple";
  return child;
});

// change color on parent who has a child text = 2
const parents = parentDOM.querySelectorAll(".parent");

parents.forEach((element) => {
  // const children = element.querySelectorAll(".child");
  const children = [...element.children];
  children.forEach((child) => {
    if (child.innerHTML == "2") {
      element.style.backgroundColor = "aqua";
    }
  });
});

// get all child classes and look at parent and change color
const getAllChild = parentDOM.querySelectorAll(".child");
getAllChild.forEach((element) => {
  if (element.innerHTML == "1") {
    element.parentElement.style.backgroundColor = "brown";
  }
  //use closest to go up
  console.log("Current element: ", element.innerHTML);
  console.log("Closest parent: ", element.closest(".parent"));
  console.log("Closest grandparent: ", element.closest(".grandparent"));
});

// get sibling
const firstChild = parentDOM.querySelector(".child");
firstChild.nextElementSibling.style.backgroundColor = "silver";