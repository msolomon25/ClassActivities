// "regular" functions

//1
function greet(name) {
  return `Hello ${name}!`;
}

//2
function welcome(name) {
  return `${name}, welcome!`;
}

//3
function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

// pass each "regular" function into getAndShowMessage as a callback function

//1
getNameAndShowMessage(greet);

//2
getNameAndShowMessage(welcome);

//3
getNameAndShowMessage(informAboutSale);

//Looks cool in browser console!
