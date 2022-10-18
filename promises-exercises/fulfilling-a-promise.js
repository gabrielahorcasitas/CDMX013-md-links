const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300)
  });
//   .then((onFullfilled) =>{
//     console.log(onFullfilled);
//   });
promise.then(console.log);   

   
