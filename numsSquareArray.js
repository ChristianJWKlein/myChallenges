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

//give me the sum of the numbers in an array.  Give me a function.

const arrayOfNumbers = [4, 7, 9, 2, 5];

function addArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(addArrayElements(arrayOfNumbers));

const addArrElements = (arr) => {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return console.log(sum);
};

addArrElements(arrayOfNumbers);
