'use strict';
// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();
// variable (a) declared and assign to value 10
// then declared x with function that reassign (a) variable to anothe value 12
// and reuten the alert of (a) variable.
// the (a) variable will be the last value that equal to (a) and its 12
