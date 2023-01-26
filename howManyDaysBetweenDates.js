//getDays(new Date('June 14, 2019'), new Date('June 20, 2019')) //➞ 6

//getDays(new Date('December 29, 2018'), new Date('January 1, 2019')) //➞ 3
// Dates may not all be in the same month/year.

const rawDate = new Date('September 20, 2018').toDateString()
const dateNum = rawDate.substring(8, 10) //day
const dateMonth = rawDate.substring(4, 8) //month

//console.log(dateNum)
//console.log(dateMonth)

// transform the first date into a relative start point.  Account for number of days left in the month first, then add days via months function, and years via years function

function daysLeftInMonth(newDateToDateStr) {
  const month = newDateToDateStr.substring(4, 8)
  const day = parseInt(newDateToDateStr.substring(8, 10))
  //console.log(day)
  console.log(month)
  console.log(24 - day)
  if (month === 'Jan' || 'Mar' || 'May' || 'Jul' || 'Aug' || 'Oct' || 'Dec') {
    let answer = 31 - day
    //console.log(31 - day)
    console.log(answer)
  } else if (month === 'Apr' || 'Jun' || 'Sep' || 'Nov') {
    let answer2 = 30 - day
    console.log(answer2)
  } else {
    answer3 = 28 - day
    console.log(answer3)
  }
}

console.log(daysLeftInMonth(rawDate))
