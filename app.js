const express = require('express');
const routes = require('./routes/routes');

const mapper = require('./request_mapper/requestMapper');

const app = express();

app.use(mapper);

console.log("Starting NodeJs Server");

app.listen(3000)