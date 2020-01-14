'use strict';
// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

// the function f1 will take variable x and add 1 to it and return it (10).
// f1 will return any variable add 1 to it, but here we called the function but we didnt print it
// the console in the end will print the value of x (9)

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);

console.log(y);
console.log(f2(y));
console.log(f2(y));
console.log(f2(y));
// the y variable is an object and when we change the value of x in the object it change the object it self.
// the value of 9 is become 10 so when we console the y object to print it give 10 for x as
// f1 function will add 1 to x every time we call it and the object value will change every time we call the function becouse in the function we change the value of x so it will change it every time we call f1
