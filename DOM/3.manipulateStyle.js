/* Manipulate style*/
const style1 = document.querySelector("#heading");
style1.style.color = "white";
style1.style.background = "coral";

/*Select single element and loop for multiple element*/
const list = document.querySelectorAll(".list-item");
// console.log(list);
for( let i = 0; i < list.length; i++){
    list[i].style.color = "red";
}
//manipulate with multiple style
for(let i = 0; i < list.length; i++){
    list[i].style.cssText = "font-size: 25px; background-color: pink; list-style: none; font-family: sans-serif";
}
//set a class for an element and call it from the css file
let heading = document.querySelector("#sub-heading");
heading.className = "changeBG";
//add class for an element and call it from css file(this one can overwrite)
heading.classList.add("change-color");
//to remove
// heading.classList.remove("change-color");
