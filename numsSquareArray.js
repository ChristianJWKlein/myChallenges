//square the numbers in the array
const number = [2, 4, 8];

//For the job interview
let numsSquaredArr = [];
for (i = 0; i < number.length; i++) {
  const squaredNums = number[i] ** 2;
  numsSquaredArr.push(squaredNums);
}
console.log(...numsSquaredArr);

//For the real world
for (val of number) {
  console.log(val ** 2);
}
