const fs = require('fs');
const path = require('path');

filesArr = [];

function readDir(pathExample){
    const contentOfDir = fs.readdirSync(pathExample);
       contentOfDir.forEach((element) => {
            const newPath = path.resolve(pathExample, element);
            const fileExtension = path.extname(newPath);
            if(fs.lstatSync(newPath).isDirectory()){
                readDir(newPath,filesArr);
            } else if (fileExtension === '.md' || fileExtension === '.markdown'){
                filesArr.push(newPath);
            } else {
                console.log("This path doesn't belong to a .md file. You can only validate markdown files");
            }
       });
       console.log(filesArr);
       return filesArr;
}
module.exports = readDir; 
// function solvingFile(){
//     console.log(filesArr);
//     if(fs.lstatSync(pathExample).isDirectory() === true && fs.lstatSync(pathExample).isFile() === false){
//        const contentOfDir = fs.readdirSync(pathExample);
//        contentOfDir.forEach((element) => {
//             const newPath = path.resolve(pathExample, element);
//             if(fs.lstatSync(newPath).isDirectory() === true){
//                 solvingFile(newPath);
//             } else if(fs.lstatSync(newPath).isDirectory() === true){
//                 console.log(filesArr);
//                 filesArr.push(newPath);
//             }
//        });
//     } else if(fs.lstatSync(pathExample).isDirectory() === false && fs.lstatSync(pathExample).isFile() === true ){
//         console.log(filesArr);
//         filesArr.push(pathExample);
//     } else {
//         console.log('error');
//     }
// console.log(filesArr);
// return filesArr;
// } 
