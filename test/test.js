var fs = require('fs');
var path = require('path');

const absolutePath = path.resolve("./test/test.json");   
const json = JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));



const testReturn = (req, res, next) => {
    res.status(200).send(JSON.stringify(json));
};

exports.testReturn = testReturn;