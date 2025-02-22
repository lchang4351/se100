// console.log("Congrats! You have printed your first line of code");

// let stockPrice = 300
// console.log(stockPrice)
// // console.log("the stock price is",stockPrice)

// // console.log(`the stock price is ${stockPrice}`)

// stockPrice = stockPrice + 400
// // stockPrice += 400 works the same as above
// console.log(stockPrice)

// let money = 6000

// money += 3000

// console.log(money)

// money *= 3

// console.log(money)

// // Complete the code below

// let company = "Microsoft's"
// console.log(company);

// company = 'Microsoft\'s'
// console.log(company);

// const companyName = "Amazon"
// const companyRating = 5

// // Write your code below

// console.log(companyName + " has a customer satisfaction rating of " + companyRating)
// console.log("%s has a ... rating of %i", companyName, companyRating)


// const welcome_string = "Welcome to a world of JavaScript";

// const char = welcome_string[3];
// console.log(char);

// // start index, end index (exclusive)

// const partialString = welcome_string.substring(0,7);
// console.log(partialString); // outputs "c" to the console

// console.log(welcome_string.length)

// const companyName1 = "Metaa"

// // Write your code below

// const companyNameFix = companyName1.substring(0,4)
// console.log(companyName1.length - 1)
// console.log(companyNameFix);
// console.log(companyNameFix.toUpperCase());

// const DayOneClosingPrice = "87.14";
// const DayTwoClosingPrice = "84.22";

// // Do not modify anything above
// // Write your code below

// let firstNumber = parseFloat(DayOneClosingPrice)
// let secondNumber = parseFloat(DayTwoClosingPrice)

// console.log((firstNumber + secondNumber)/2)
// console.log(((parseFloat(DayOneClosingPrice)+parseFloat(DayTwoClosingPrice))/2))

// const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

// // Write your code below

// console.log(
//     (TSLAClosingPrices[0] + TSLAClosingPrices[1] + TSLAClosingPrices[2] 
//     + TSLAClosingPrices[3] + TSLAClosingPrices[4])/5
// )

// // let total =0
// // total += TSLAClosingPrices[0]
// // total += TSLAClosingPrices[1]
// // total += TSLAClosingPrices[2]
// // total += TSLAClosingPrices[3]
// // total += TSLAClosingPrices[4]

// // slight improvement to the above

// // iterative/programmatic approach to the above
// let total = 0;
// for(let i=0; 1<TSLAClosingPrices.length; i++) {
//     //do something
//     total = total + TSLAClosingPrices[i] // starts from 0
// }
// console.log(total / TSLAClosingPrices.length)


const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

// Write your code below

const open = (AAPLPrevBar['open'] + AAPLPrevBar['close'])/2

console.log(open)

const close = (AAPLCurrentBar['open'] + AAPLCurrentBar['close'] + AAPLCurrentBar['high'] + AAPLCurrentBar['low'])/4
console.log(close)

console.log(Math.max(AAPLCurrentBar.high, AAPLCurrentBar.open, AAPLCurrentBar.close))

console.log(Math.min(AAPLCurrentBar.low, AAPLCurrentBar.open, AAPLCurrentBar.close))


