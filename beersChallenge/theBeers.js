//output name of beer, the price,and the average ratings using asterisk
// i.e **** is a 4-star ratings
// (use Math.round) */
const beers = require("./beers.json");

const oneBeer = beers[30];
//console.log(oneBeer);

function getNameAndPrice(obj) {
  console.log(obj.name, obj.price);
}
//getNameAndPrice(oneBeer);

function getRating(obj) {
  let roundedNum = Math.round(obj.rating.average);
  switch (roundedNum) {
    case 5:
      console.log("* * * * *  Stars. Incredible!");
      break;
    case 4:
      console.log("* * * *  Stars.  Decent Beverage");
      break;
    case 3:
      console.log("* * * Stars.  Just another Beer");
      break;
    case 2:
      console.log("* * Stars. You have bad taste");
      break;
    case 1:
      console.log("*  Star. Terrible Reviews");
      break;
    default:
      console.log("This beer does not have a rating");
  }
}
console.log(getRating(oneBeer));

// function getRoundedPrice(obj) {
//   let fixedNum1 = obj.price.replace("$", "");
//   let fixedNum2 = parseInt(fixedNum1);
//   return fixedNum2;
// }

//console.log(getRoundPrice(oneBeer));
