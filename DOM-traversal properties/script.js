// Select the target element (third paragraph)
const targetElement = document.getElementById('target');

// 1. Parent Node
const parent = targetElement.parentNode;
console.log('Parent Node:', parent); // Logs the div with id="content"

// 2. Children of the Parent Node
const children = parent.children;
console.log('Children of Parent Node:', children); // Logs an HTMLCollection of all paragraph elements inside the div with id="content"

// 3. First Child Element
const firstChild = parent.firstElementChild;
console.log('First Child Element:', firstChild); // Logs the first paragraph element

// 4. Last Child Element
const lastChild = parent.lastElementChild;
console.log('Last Child Element:', lastChild); // Logs the fourth paragraph element

// 5. Next Sibling Element
const nextSibling = targetElement.nextElementSibling;
console.log('Next Sibling Element:', nextSibling); // Logs the fourth paragraph element

// 6. Previous Sibling Element
const previousSibling = targetElement.previousElementSibling;
console.log('Previous Sibling Element:', previousSibling); // Logs the second paragraph element

// 7. Accessing Parent of Parent Node
const grandParent = parent.parentNode;
console.log('Grandparent Node:', grandParent); // Logs the div with id="container"
