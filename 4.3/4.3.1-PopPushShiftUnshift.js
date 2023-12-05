const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = nums.pop() + nums.pop();
console.log(nums);

//or
const pop1 = nums.pop();
const pop2 = nums.pop();

// remove each of the first two items with shift(), saving each item to a variable

const shift1 = nums.shift();
const shift2 = nums.shift();


// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.push(shift2);
nums.push(shift1);

// this also works
// nums.unshift(pop1, pop2);

// console.log(nums);
