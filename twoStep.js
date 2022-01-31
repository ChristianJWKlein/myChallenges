// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//console.log()

const myNums = [3, 8, 7, 9, 99, 4, 6];
const myTarget = 103;

let twoStep = function (numsArr, target) {
  const result = [];
  for (let i = 0; i <= numsArr.length; i++) {
    for (let j = i + 1; j <= numsArr.length; j++) {
      if (target === numsArr[i] + numsArr[j]) {
        // result.push(numsArr[i], numsArr[j]);
        result.push(i, j); //
      }
    }
  }
  return result;
};

console.log(
  twoStep(myNums, myTarget)[0] +
    " and " +
    twoStep(myNums, myTarget)[1] +
    " = " +
    myTarget
);

//Fundamentals Practice
// const myArray = [3, 5, 6, 7, 8, 7];
// function addArr(arr) {
//   let sumOfThree = arr[4] + arr[3] + arr[5];
//   if ((sumOfThree = 12)) {
//     return [arr[5], arr[3], arr[5]];
//   }
//   console.log(sumOfThree);
// }
// console.log(addArr(myArray));

// const myNums = [3, 8, 77, 9, 99, 4, 6];
// const myTarget = 103;

// for (let t of myNums) {

//   }
// }
//console.log(t);
