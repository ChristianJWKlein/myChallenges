// Create a function that takes the age in years and returns the age in days.

const ageYears = 28;

const yearsToDays = (ageInYears) => {
  let ageDays = ageInYears * 365.25;
  return ageDays;
};

console.log(`${ageYears} years is equal to`, yearsToDays(ageYears), ' days');
