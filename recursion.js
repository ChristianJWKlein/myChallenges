// make a function that takes in variable n... call it later...
//Expensive..
//For recursion base case is needed so that it stops.
//Fibonachi.. 0, 1,1,2,3,5,8,13,21, 34,55

// function countdown(n) {
//   if (n == 0) {
//     //basecase
//     console.log(0);
//   } else {
//     console.log(n);
//     countdown(n - 1);
//   }
// }
// countdown(10);

function countdown(n) {
  if (n < 2) {
    //basecase
    return n;
  }
  return countdown(n - 1) + countdown(n - 2);
}
console.log(countdown(0));
