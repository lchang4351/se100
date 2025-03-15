let numbers = [1, 2, 3];
let doubled = [];

for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

console.log(doubled); // Output: [2, 4, 6]

// map() aceepts a function, and this function takes in one param
// and it returns on value
// map acts as a for loop; it eliminates the usage of for (let i=0 bla bla)
const newArray = numbers.map((someValue) => {
    return someValue *2
})
console.log('newArray: ', newArray)


let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 35 }
];

let names = people.map(person => person.name);

console.log(names); // Output: ['Alice', 'Bob', 'Carol']