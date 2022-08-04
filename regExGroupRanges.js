// const REGEXP = /blue|red/

// const answer1 = 'red flag'.match(REGEXP) // red

// const answer2 = 'blue flag'.match(REGEXP) // blue

// Matches "blue" in "blue flag" and "red" in "red flag".

// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]

const REGEXP = /blue flag|red flag/g

const answer3 =
  'pink flag red flag black flag blue flag green flag red flag'.match(REGEXP)

console.log(answer3)
