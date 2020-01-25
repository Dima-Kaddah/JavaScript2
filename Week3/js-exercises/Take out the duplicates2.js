'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
const num = [1, 3, 5, 7, 8, 9, 9, 5, 5, 3, 3];

function removeDuplicates(anyArray2) {
  let result = [];
  for (let i = 0; i < anyArray2.length; i++) {
    if (result.indexOf(anyArray2[i]) === -1) {
      result.push(anyArray2[i]);
    }
  }
  return result;
}
console.log(removeDuplicates(letters));
console.log(removeDuplicates(num));

//another easier solution
function removeDuplicates2(anyArray) {
  return [...new Set(anyArray)];
}
console.log(removeDuplicates2(letters));
console.log(removeDuplicates2(num));

//third way with filter
function removeDuplicates3(arr) {
  arr = arr.filter((item, index) => arr.indexOf(item) === index);
  return arr;
}
console.log(removeDuplicates3(letters));
console.log(removeDuplicates3(num));
