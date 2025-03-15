const names = [['John', 'Doe'], ['Jane', 'Doe']];

const fullNames = names.map((namesArray) => {
    return namesArray[0] + " " + namesArray[1]
})

console.log(fullNames); // Output: ['John Doe', 'Jane Doe']