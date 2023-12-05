// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function myFunction(param1, param2){
  console.log(param1, param2);
  return param1 + param2;
};

// invoke the function and pass in two numbers

myFunction(3 , 5);

// invoke the function and pass in more than two numbers

myFunction(3, 5, 8, 9); //function only has 2 arguments so it will ignore 8 & 9

// invoke the function and pass in only one number
myFunction(14);

// change the function to set default values for the parameters
function myFunction(param1 = 5, param2 = 6){
  console.log(param1, param2);
  return param1 + param2;
};

// again, invoke the function and pass in only one number

myFunction(param1);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function myFunction(param1, param2, ...restParam){
  console.log(param1, param2);
  console.log(restParam);
  return param1 + param2;
};

// again, invoke the function and pass in more than two numbers

myFunction(1, 2, 3, 4, 5);


// In Class Review below

let greeting;
function weatherGreeting(name, temp, condition){
  greeting = `"Hello, ${name}! It is ${temp} degrees outside and the weather is ${condition}."`
  return greeting;
}

console.log("Before invocation" + greeting); //Won't be executed because its before the invocation
weatherGreeting("Madori", 25, "Snowy");
console.log("After invocation" + greeting);
