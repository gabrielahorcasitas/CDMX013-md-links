const fs = require('fs');
const solvingPath = require('./solving-path');
const readDir = require('./read-dir');
const readFile = require('./read-file');
const getLinks = require('./get-links');
const validateLinks = require('./validate-links');

const pathExample = 'example/exampletwo';
const options = true;

function mdLinks(inputPath){
    return new Promise((resolve, reject) => {
        const pathResolved = solvingPath(inputPath);
        const mdFilesPaths = [];
    
        if (fs.lstatSync(pathResolved).isDirectory()){
            readDir(pathResolved, mdFilesPaths);
        } else {
            readFile(pathResolved, mdFilesPaths);
        };
       // console.log(mdFilesPaths);

        const linksOfMd = getLinks(mdFilesPaths);
        console.log(linksOfMd);

        if(options === false){
            resolve(linksOfMd);
        } else if(options === true){
            const httpResponse = linksOfMd.map((link) => validateLinks(link));
            resolve(Promise.all(httpResponse));
        } else {
            reject(Error("Can`t validate link"));
        };
    });
};

mdLinks(pathExample);
module.exports = mdLinks;
