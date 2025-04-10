// Remove Adjacent Duplicates in String. You are given a string s and an integer k. Write a function to remove k adjacent duplicates from s where the "adjacent" characters are equal.

// For instance, if k is 3 and the string is "daaabbbaa", since we have "aaa" and "bbb" as adjacent triples, the function should transform the string to "daa", removing the "bbb" first and then the remaining "aaa".

s = 'abcd'
k = 2
output: 'abcd'

s = 'deeedbbcccbdaa'
k = 3
output: 'aa'

s = 'pbbcggttciiippooaais'
k = 2
output: 'ps'

s = 'aaabbbacd'
k = 3
output: 'acd'

//Compare values of string, s in widnows of value k.  if all values are equal, return the index of those values.  Continue checking the string in windows of value k, if we hit a second match, we can remove this characters then reference index of first hit and remove from s as well.

const removeAdjacents = (s, k) => {
  const window = k
  const charIndecesToRemove = []
  let tripletCount = 0
  for (i = k - 1; i < s.length; i++) {
    // console.log(s[i], s[i - 1], s[i - 2])

    if (k === 3 && s[i] === s[i - 1] && s[i] === s[i - 2]) {
      //only remove chars if we match triplets
      tripletCount++
      //console.log(i, i - 1, i - 2)
      charIndecesToRemove.push(i, i - 1, i - 2)
      if (tripletCount >= 2) {
        // console.log(charIndecesToRemove)
        const indexSet = new Set(charIndecesToRemove)
        const result = [...s].filter((_, idx) => !indexSet.has(idx)).join('')
        console.log(result)
      }
    }
  }
}

removeAdjacents('aaabbbacd', 3)
