// Given an array of strings (nouns), list them up in a complete sentence.

const sentence = (arr) => {
  //   let finalSentence = ''
  let finalSentencePieces = []
  let indexZeroFirstLetter = arr[0][0]
  if (
    indexZeroFirstLetter.includes('a') ||
    indexZeroFirstLetter.includes('e') ||
    indexZeroFirstLetter.includes('i') ||
    indexZeroFirstLetter.includes('o') ||
    indexZeroFirstLetter.includes('u')
  ) {
    finalSentencePieces.push(`An ${arr[0]}`)
  } else {
    finalSentencePieces.push(`A ${arr[0]}`)
  }

  for (let i = 1; i <= arr.length - 2; i++) {
    let firstLetter = arr[i][0]
    if (
      firstLetter.includes('a') ||
      firstLetter.includes('e') ||
      firstLetter.includes('i') ||
      firstLetter.includes('o') ||
      firstLetter.includes('u')
    ) {
      finalSentencePieces.push(`an ${arr[i]}`)
    } else {
      finalSentencePieces.push(`a ${arr[i]}`)
    }

    let indexLastFirstLetter = arr[arr.length - 1][arr.length - 1]
    if (
      indexLastFirstLetter.includes('a') ||
      indexLastFirstLetter.includes('e') ||
      indexLastFirstLetter.includes('i') ||
      indexLastFirstLetter.includes('o') ||
      indexLastFirstLetter.includes('u')
    ) {
      finalSentencePieces.push(`and an ${arr[0]}`)
    } else {
      finalSentencePieces.push(`and a ${arr[0]}`)
    }
  }

  console.log(finalSentencePieces)
}

// Examples
sentence(['orange', 'apple', 'pear']) //➞ "An orange, an apple and a pear."

sentence(['keyboard', 'mouse']) //➞ "A keyboard and a mouse."

sentence(['car', 'plane', 'truck', 'boat']) //➞ "A car, a plane, a truck and a boat."

// Notes
// The sentence starts with a capital letter.
// Do not change the order of the words.
// A/An should be correct in all places.
// Put commas between nouns, except between the last two (there you put "and").
// The sentence ends with a .
// There are at least two nouns given.
// Every given word is lowercase.

//For every value in the array, if the first letter of the string is a vowel (a ,e ,i ,o and u), we write An... else A
//We then log the first value
//Place a comma
//Repeat for every value in the array until the last value
// At the last value we log "and a/an" instead of comma, then log the value with a .
// Wrap it up in quotes
