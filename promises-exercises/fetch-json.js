const HTTP = require('q-io/http');

HTTP.read('http://localhost:1337')
.then(response => JSON.parse(response))
.then(console.log)