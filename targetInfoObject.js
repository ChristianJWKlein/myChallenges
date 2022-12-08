// Given a target, and an array of objects where each object contains an ***info*** property such as { info: 5 }. Modify the array so that the value of ***info*** is replaced with "-" when info is lesser than the target, "+" when info is greater, and "=" otherwise.
const arr = [
  { info: 5 },
  { info: 10 },
  { info: 15 },
  { info: 20 },
  { info: 25 },
  { info: 30 },
  { info: 35 },
  { info: 40 },
  { info: 45 },
  { info: 50 },
]
target = 10

for (val of arr) {
  if (val.info < target) {
    val.info = '-'
  } else if (val.info > target) {
    val.info = '+'
  } else {
    val.info = '='
  }
}

for (let i = 0; i < arr.length; i++) {
  arr[i].info < target
    ? (arr[i].info = '-')
    : arr[i].info > target
    ? (arr[i].info = '+')
    : (arr[i].info = '=')
}

console.log(arr)

//rewrite as function and pass the array

const targetInfoObject = (arr) => {
  let array = arr
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].info)
  }
}

targetInfoObject(arr)
