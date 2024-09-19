// Selecting a single element by ID
let heading = document.getElementById('main-heading');
console.log(heading.textContent);  // Output: Hello, World!



// Selecting multiple elements by class (HTMLCollection)
let paragraphs = document.getElementsByClassName('text');
console.log(paragraphs);  // Output: HTMLCollection of <p> elements



// Selecting the first matching element using querySelector
let firstParagraph = document.querySelector('.text');
console.log(firstParagraph.textContent);  // Output: This is a paragraph with a class "text".



// Selecting multiple elements using querySelectorAll (NodeList)
let allParagraphs = document.querySelectorAll('.text');
allParagraphs.forEach(p => console.log(p.textContent));



// Selecting all <li> elements by tag name (HTMLCollection)
let listItems = document.getElementsByTagName('li');
console.log(listItems);  // Output: HTMLCollection of <li> elements
