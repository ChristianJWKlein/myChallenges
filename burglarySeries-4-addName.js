// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

//Return everything in an object
//Handle and return 1st object KVP.  Return KVP for each item in first object. IF empty return nothing
//Append string and value as KVP

const addName = (obj, str, num) => {
  return Object.assign(obj, { [str]: num })
}

console.log(addName({ piano: 500, oshkosh: 1000 }, 'Brutus', 400))
console.log(addName({ sax: 600, chef: 1000 }, 'Thomas', 300))
