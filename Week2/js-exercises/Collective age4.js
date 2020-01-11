'use strict';
const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

function combinedAges(hackYourFutureMembers) {
  //make the array of ages with map
  const ages = hackYourFutureMembers.map(allAges => allAges.age);
  // sum the ages from the map array with reduce
  const allAgesTOgether = ages.reduce(sum, 0);
  return allAgesTOgether;
}
//function for reduce sum
function sum(total, byAge) {
  return total + byAge;
}
console.log(`"The collective age of the HYF team is: ${combinedAges(hackYourFutureMembers)}`);
