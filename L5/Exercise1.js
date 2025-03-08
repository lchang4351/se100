function getNumberPromise() {
    // Write your code here
    
    // create a promise
    const myPromise = new Promise ((resolve, reject) => {
        // return the value 10 after 2 seconds
        setTimeout(() => {
            resolve(10)
        },2000)
    })
    

    //return the promise
    return myPromise
}

const onFulfilled = (value) => {
    console.log(value); // Should log 10 after 2 seconds
};

// Test the function
getNumberPromise().then(onFulfilled) // same as below

getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});