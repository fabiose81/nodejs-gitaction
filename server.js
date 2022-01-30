'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const HOST = '0.0.0.0';
const calculate = require('./service/calculate');

app.use(bodyParser.json());

require('./route/calculate.route.js')(app);

app.get('/', (req, res) => {
  res.send('Hello World / GitHubAction');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);