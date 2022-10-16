const http = require('http');
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("This always runs");
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log("In the middelware 2");
    res.send("<h1> The \"Add product\" page </h1>")
});

app.use('/', (req, res, next) => {
    console.log("In the middelware 3");
    res.send("<h1> hello from express ! </h1>")
});

app.listen(3000);