// console.log("hello");
// setTimeout(() => {//internally setTimeout uses a Promise
//     console.log("three seconds have passed...");//this runs 3 seconds later
// }, 3000);
// console.log("doing something else in the meantime");

const genericPromise = new Promise((resolveFunc, rejectFunc) => {
    // do something
    // e.g fetch some data
    
    // data received

    // this promise will become resolved when either the 
    // funcitons resolveFunc or rejectFunc are invoked
    resolveFunc()

    rejectFunc()
    // any errors thrown wtihin this executor function
    // will cause the promise to be rejected, and the return value
    // will be neglected
})
