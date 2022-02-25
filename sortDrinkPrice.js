// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

drinks = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 },
  { name: 'banana', price: 11 },
  { name: 'onion', price: 17 },
];

const drinkSortByPrice = drinks.sort((a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  return 1;
});
console.log(drinkSortByPrice);

// function drinkAlphabetized(arr) {
//   arr.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     return 1;
//   });
// }

// console.log(drinkAlphabetized(drinks));
