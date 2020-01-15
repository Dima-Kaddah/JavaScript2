'use strict';
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log(numbers); // that will show the array
  threeCallback(numbers); // this callback will go to sayThree function
  fiveCallback(numbers); // this callback will go to sayFive function
}
//function for divisible numbers by 3
function sayThree(anyArray) {
  let byThree = anyArray.filter(ele => !(ele % 3) && ele !== 0);
  console.log(byThree + ': ' + 'are divisible by 3'); // byThree is only the numbers that can divisible by 3 in the array
}
//function for divisible numbers by 5
function sayFive(anyArray) {
  let byFive = anyArray.filter(ele => !(ele % 5) && ele !== 0);
  console.log(byFive + ': ' + 'are divisible by 5'); // byfive is only the numbers that can divisible by 5 in the array
}

threeFive(10, 15, sayThree, sayFive); //[10,11,12,13,14,15]
threeFive(1, 50, sayThree, sayFive);
