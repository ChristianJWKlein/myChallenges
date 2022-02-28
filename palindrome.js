// A palindrome is a word or sequence that reads the same forwards and backwards
//Write a function that checks if a word is a palindrome.
// isPalindrome('121)=true
//isPalindrome('122')=false

//is empty string a palidrome?
//string with 1 character?
//string with 2 characters?
//are spaces part of the solution?

function isPalindrome(str) {
  let splitString = str.split('');
  let reverseArray = splitString.reverse();
  let reverseString = reverseArray.join();
  let finalReverseString = reverseString.replaceAll(',', '');
  if (finalReverseString == str) {
    return true;
  } else return false;
}

console.log(isPalindrome('racecar'));

//refined

// function checkPalindrome(str) {
//   return str == str.split('').reverse().join('');
// }

// console.log(checkPalindrome('121233'));

let thisString = 'thisString';
