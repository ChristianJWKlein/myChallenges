//square the numbers in the array
// const number = [2, 4, 8];

// let numsSquaredArr = [];
// for (i = 0; i < number.length; i++) {
//   const squaredNums = number[i] ** 2;
//   numsSquaredArr.push(squaredNums);
// }
// console.log(...numsSquaredArr);

// for (val of number) {
//   console.log(val ** 2);
// }

//Write a function that accepts an array of strings. Return the longest string.
const namesArr = [
  "Aurelie",
  "Brian",
  "Farrukhs",
  "Ronny",
  "Zhuopu",
  "Todd",
  "Vitoria",
  "Manny",
  "Christian",
  "Alex",
];

//Find length of longest string
// function longestString(arr) {
//   let stringLengths = [];
//   for (string of arr) {
//     stringLengths.push(string.length);
//   }
//   // return Math.max(string.length);
//   return Math.max(...stringLengths);
// }
// console.log(longestString(namesArr));

//returns the value of the array based off most occuring length of string in the array.  returns the value of the higher index based on most frequently occured string length in the array.  Not longest string.
function longestString(arr) {
  let longest = arr.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  return longest;
}

console.log(longestString(namesArr));

let longest = namesArr.reduce((a, b) => {
  return a.length > b.length ? a : b;
});

console.log(longest);
//notes
// function longestString(arr) {
//   let maxString = "";
//   for (string of arr) {
//     maxString = arr[Math.max(string.length)];
//   }
//   return maxString;
// }
// console.log(longestString(namesArr));
