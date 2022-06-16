// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// If n = 0 then the number of squares is 0
// If n = 1 then the number of squares is 1 + 0 = 1
// If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

let numberSquares = (n) => {
  let m = n
  let factorial = (m) => {
    if (m < 0) return
    if (m < 2) return 1
    return m * factorial(m - 1)
  }

  let result = n ** 2 + factorial(n) - 1
  console.log(result)
}

console.log(numberSquares(3)) // 5
// numberSquares(4) // 30
//solved with bug
