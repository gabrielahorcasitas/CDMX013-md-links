const http = require('http');
const bl = require('bl');

const url = process.argv[2];

// http.get(url, (response) => {
//     let allData = '';

//     response.setEncoding('utf8');
//     response.on('error', (err) => {
//         console.error(err);
//     });
//     response.on('data', data => {
//         allData += data;
//     });
//     response.on('end', () => {
//         console.log(allData.length);
//         console.log();
//     });
// });

http.get(url, (response) =>{
    response.pipe(bl((err,data) => {
        if(err){
            return console.error(err);
        } else {
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }
    }));
});
