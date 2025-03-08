// Simulates fetching data from a server with a delay - Do not modify
//Generate an async function first, that is a Promise
//so that you can use it instead of .then() .catch() below
async function fetchData(serverName) {
    console.log(`Fetching from ${serverName}...`);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000)); // Simulate delay
    return `Data from ${serverName}`;
}

// Write your code here to fetch data from Server A, B, and C one by one
const getAllData = async () =>{ //need 'async' in function to be able to use await below

    const serverAData = await fetchData('Server A') 
    //notice that in fetchData funciton above, it requires you to input a serverName
    //it then returns data of the serverName as a form of a string with the name you have included
    console.log(serverAData)

    const serverBData = await fetchData('Server B')
    console.log(serverBData)

    const serverCData = await fetchData('Server C')
    console.log(serverCData)

    console.log("All data fetched!")
}

// Call the main function - Do not modify
getAllData();