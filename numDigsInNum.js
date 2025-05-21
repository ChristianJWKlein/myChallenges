// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

const num_of_digits = (num) => {
  let numString = num.toString()
  console.log(numString.length)
}

num_of_digits(1000) //➞ 4

num_of_digits(12) //➞ 2

num_of_digits(1305981031) //➞ 10

num_of_digits(0) //➞n 1
