#!/usr/bin/env node
const fs = require('fs');
const yargs = require('yargs/yargs');
const colors = require('colors');
const mdLinks = require('../lib/mdLinks');
const uniqueLinks = require('../lib/unique-links-stats');
const brokenLinks = require('../lib/broken-links');

const { argv } = yargs(process.argv.slice(2))
.scriptName('mdLinks')
.usage('md-links <inputPath-to-file> [options]: mdLinks inputPath --validate --stats'.bgMagenta)
.example('file.md --validate --stats'.magenta.bold,'||  dir/file.md --validate --stats'.magenta.bold)
.version('0.1.0')
.help('help')
.strictOptions() // if alias of options start with Mayus: parserConfiguration({ 'strip-aliased': true }) .strictOptions()
.option('validate',{
    alias: 'v',
    describe: 'Validate links in md file',
    demandOption: false,
    default: false,
    type: 'boolean'
})
.option('stats', {
    alias: 's',
    describe: 'Obtain stats of the links in md file',
    demandOption: false,
    default: false,
    type: 'boolean'
})
.epilog('By Gabriela C. Horcasitas'.bgBlue);

const inputPath = argv._[0]; //Arguments without a corresponding flag show up in the argv._ array.
const validate = argv.validate;
const stats = argv.stats;

if(inputPath === undefined){
    console.log('You need to provide a inputPath'.bgRed);
} else 
if(fs.existsSync(inputPath) === false){
    console.log('Path invalid, try with another Path'.bgRed);
} else {
    mdLinks(inputPath, validate, stats)
    // when promises in md links
        .then((result) => {
            if(result.length === 0) {
              console.log('No links found'.magenta);
            } else if (!validate && !stats) { 
              console.log('\nLinks found in file(s):'.cyan.bold); // \n new line
              result.forEach((link) => {
                console.log(`\n${'File inputPath:'.blue.bold} ${link.inputPath}\n${'href:'.blue.bold} ${link.href}\n${'text:'.blue.bold} ${link.text}\n`);
              });
            } else if (validate  && !stats) {
              console.log('\nLinks found in file(s):\n'.cyan.bold);
              result.forEach((link) => {
                console.log(`${'href:'.blue.bold} ${link.href}\n${'text:'.blue.bold} ${link.text}`)
                if(link.statusText === 'fail'){
                  console.log(`${'status:'.red.bold} ${link.status} ${link.statusText}\n`);
                } else {
                  console.log(`${'status:'.green.bold} ${link.status} ${link.statusText}\n`);
                }
              });
            } else if (!validate && stats){
              console.log('\nLinks found in file(s):\n'.cyan.bold);
              const nonRepeated = uniqueLinks(result);            
              console.log(`${'Total:'.blue.bold} ${result.length}\n${'Unique:'.blue.bold} ${nonRepeated}\n`);
            } else if (validate === true && stats === true){
              console.log('\nLinks found in file(s):\n'.cyan.bold)
              const nonRepeated = uniqueLinks(result);
              const broken = brokenLinks(result)
              .then((response) => {
               console.log(`${'Total:'.blue.bold} ${result.length}`,`\n${'Unique:'.blue.bold} ${nonRepeated}`,`\n${'Broken:'.red.bold} ${response}\n`);
              });   
            };
         })
         .catch((error) => {
            console.log(`${'Error'.bgRed} ${error.message}`);
         });
};