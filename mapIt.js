//Given the following array.. return a new array with the values squared.

thisArray = [1, 4, 9, 16];

sqrtArray = thisArray.map((val) => Math.sqrt(val));

console.log(sqrtArray);

//array of objects
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const kvArrayTimes4 = kvArray.map(({ key, value }) => ({
  [key]: value * 4,
}));

console.log(kvArrayTimes4);
