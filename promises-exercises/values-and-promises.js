function attachTitle(str){
    return 'DR. ' + str;
};

const promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(console.log);