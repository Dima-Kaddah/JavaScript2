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
  console.log(result);
}
removeDuplicates(letters);
removeDuplicates(num);

//another easier solution
function removeDuplicates2(anyArray) {
  console.log([...new Set(anyArray)]);
}
removeDuplicates2(letters);
removeDuplicates2(num);
