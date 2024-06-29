// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// Examples

const seriesResistance = (arr) => {
  ohmsTotal = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  console.log(ohmsTotal + ' ohms')
}

seriesResistance([1, 5, 6, 3]) // ➞ "15 ohms"

//seriesResistance([16, 3.5, 6]) //➞ "25.5 ohms"

//seriesResistance([0.5, 0.5]) //➞ "1.0 ohm"
