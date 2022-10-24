const path = require('path');
const inputPath = 'example/exampleone.md';

function solvingPath(inputPath){
let newPath = '';
    if(path.isAbsolute(inputPath) === false){
       newPath = path.resolve(inputPath);
    } else {
        newPath = inputPath;
    }
return newPath;
};

module.exports = solvingPath;
