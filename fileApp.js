const express = require('express');
const fileApp = express();

fileApp.use((req,res,next) => {
    res.status(200).send({
        message: 'All set!'
    });
});

module.exports = fileApp;