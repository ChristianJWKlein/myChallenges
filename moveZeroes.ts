// given an array of integers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements

// Constraints
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// For example, given the input array [0, 1, 0, 3, 12], after calling your function, the array should be [1, 3, 12, 0, 0].

function moveZeroesToBack(numbers: number[]): number[] {
    const nonZeroes = numbers.filter(n => n !== 0);
    const zeroes = numbers.filter(n => n === 0);
    return [...nonZeroes, ...zeroes]
}

console.log(moveZeroesToBack([0, 1, 0, 3, 12]))