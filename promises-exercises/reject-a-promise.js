const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 300)
  });
// Create a function to print error.message   
function onReject (error) {
    console.log(error.message);
};
// Pass this function as a rejection handler to the 'then' method of the promise (as second parameter)
promise.then(null, onReject);