// A word is on the loose and now has tried to hide amongst a crowd of small letters!
// Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord(word1) ➞ “BOCA CODE”
// detectWord(word2) ➞ “HELLO”

//Multiple ways to do this one.
//

const word1 = 'aaHeEaLLaaaO'
const word2 = 'BxxOxxCxxAx xCxxOxxxDxxE'

// function strProccesor(str) {
//   let newWord = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//       //Says if string is true if uppper case letter present. Loop to specify by index to test characters.
//       //console.log(str[i]);                 //Alt. method
//       //newWord = newWord + str[i];          //method
//       newWord.push(str[i]);
//     }
//   }
//   let final = newWord.join(''); // .join("") value in the commas will be added between each array value.
//   console.log(final);
// }

// strProccesor(word1);
// strProccesor(word2);

const strProccesor = (str) => {
  let newWord = []
  for (char of str) {
    if (char == char.toUpperCase()) {
      newWord.push(char)
    }
  }
  let final = newWord.join('')
  console.log(final)
  //add the upper case letters to an array, then use join metod to print as one string.
}

strProccesor(word1)
