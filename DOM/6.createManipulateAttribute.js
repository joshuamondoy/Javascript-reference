/*to show the details upon click*/
const button = document.querySelector(".button");
const text = document.querySelector(".paragraph");
button.addEventListener('click', e => {
    text.style.cssText = "background: coral"
    console.log(e) /*this will only show the detail after the event*/
});

/*To get the attribute like id class tittle or name*/
console.log(button.getAttribute("class")); /*This will get the class name attribute*/
console.log(button.getAttribute("id")); /*Displays the id name attribute*/

text.setAttribute('style', 'background: royalblue');

/*To remove*/
// text.removeAttribute('style', 'background: royalblue')

/*To check if an element have some specific attribute*/
console.log(text.hasAttribute("style")); /*this will output true since we already set an attribute style above*/