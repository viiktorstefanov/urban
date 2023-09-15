const express = require('express');
const cors = require('../middlewares/cors');


module.exports = (app) => {
    
    app.use(express.static('static'));
    app.use(express.json());
    app.use(cors());

}