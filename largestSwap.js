// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true

const largestSwap = (twoDigitNum) => {
  let stringNum = twoDigitNum.toString().split('')
  if (stringNum[0] > stringNum[1]) {
    console.log(true)
  } else if (stringNum[0] < stringNum[1]) {
    console.log(false)
  }
}

largestSwap(23)

// const largestSwap = (twoDigitNum) => {
//   let reverseString = twoDigitNum.toString().split('').reverse().join('');
//   let reverseNumber = parseInt(reverseString);
//   if (reverseNumber > twoDigitNum) {
//     return false;
//   } else if (reverseNumber < twoDigitNum) {
//     return true;
//   }
// };

// console.log(largestSwap(36));
