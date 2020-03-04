const express = require('express');

const routes = require('./routes/routes');

const app = express();

app.use(routes);

console.log(routes.someText);

app.listen(3000)