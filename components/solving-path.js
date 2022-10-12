const path = require('path');

function solvingPath(inputPath){
let newPath = '';
    //check if path is absolute
    if(path.isAbsolute(inputPath) === false){
       // for resolve a path into an absolute path
       // relative to current working directory
       newPath = path.resolve(inputPath);
    } else {
        newPath = inputPath;
    }
console.log(newPath);
return newPath;
};

module.exports = solvingPath;
