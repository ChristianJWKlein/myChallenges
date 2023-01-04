// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3

// Right the right shift operator without the right right operator

const shiftToRight = function (num1, num2) {
  return Math.floor(num1 / 2 ** num2)
}

console.log(shiftToRight(80, 3)) // 10

console.log(shiftToRight(-24, 2)) // -6

console.log(shiftToRight(-5, 1)) // -3

console.log(shiftToRight(4666, 6)) // 72
