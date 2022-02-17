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
  "Khristian",
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

// function longestString(arr) {
//   let longest = arr.reduce((a, b) => {
//     return a.length > b.length ? a : a.length === b.length ? (a, b) : b;
//   });
//   return longest;
// }

// console.log(longestString(namesArr));

// let longest = namesArr.reduce((a, b) => {
//   return a.length > b.length ? a : b;
// });

// console.log(longest);

function longestString(arr) {
  let maxString = "";
  for (string of arr) {
    maxString = arr[Math.max(string.length)];
  }
  return maxString;
}
console.log(longestString(namesArr));
