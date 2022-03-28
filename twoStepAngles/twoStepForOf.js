// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//console.log()

const myNums = [3, 8, 7, 9, 99, 47, 6];
const myTarget = 107;

for (let value of myNums) {
  let value1 = value;
  for (let val of myNums) {
    if (val + value1 === myTarget) {
      console.log(
        `Your target of ${myTarget} was met by adding array values of ${val} & ${value1}`
      );
      // return;
    }
  }
}

function twoSum3(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let watcher = arr[i];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] + watcher === target) {
        console.log(
          `Your target value of ${target} was met by adding ${watcher} & ${arr[j]}`
        );
      }
      return;
    }
  }
}

twoSum3(myNums, myTarget);
