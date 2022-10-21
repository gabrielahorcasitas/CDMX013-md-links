const fs = require('fs');
const solvingPath = require('./solving-path');
const readDir = require('./read-dir');
const readFile = require('./read-file');
const getLinks = require('./get-links');
const validateLinks = require('./validate-links');
const uniqueLinks = require('./unique-links-stats');
const brokenLinks = require('./broken-links-stats');

const pathExample =  process.argv[2];;
const validate = process.argv[3];
const stats = process.argv[4];
// const pathExample =  'example/exampletwo/examplefour.md';
// const validate = true;
// const stats = true;

function mdLinks(inputPath){
   return new Promise((resolve, reject) => {
        const pathResolved = solvingPath(inputPath);
        const mdFilesPaths = [];
    
        if (fs.lstatSync(pathResolved).isDirectory()){
            readDir(pathResolved, mdFilesPaths);
        } else {
            readFile(pathResolved, mdFilesPaths);
        };
    
        const linksOfMd = getLinks(mdFilesPaths);

        if(validate === false && stats === false){
            resolve(linksOfMd);
        } else if(validate === true && stats === false){
            const httpResponse = linksOfMd.map((link) => validateLinks(link));
            //resuelve el arreglo de promesas que viene de validate links
            Promise.all(httpResponse).then((response) => {
                console.log(response)
            });
        } else if (validate === false && stats === true) {
            const totalLinks = linksOfMd.length;
            console.log(totalLinks);
            const nonRepeatedLinks = uniqueLinks(linksOfMd);
            console.log(nonRepeatedLinks);
        } else if(validate === true && stats === true){
            const totalLinks = linksOfMd.length;
            console.log(totalLinks);
            const nonRepeatedLinks = uniqueLinks(linksOfMd);
            console.log(nonRepeatedLinks);
            const totalBrokenLinks = brokenLinks(linksOfMd);
        } else {
            reject(Error("Can`t validate link"));
        };
     });
};

mdLinks(pathExample);
module.exports = mdLinks;
