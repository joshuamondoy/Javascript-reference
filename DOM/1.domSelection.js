/*---DOM selection---*/
// getElementById is use to select single element in html by id or by tag
const variable = document.getElementById("heading");
// query selector is use to select tag or class and id like css it use # for id and . for class
// it can only select one element (example is when you select li it will only get the first li value)
// ideal for selecting id's
const variable1 = document.querySelector("#heading");
// query selector all selects tags or class and id like query selector but it is use to select mulitple element (like all the li opon selecting li)
// ideal for selecting class
const variable2 = document.querySelectorAll(".list-item");

