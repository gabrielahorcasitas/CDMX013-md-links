const path = require('path');

function solvingPath(inputPath){
let newPath = '';
    if(path.isAbsolute(inputPath) === false){
       newPath = path.resolve(inputPath);
    } else {
        newPath = inputPath;
    }
console.log(newPath);
return newPath;
};

module.exports = solvingPath;
