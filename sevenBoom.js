// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// function sevenBoom(numArr) {
//   for (let i = 0; i <= numArr.length; i++) {
//     if (numArr[i] === 7) {
//       console.log('7, BIG BOOMS')
//     } else {
//       console.log('Chicken Bake, no 7')
//     }
//   }
// }

const sevenBoom = (arr) => {
  if (arr.includes(7)) {
    console.log('Big 7 sevenBoom')
  } else console.log('no big booms')
}

// Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) //➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) //➞ "Boom!"
// 97 contains the number seven.
