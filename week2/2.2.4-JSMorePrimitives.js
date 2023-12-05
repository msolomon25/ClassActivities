//create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const name = 'Madori';
let age = 26;
const designer = true;
let wage = null;
let employmentStatus;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
typeof name;
typeof age;
typeof designer;
typeof wage;
typeof employmentStatus;

// create a variable that references a template literal
// inside the template literal, use two of the above variables

console.log('"Hello ${name}," I said, "I am ${age} years old."');

// reassign the value of the variable that references "null"
let wage = 20000;

// print the value and its type
typeof wage;

// print a variable that causes a ReferenceError

typeof variable;

// alter the previous line to no longer cause a ReferenceError
typeof wage;
