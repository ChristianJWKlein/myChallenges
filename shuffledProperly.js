// Shuffled Properly?
// Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.

//check and compare 3 numbers at a time to see if they are consecutive in ascending or descending order.

//

// function isShuffledWell(arr) {
//   arr.forEach((num, index, arr) => {
//     if (index <= arr.length - 3) {
//       console.log(num)
//       if (
//         (num + 1 === arr[index + 1] && arr[index + 1] + 1 === arr[index + 2]) ||
//         (num - 1 === arr[index + 1] && arr[index + 1] - 1 === arr[index - 2])
//       ) {
//         console.log('false')
//       } else console.log('true')
//     }
//   })
// }

const isShuffledWell = (arr) => {
  // check the index
  arr.some((num, index) => {
    if (
      (num + 1 === arr[index + 1] && arr[index + 1] + 1 === arr[index + 2]) ||
      (num - 1 === arr[index + 1] && arr[index + 1] - 1 === arr[index - 2])
    ) {
      console.log('false')
      return
    } else console.log('true')
  })
}

// This must be solved with a for...of loop.  this way we can terminate the execution once the

// Examples
isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) //➞ false
// 1, 2, 3 appear consecutively

//isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) //➞ false
// 9, 8, 7, 6 appear consecutively

//isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) //➞ true
// No consecutive numbers appear

//isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) //➞ true

// No consecutive numbers appear
// Notes
// Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
// You will get numbers from 1-10.

// need to figure out how to only log false or true once for each array
