const fs = require('fs');
const pathForTestingFunctions = './index.js';
const pathForTestingFunctionsTwo = '../README.md'


fs.readFile(pathForTestingFunctions, (err, data) => {
    if (err){
        console.log(err);
        return err;
    } else {
        console.log(data);
        return data;
    }
})