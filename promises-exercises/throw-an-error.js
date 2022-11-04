function parsePromised(json) {
    return new Promise(function(resolve, reject) {
      try {
        resolve(JSON.parse(json));
      }
      catch(error){
        error = 'Unexpected token o in JSON at position 1';
        reject(error);
      }
    })
  };
  
parsePromised(process.argv[2])
.then(console.log)
.catch(console.log);