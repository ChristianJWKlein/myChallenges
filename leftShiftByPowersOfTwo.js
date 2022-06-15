// The left shift operation is similar to multiplication by powers of two.

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// shiftToLeft(5, 2) ➞ 20

// shiftToLeft(10, 3) ➞ 80

// shiftToLeft(-32, 2) ➞ -128

// 5 << 2 === 5 * 2 ** 2 === 5 * 4 === 20

const shiftToLeft = (num1, num2) => {
  let result = num1 * 2 ** num2
  return result
}

console.log(shiftToLeft(-32, 2))
