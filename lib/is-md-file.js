const path = require('path');
const pathForTestingFunctions = './index.js';
const pathForTestingFunctionsTwo = '../README.md'

const markdownsArr = [];

const typeOfFile = path.extname(pathForTestingFunctions);
if(typeOfFile !== '.md' && typeOfFile !== '.markdown'){
    console.log(markdownsArr);
    console.log('File cannot be analyzed');
    return('File cannot be analyzed');
} else if (typeOfFile === '.md' || typeOfFile === '.markdown'){
    markdownsArr.push(pathForTestingFunctions);
    console.log(markdownsArr);
    console.log('markdown file');
    return('markdown file');
};