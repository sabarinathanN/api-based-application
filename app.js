const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feeds');
const jsonWebToken = require('jsonwebtoken');

// app.use(bodyParser.urlencoded()); this is one of the method we follow while using form data
//now we need only json data so we use this formet

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET','POST','DELETE','PUT');
    res.setHeader('Access-Control-Allow-Headers','content-type','Authorization')
    next();
})

app.use('/feeds',feedRoutes)

app.listen(8080);