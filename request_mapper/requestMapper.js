// Import
const express = require('express');
const router = express.Router();
var fs = require('fs');
var path = require('path');

//Path 
const request_dir = "./request_mapper/requests/";

// Read directory which contain request
fs.readdirSync(request_dir).forEach(file => {    
    const absolutePath = path.resolve(request_dir + file);     
    const json = JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));   
     
    console.log("Reading file : " + absolutePath);        
    switch(json._method) {
        case "get":
            router.get(json._route, (req, res, next) => {     
                console.log("Accessing path : " + json._route + "with method " + json._method);          
                res.status(json._statusCode).send(JSON.stringify(json._response));
            });
            break;
        case "post":
            router.post(json._route, (req, res, next) => {
                console.log("Accessing path : " + json._route + "with method " + json._method);
                res.status(json._statusCode).send(JSON.stringify(json._response));
            });
            break;
        // TODO: add other method
        default:
            console.log("ERROR - undefined method " + json._method);
    }
    
  });


module.exports = router;