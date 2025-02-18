const fs = require('fs');
const solvingPath = require('./solving-path');
const readDir = require('./read-dir');
const readFile = require('./read-file');
const getLinks = require('./get-links');
const validateLinks = require('./validate-links');

function mdLinks(inputPath, validate, stats){
   return new Promise((resolve) => {
        const pathResolved = solvingPath(inputPath);
        const mdFilesPaths = [];
    
        if (fs.lstatSync(pathResolved).isDirectory()){
            readDir(pathResolved, mdFilesPaths);
        } else {
          readFile(pathResolved, mdFilesPaths);
        };
    
        const linksOfMd = getLinks(mdFilesPaths);

        if(!validate && !stats || !validate && stats){
            resolve(linksOfMd);
        } else {
            const httpResponse = linksOfMd.map((link) => validateLinks(link));
            resolve(Promise.all(httpResponse));
        };
     });
};

module.exports = mdLinks;
