const fs = require('fs');
const solvingPath = require('./solving-path');
const pathForTestingFunctions = '../learnyounode';
const solvedPath = solvingPath(pathForTestingFunctions);

function isPathValid(){
    fs.access(solvedPath, fs.F_OK, (err) => {
        console.log(`${solvedPath} ${err ? 'Path invalid' : 'Path valid'}`);
    });
}

module.exports = isPathValid;