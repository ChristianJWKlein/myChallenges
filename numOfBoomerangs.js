// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

//Boomerang Examples:
;[3, 7, 3],
  [1, -1, 1],
  [5, 6, 5][
    //Example
    (3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2)
  ][
    // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

    //They can overlap
    (1, 7, 1, 7, 1, 7, 1)
  ]
//returns 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

const countBoomerangs = (numArray) => {
  let count = 0
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === numArray[i + 2] && numArray[i] !== numArray[i + 1]) {
      count++
    }
  }
  return `There are ${count} bommerangs in this sequence`
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])) //➞ 2

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])) //➞ 1

console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])) //➞ 0
