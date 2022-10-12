const fs = require('fs');
const solvingPath = require('./solving-path');

const pathForTestingFunctions = './index.js';
const solvedPath = solvingPath(pathForTestingFunctions);

function solvingType(){
const dirOrFile = true;
    if(fs.lstatSync(solvedPath).isDirectory() === false){
        dirOrFile = false;
        console.log(dirOrFile);
    } else if (fs.lstatSync(solvedPath).isFile() === true){
        dirOrFile = true;
        console.log(dirOrFile);
    };
return dirOrFile
}

module.exports = solvingType; 