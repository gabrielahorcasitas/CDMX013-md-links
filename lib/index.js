const solvingPath = require('./solving-path');
const readDir = require('./dir-or-file')

const pathExample = 'example';

function mdLinks(inputPath){
    const pathResolved = solvingPath(inputPath);
    readDir(pathResolved);
};

mdLinks(pathExample);
module.exports = mdLinks;
