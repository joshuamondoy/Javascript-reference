const body = document.querySelector("body");
const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//the output in the console is called event bubbling
//each time we click the child element it also display the parent and grand parent because it is the closest element and since this two is also inside it technically
//the pattern is from the child to the parent to grand parent and so on
//capture on the other hand is the opposite of bubbling, parent element first going to child
body.addEventListener('click', e => {
    console.log("Body Buble")
});
body.addEventListener('click', e => {
    console.log("Body Capture")
},{capture: true});
grandParent.addEventListener('click', e => {
    console.log("Grand Parent Bubble")
});
grandParent.addEventListener('click', e => {
    console.log("Grand Parent Capture")
},{capture: true});
parent.addEventListener('click', e => {
    console.log("Parent Bubble")});
parent.addEventListener('click', e => {
    console.log("Parent Capture")
},{capture: true});
//the function stopPropagation will break the cycle of either buble or capture phase
child.addEventListener('click', e => {
    console.log("Child Bubble")
    e.stopPropagation()
});
child.addEventListener('click', e => {
    console.log("Child Capture")
},{capture: true});
