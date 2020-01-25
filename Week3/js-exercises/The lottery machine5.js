'use strict';
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  // that will show the array
  console.log(numbers);
  // add logic of when threeCallback and fiveCallBack are called inside threeFive
  numbers.forEach(num => {
    if (num % 3 === 0) {
      threeCallback(num); // this callback will go to sayThree function
    }
    if (num % 5 === 0) {
      fiveCallback(num); // this callback will go to sayFive function
    }
  });
}
//function when divisible num by 3
function sayThree(num) {
  console.log(num + ': ' + 'are divisible by 3'); // byThree is only the numbers that can divisible by 3 in the array
}
//function when divisible num by 5
function sayFive(num) {
  console.log(num + ': ' + 'are divisible by 5'); // byfive is only the numbers that can divisible by 5 in the array
}

threeFive(10, 15, sayThree, sayFive); //[10,11,12,13,14,15]
threeFive(1, 50, sayThree, sayFive); //[1,....,50]
