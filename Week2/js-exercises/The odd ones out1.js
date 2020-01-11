'use strict';
function doubleEvenNumbers() {
  // make newnumber with only even number
  let newNumbers = myNumbers.filter(number => number % 2 === 0);
  //make the newnumber th even number double
  newNumbers = newNumbers.map(number => number * 2);
  return newNumbers;
}
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(doubleEvenNumbers());
