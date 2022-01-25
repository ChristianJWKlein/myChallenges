// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const myNums = [3, 5, 77, 9, 99, 4];
const myTarget = 108;

let twoSum = function (numsArr, target) {
  for (let i = 0; i <= numsArr.length; i++) {
    if ((target = numsArr[i + (i + 1)])) {
       return numsArr.findIndex()//How to do conditional? CallBack?
      //return indeces of numsArr where target = 8.
      //console.log(`You hit the target ${target[i]} & ${target[i + 1]}`);
    }
}
};
console.log(numsArr.findIndex(twoSum(numsArr,myTarget))

//console.log(twoSum(myNums, myTarget))
