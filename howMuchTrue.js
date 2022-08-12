// Create a function which returns the number of true values there are in an array.
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

const truth = [true, true, false, false, true, false]

function countTrue(arr) {
  const truthArr = arr
  let realCounter = 0
  for (const val of truthArr) {
    if (val === true) {
      realCounter = realCounter + 1
    }
    return realCounter
  }
}

console.log(countTrue(truth))
