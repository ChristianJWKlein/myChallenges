// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

drinks = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 },
  { name: 'tea', price: 7 },
  { name: 'bud light', price: 5 },
  { name: 'coors lite', price: 5 },
  { name: 'mikes tea', price: 6 },
]

const sortDrinkByPrice = (drinksArrObj) => {
  let dranks = drinksArrObj
  dranks.sort(function (a, b) {
    return a.price - b.price
  })
  console.log(dranks)
}

sortDrinkByPrice(drinks)
