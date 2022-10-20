#!/usr/bin/env node
const yargs = require('yargs/yargs');
//const chalk = require('chalk');
const fs = require('fs');
const mdLinks = require('../lib/index');

const  { argv } = yargs(process.argv.slice(2))
.scriptName('mdLinks')
.usage('path --validate --stats (--validate and --stats are optional)')
.example('file.md --validate --stats')
.help('help', 'h')
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
});

const path = argv._[0]; //Arguments without a corresponding flag show up in the argv._ array.
const validate = argv.validate;
const stats = argv.stats;

if(path === undefined){
    console.log('You need to provide a path');
} else if(!fs.existsSync(path)){
    console.log('Path invalid, try with another path')
} else {
    mdLinks(path)
    // when promises in md links
        .then((result) => {
            if (result.length === 0) {
              console.log('There are no links in this file');
            } else if (validate === false && stats === false) { 
              console.log('Links found in file(s):\n'); // \n new line
              result.forEach((link) => {
                console.log(`${'File path:'}${link.path}\n${'href:'} ${link.href}\n${'text:'} ${link.text}\n`);
              });
            } else if (validate === true && stats === false) {
              console.log('Links found in file(s):\n');
              result.forEach((link) => {
                console.log(`${'href:'} ${link.href}\n${'status:'} ${link.status} ${link.statusText}\n${'text:'} ${link.text}\n`);
              });
            }
         })
         .catch((err) => {
            console.log(err);
         });
};