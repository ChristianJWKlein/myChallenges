// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle. No Rounding is needed.

// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.

//Solve first anyways

// Solve within these parameters. The goal is to write a short, branch-free piece of code.

// - The catch is you can only use arithmetic or comparison operators, which means:
// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.

// perimeter("s", 7) ➞ 28

const perimeter = (letter, num) => {
  const lett = letter
  if (lett === 's') {
    console.log(4 * num)
  } else if (lett === 'c') {
    console.log(6.28 * num)
  } else {
    console.log('invalid input.  Enter "s" or "c", along with the number')
  }
}

perimeter('r', 4)

// perimeter("c", 9) ➞ 56.52
