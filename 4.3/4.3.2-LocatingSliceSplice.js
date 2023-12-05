const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log("First a:", arr.indexOf("a")),
console.log("First b:", arr.indexOf("b")),
console.log("First c:", arr.indexOf("c")),


// find the last index of "a", "b", and "c"

console.log("Last a:", arr.lastIndexOf("a")),
console.log("Last b:", arr.lastIndexOf("b")),
console.log("Last c:", arr.lastIndexOf("c")),

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let firstIsLast = false;
while (!firstIsLast) {
  let firstA = arr.indexOf("a");
  let lastA = arr.lastIndexOf("a");

  firstIsLast = firstA === lastA;

  if (!firstIsLast) {
    arr.splice(lastA, 1);
  }

  console.log("current array:", arr.join(", "));

}
