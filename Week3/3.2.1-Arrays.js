// create an Array using an Array literal

const colors = ["Red", "Blue", "Yellow"];

// access the 1st item in the Array
console.log(colors[0]);

// access the last item in the Array
console.log(colors[2]);

// print the length of the Array
colors.length

// use the length property to access the last item in the Array

console.log(colors[colors.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
const colors = ["Red", "Blue", "Yellow"];

const shades =[];

for (let colorFolder of colors) {
  let output = 'Black ${colorFolder}';
  shades.push(output);
}


//Extra example below. Realistic way of how you'd get your annual salary

const checks = [5, 20, 35, 20, 25];
let annualSalary = 0;

for (let gross of checks) {
  let net = gross - 3;
  annualSalary += net; //Same thing as annualSalary = annualSalary + net;
}

console.log(annualSalary);
