/*
1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100
*/

//The below nested for loop creates and 2-D array of desired values above.

for (let i = 1; i <= 10; i++) {
  let newArray = []; //makes array empty for every iteration of i.  So first value of array is 10th iteration of i, first of j
  for (let j = 1; j <= 10; j++) {
    newArray.push(j * i);
  }
  console.log(...newArray); //takes values of the array and diplayes them. Spread operator
}

//The below version accepts an array of any size and outputs in the same manor.

// let ranArray = [1, 3, 5, 7, 9];

// function nestIteration(arr) {
//   for (let i = 1; i <= arr.length; i++) {
//     let newArray = [];
//     for (let j = 1; j <= arr.length; j++) {
//       newArray.push(j * i);
//     }
//     console.log(...newArray);
//   }
// }

// nestIteration(ranArray);
