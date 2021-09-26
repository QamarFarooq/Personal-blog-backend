const express = require('express');
const mongoose = require('mongoose');

const routesHandler = require('./routes/routes');
const authRoutes = require('./routes/auth');

const app = express();

// supports parsing of application/json type post data
app.use(express.json());

// catches all errors thrown on server
app.use((error, req, res, next) => {
    console.log(error);
    // default value of error code is 500
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message: message,
        data: data
    })
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    //you can set the 'Access-Control-Allow-Header to be '*' so that any header type is allowed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

// handle routes
app.use('/', routesHandler);
app.use('/auth', authRoutes);

mongoose.connect('mongodb+srv://Qman66:fWySGWplnDUbAmlF@cluster0.gbxmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(result => {
    app.listen(3000);
})
.catch(err => console.log(err))



