'use strict';
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
function lemonOut(fruitBasket) {
  //first way
  // const arrayOfFruits = fruitBasket.filter(fruit => fruit !== 'Lemon');
  //second
  const arrayOfFruits = fruitBasket.filter(fruit => !fruit.includes('Lemon'));

  return arrayOfFruits;
}
console.log(`My mom bought me a fruit basket, containing: ${lemonOut(fruitBasket)}!`);
