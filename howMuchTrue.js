// Create a function which returns the number of true values there are in an array.
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

const truth = [true, true, false, false, true, false]

function countTrue(arr) {
  const truthArr = arr

  for (const val of truthArr) {
    let fakeCount = 0
    if (val === true) {
      fakeCount += 1
      let realCount = fakeCount + 1
    }
    return realCount
  }
}

console.log(countTrue(truth))
