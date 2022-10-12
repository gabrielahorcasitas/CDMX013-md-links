const myModule = require('./my-Module');

const dir = process.argv[2];
const extension = process.argv[3];

myModule(dir, extension, (err, filteredList) =>{
    if(err){
        return console.error(err);
    } else {
        filteredList.forEach(file => {
            console.log(file);
        });
    }
});