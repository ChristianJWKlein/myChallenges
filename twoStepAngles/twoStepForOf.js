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
      return;
    }
  }
}
