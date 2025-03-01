// // const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// // // Write your code below for solution 4.1; find the sum of all numbers; above is exercise 4.1

// // let sum =  0

// // for (let i=0; i < MSFTStockClosingPrices.length; i++){
// //     sum += MSFTStockClosingPrices[i];

// // }

// // console.log("The total sum of closing prices of MSFT is " + sum)

// // below is an example of a nested array
// const aaplDailyOHLC = [
// 	[75.62, 74.14, 78.52, 80.21],
// 	[80.21, 81.21, 79.89, 80.78]
// ];

// //Loop through apple stock daily OHLC
// for(let i = 0; i < aaplDailyOHLC.length; i++) {
// 	console.log("Inner Array: ", aaplDailyOHLC[i]);
// }

// console.log(aaplDailyOHLC.length) // length result = 2; means it only shows that there are 2 arrays, not total number of values

//below is exercise 4.2

const MSFTStockClosingPrices = [ //this is an array of objects, so use a for...of loop
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below

sum = 0

for (let i=0; i < MSFTStockClosingPrices.length; i++){
        sum += MSFTStockClosingPrices[i]["Monday"];
        sum += MSFTStockClosingPrices[i]["Tuesday"];
        sum += MSFTStockClosingPrices[i]["Wednesday"];
        sum += MSFTStockClosingPrices[i]["Thursday"];
        sum += MSFTStockClosingPrices[i]["Friday"];
        // console.log(MSFTStockClosingPrices[i])
    }

console.log("The total sum of closing prices of MSFT is " + sum.toFixed(2))

//exercise 4.3; using for...of to do summation
//this example is for...of because this is an array of objects

sum1 = 0

for (let week of MSFTStockClosingPrices) {
    // console.log(week);
    sum1 += (week['Monday']);
    sum1 += (week['Tuesday']);
    sum1 += (week['Wednesday']);
    sum1 += (week['Thursday']);
    sum1 += (week['Friday']);
}
console.log(sum1.toFixed(2))

//exercise 4.4; using while to do summation
sum2 = 0
let i = 0
while (i<MSFTStockClosingPrices.length){
    sum2 += MSFTStockClosingPrices[i]["Monday"];
    sum2 += MSFTStockClosingPrices[i]["Tuesday"];
    sum2 += MSFTStockClosingPrices[i]["Wednesday"];
    sum2 += MSFTStockClosingPrices[i]["Thursday"];
    sum2 += MSFTStockClosingPrices[i]["Friday"];
    i++
}
console.log(sum2.toFixed(2))


//combining for of and for in together; learning from chatGPT

let totalSum = 0
for (let week of MSFTStockClosingPrices){
    // console.log(week); // same as above exapmle; exercise 4.3
    for (let day in week){
        // console.log(day); // prints the [key]; Monday, Tuesday, etc
        totalSum += week[day];
    }
}
console.log(totalSum.toFixed(2))

//instructor's way of doing the above
let result = 0;
let index = 0;
while (index < MSFTStockClosingPrices.length) { //used while only because of exercise 4.4
  week_obj = MSFTStockClosingPrices[index];
  for (let key in week_obj) {
    //console.log(MSFTStockClosingPrices[index][key]);
    result += week_obj[key];
  }
  index++;
}
console.log(result);

//exercise 4.5

// function getBetween() {
// 	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	
// 	// Write your code below
// 	// ...
// 	// ...
// 	// ...
   
//     let result = 0
//     for (let num of MSFTStockClosingPrices){
//         // console.log(num)
//         if (num > 254){
//             if (num < 257){
//                 result += 1 //counter add 1 when conditions are true
//             }
            
//         }

//     }
//     console.log(result)
// }

// getBetween();

//exercise 4.6
const MSFTStockClosingPrices2 = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below

function getBetween2(company){
    let result = 0
    for (let num of company){
        // console.log(num)
        if (num > 254){
            if (num < 257){
                result += 1 //counter add 1 when conditions are true
            }
            
        }

    }
    // console.log(result)
    return result;
}

// getBetween2(MSFTStockClosingPrices2);
// getBetween2(AAPLStockClosingPrices);

const return1 = getBetween2(MSFTStockClosingPrices2);
const return2 = getBetween2(AAPLStockClosingPrices);

console.log("Closing price of MSFT between 254 to 257: " + return1 + " days")
console.log("Closing price of AAPL between 254 to 257: " + return2 + " days")

//exercise 4.7
const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

// console.log(StockDailyPerformance.sort())
// Write your code below
// ..
// ..
// ..
// function sortPerformanceInAscOrder(data){
//     return data.sort()

// }


//exercise 4.8
const sortPerformanceInAscOrder = (data) => (data.sort())
// // Do not modify this code:
console.log(sortPerformanceInAscOrder(StockDailyPerformance))