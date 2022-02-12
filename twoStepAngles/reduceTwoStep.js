//
const array1 = [1, 6, 3, 55];
//const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer, 5));
// expected output: 15

const sumOfArray1 = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 45);
console.log(sumOfArray1);
