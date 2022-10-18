const HTTP = require('q-io/http');

HTTP.read('http://localhost:7000')
.then((response) => response.toString())
.then(response => {
  HTTP.read(`http://localhost:7001/${response}`)
  .then(JSON.parse)
  .then(console.log)
})