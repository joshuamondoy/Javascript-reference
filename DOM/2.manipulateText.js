/* Manipulate text*/
//getElementById is use to select single element in html by id
const headings = document.getElementById("heading");
// every element in dom is an object
// console.log(typeof heading);

// /*text content return the text same as how it is displayed in html format*/
//return only text even the hidden text
const list = document.getElementById("list");
console.log(list.textContent);

// /*innerHtml returns the same as text content but you can use it as well to render html tags on the text*/
//also innerHTML return the html tags with the text
//copy paste the text together with the tags and element attributes
const list2 = document.getElementById("list");
console.log(list.innerHTML);

/*innerText return only the text and it cant return hidden text*/
/*innerText return the text same as how it is displayed in webpage*/
const list3 = document.getElementById("list");
console.log(list3.innerText);

/*to manipulate text*/
headings.textContent = "I changed this in js file";
const orderList = document.querySelectorAll(".list-item");
orderList[2].textContent = "I also changed this list in js file";
