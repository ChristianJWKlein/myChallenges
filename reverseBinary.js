// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.

const reversedBinaryInteger = (int) => {
  let binary = int.toString(2) //turns int into binary string
  let arr = binary.split('')

  //Reverse the binary string in-place
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
  let reversedBinaryStr = arr.join('')
  return parseInt(reversedBinaryStr, 2)
}

// Examples
console.log(reversedBinaryInteger(10)) //➞ 5
// 10 = 1010 -> 0101 = 5

console.log(reversedBinaryInteger(12)) //➞ 3
// 12 = 1100 -> 0011 = 3

console.log(reversedBinaryInteger(25)) //➞ 19
// 25 = 11001 -> 10011 = 19

console.log(reversedBinaryInteger(45)) //➞ 45
// 45 = 101101 -> 101101 = 45
