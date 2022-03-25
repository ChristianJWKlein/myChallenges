// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

//example....timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
//Buggy. needs fixing.
//How to access date object?

let today = new Date();
const xMasEve = new Date(2022, 11, 24);

const timeForMilkAndCookies = (newDate) => {
  let christmasEve = new Date(2022, 11, 24);
  console.log(christmasEve);
  if (newDate === christmasEve) {
    return true;
  } else return false;
};
console.log(timeForMilkAndCookies(xMasEve));
console.log(today);
console.log(xMasEve);
