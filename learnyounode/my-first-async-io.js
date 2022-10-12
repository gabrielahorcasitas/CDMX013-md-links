const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (error, result) => {
    if (error){
        return console.error(error);
    } else {
        const res = result.split('\n').length -1;
        console.log(res);
    }
});