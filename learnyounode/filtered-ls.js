const fs = require('fs');
const path = require('path');

//console.log(process.argv[2]);
//console.log(process.argv[3]);

const dir = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(dir, (err, list) => {
    if (err) {
        return console.error(err);
    } else {
        list.forEach(file => {
            if (path.extname(file) === extension){
                console.log(file);
            }
        })
    }
});