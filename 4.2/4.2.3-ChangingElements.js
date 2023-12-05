// print the outer HTML of the navigation bar
// This may also work const outerHTML = "document.querySelector("nav-bar").outerHTML";
// console.log(outerHTML);

console.log(document.querySelector("nav-bar").outerHTML);

// print the inner HTML of the navigation bar
const innerHTML = "document.querySelector("nav-bar").innerHTML";
console.log(innerHTML);

// print the text content of the #class-schedule-list element
document.querySelector("#class-schedule-list").textContent;


// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");

// select the img element and add a src attribute
const img = document.querySelector("img");
img.src = "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// or  document.querySelector("img").src = "url here";

// change the font color of the h1 element
document.querySelector("h1").style.color = "red";
