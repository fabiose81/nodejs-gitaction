'use strict';

const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(bodyParser.json());

app.get("/health" ,(req, res) => {
  res.status(200);
  res.send("Healthy")
});

require('./route/calculate.route.js')(app);

if(!module.parent){
  app.listen(3000, () =>
      console.log(`Running on http://${HOST}:${PORT}`)
  );
}

module.exports = app