const fs = require('fs');
const path = require('path');

function readDir(pathExample, files){
    const contentOfDir = fs.readdirSync(pathExample);
       contentOfDir.forEach((element) => {
            const newPath = path.resolve(pathExample, element);
            const fileExtension = path.extname(newPath);
            if(fs.lstatSync(newPath).isDirectory()){
                readDir(newPath,files);
            } else if (fileExtension === '.md' || fileExtension === '.markdown'){
                files.push(newPath);
            } else {
                console.log('You can only validate markdown files');
            }
       });
       return filesArr;
}
module.exports = readDir; 

