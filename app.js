const express = require('express');

const routesHandler = require('./routes/routes');

const app = express();

// support parsing of application/json type post data
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    //you can set the 'Access-Control-Allow-Header to be '*' so that any header type is allowed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

//GET /feed/posts
app.use('/', routesHandler);



app.listen(3000);



