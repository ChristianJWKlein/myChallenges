// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

const changeEnough = (arrOfChange, numTar) => {
  const cents =
    arrOfChange[0] * 25 +
    arrOfChange[1] * 10 +
    arrOfChange[2] * 5 +
    arrOfChange[3] * 1
  //   console.log(cents)
  const money = cents * 0.01
  //   console.log(money)
  if (cents * 0.01 >= numTar) {
    return true
  } else return false
}

//solve with for loop
// doesn't make sense and adds more work given array data

console.log(changeEnough([2, 100, 0, 0], 14.11)) // ➞ false

console.log(changeEnough([0, 0, 20, 5], 0.75)) // ➞ true

console.log(changeEnough([30, 40, 20, 5], 12.55)) // ➞ true

console.log(changeEnough([10, 0, 0, 50], 3.85)) // ➞ false

console.log(changeEnough([1, 0, 5, 219], 19.99)) // ➞ false
