#!/usr/bin/env node
const fs = require('fs');
const yargs = require('yargs/yargs');
const colors = require('colors');
const mdLinks = require('../lib/mdLinks');
const uniqueLinks = require('../lib/unique-links-stats');
const brokenLinks = require('../lib/broken-links-stats');
const { resolve } = require('path');


const { argv } = yargs(process.argv.slice(2))
.scriptName('mdLinks')
.usage('md-links <path-to-file> [options]: mdLinks path --validate --stats'.cyan)
.example('file.md --validate --stats'.magenta)
.help('help', 'h'.cyan)
.option('validate',{
    alias: 'v',
    describe: 'validate links',
    demandOption: false,
    default: false,
    type: 'boolean'
})
.option('stats', {
    alias: 's',
    describe: 'obtain stats of the links',
    demandOption: false,
    default: false,
    type: 'boolean'
})
.epilog('By Gabriela C. Horcasitas'.cyan)

const path = argv._[0]; //Arguments without a corresponding flag show up in the argv._ array.
const validate = argv.validate;
const stats = argv.stats;

if(path === undefined){
    console.log('You need to provide a path'.red);
} else if(fs.existsSync(path) === false){
    console.log('Path invalid, try with another path'.red);
} else {
    mdLinks(path, validate, stats)
    // when promises in md links
        .then((result) => {
            if (result.length === 0) {
              console.log('There are no links in this file'.cyan);
            } else if (!validate && !stats) { 
              console.log('\nLinks found in file(s):\n'.cyan); // \n new line
              result.forEach((link) => {
                console.log(`${'File path:'.green}${link.path}\n${'href:'.green} ${link.href}\n${'text:'.green} ${link.text}\n`);
              });
            } else if (validate  && !stats) {
              console.log('only validate');
              console.log('\nLinks found in file(s):\n'.cyan);
              result.forEach((link) => {
                console.log(`${'href:'.green} ${link.href}\n${'status:'.green} ${link.status} ${link.statusText}\n${'text:'.green} ${link.text}\n`);
              });
            } else if (!validate && stats){
              console.log('\nLinks found in file(s):\n'.cyan);
              const nonRepeated = uniqueLinks(result);            
              console.log(`${'Total:'.green} ${result.length}\n${'Unique:'.green} ${nonRepeated}`);
            } else if (validate === true && stats === true){
              console.log('\nLinks found in file(s):\n'.cyan)
              const nonRepeated = uniqueLinks(result);
              const broken = brokenLinks(result);
             // broken.then((response) => {
                console.log(`${'Total:'.green} ${result.length}\n${'Unique:'.green} ${nonRepeated}\n${'Broken:'.magenta} ${broken}`)
            //  });  
            }
         })
         .catch((error) => {
            console.log(`${'Error'.red} ${error.message}`);
         });
};