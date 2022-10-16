const fs = require('fs');
const solvingPath = require('./solving-path');
const readDir = require('./read-dir');
const readFile = require('./read-file');
const getLinks = require('./get-links');
const validateLinks = require('./validate-links');

const pathExample = 'example/exampletwo/examplethree/examplefive.md';

function mdLinks(inputPath){
    const pathResolved = solvingPath(inputPath);
    const mdFilesPaths = [];

    if (fs.lstatSync(pathResolved).isDirectory()){
        readDir(pathResolved, mdFilesPaths);
    } else {
        readFile(pathResolved, mdFilesPaths);
    };

    const linksOfMd = getLinks(mdFilesPaths);
};

mdLinks(pathExample);
module.exports = mdLinks;
