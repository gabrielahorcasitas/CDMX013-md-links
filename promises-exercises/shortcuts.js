const promise = Promise.reject(new Error('I DID NOT FIRE'));

promise.catch(console.log);

// const promise = Promise.resolve('SECRET VALUE');
// promise.resolve(console.log);