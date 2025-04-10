// Constraints
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// For example, given the input array [0, 1, 0, 3, 12], after calling your function, the array should be [1, 3, 12, 0, 0].

const moveZeroes = (numArray) => {
  let insertPos = 0

  for (i = 0; i < numArray.length; i++) {
    if (numArray[i] !== 0) {
      numArray[insertPos] = numArray[i]
      insertPos++
    }
  }
  while (insertPos < numArray.length) {
    numArray[insertPos] = 0
    insertPos++
  }
}

const arr = [44, 7, 0, 7, 88, 0, 0, 88, 765, 44, 7]

moveZeroes(arr)

console.log(arr)
