'use strict';

const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(bodyParser.json());

require('./route/calculate.route.js')(app);

if(!module.parent){
  app.listen(3000, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
}

console.log(`Running on http://${HOST}:${PORT}`)

module.exports = app