// Create a function that takes an array of numbers and returns the second largest number.

const findSecondLargestNum = (numArr) => {
  const largest = Math.max(...numArr)
  indexToRemove = numArr.indexOf(largest)
  numArr.splice(indexToRemove, 1)
  const secondBiggest = Math.max(...numArr)

  console.log(secondBiggest)
}

// Examples
// secondLargest([10, 40, 30, 20, 50]) // ➞ 40

// secondLargest([25, 143, 89, 13, 105]) // ➞ 105

// secondLargest([54, 23, 11, 17, 10]) //➞ 23

findSecondLargestNum([25, 143, 89, 13, 105])
