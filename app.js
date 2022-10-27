var express = require('express');
var app = express();

app.get('/', function(req, res) {

  const contents = fs.readFileSync(`index.html`);
  console.log(contents)
  res.send(contents);
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
