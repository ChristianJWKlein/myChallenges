// Write a function redundant that takes in a string str and returns a function that returns str.

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

const redundant = (str) => {
  const string = str
  console.log(string)
  return function (string) {
    console.log(string)
  }
}

console.log(redundant('thomas'))
