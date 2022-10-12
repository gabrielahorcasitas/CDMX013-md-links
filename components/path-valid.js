const fs = require('fs');
const solvingPath = require('./solving-path');
const pathForTestingFunctions = './index.js';
const solvedPath = solvingPath(pathForTestingFunctions);

fs.access(solvedPath, fs.F_OK, (err) => {
    console.log(`${solvedPath} ${err ? 'path invalid' : 'path valid'}`);
});