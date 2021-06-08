/*Dom navigation*/

//.parent is use to navigate to the parent element
const listItem = document.querySelector("#list-item");
//this will display the nearest parent of an element
// console.log(listItem.parentNode);
// console.log(listItem.parentNode.parentNode);
// console.log(listItem.parentNode.parentNode.parentNode);

//.child and children is use to navigate to child element
//this will display the nearest child of an element
const list = document.querySelector(".list");
// //this will get even the white space
// console.log(list.childNodes); 
// //this will get only the children
// console.log(list.children);
// //this will get the first child 
// console.log(list.firstChild);
// //this will only get the child element of an element
// console.log(list.firstElementChild);

//this is also use to navigate to child element of an element using the child element itself
//nextElementSibling will get the next sibling element after the selected sibling
// console.log(listItem.nextElementSibling);
//previousElementSibling will get the previous sibling element before the selected sibling
// console.log(listItem.previousElementSibling.textContent);

//create an element and text inside it
//create new li here
const newEl = document.createElement("li");
//create text for the li here
const text = document.createTextNode("Project");
//combine here
newEl.appendChild(text);
//add the new list item to the ul parent element
list.appendChild(newEl);
//to select the location of the child where it will be inserted
list.insertBefore(newEl, list.children[0]);
//to delete
// list.removeChild(newEl);

//or
newEl.textContent = "Project";
list.append(newEl);




