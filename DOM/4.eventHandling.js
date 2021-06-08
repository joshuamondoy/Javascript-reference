/*---Event Handling---*/
const heading = document.querySelector("#heading");
const list = document.querySelectorAll(".list-item");
const btn1 = document.querySelector(".btn1");
btn1.onclick = () => {
    heading.style.cssText = "text-align: center; background: coral";
    for( let i = 0; i < list.length; i++){
    list[i].style.cssText = "background-color: coral; list-style: none;";
}
}
const subTitle = document.querySelector(".subtitle");
const btn = document.querySelector(".btn");
btn.onclick = () => {
    subTitle.style.cssText = "background: red; font-family: sans-serif; text-align: center;"
    subTitle.textContent = "This is done using event on click"
};
subTitle.onmouseover = () => {
    subTitle.style.cssText = "background: yellow; font-family: sans-serif; text-align: center; color: black;"
    subTitle.textContent = "Mouse in hover"
}
subTitle.onmouseout = () => {
    subTitle.style.cssText = "background: green; font-family: sans-serif; text-align: center; color: white;"
    subTitle.textContent = "Mouse is not in hover"
}

//addEventListener("event", function)
const btn3 = document.querySelector(".btn3");
btn3.addEventListener('click', () => {
    subTitle.style.cssText = "background: royalblue; font-family: sans-serif; text-align: center;";
    subTitle.textContent = "This is done using add event listener"
});

//function that will be called by onclick event in button properties
const clickFunction = () => {
    console.log("Clicked!");
    
}
const btn4 = document.querySelector(".btn4");
const par = document.querySelector(".subheading");


