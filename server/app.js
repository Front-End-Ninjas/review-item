const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reviewRouter = require('./routes.js');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost/reviews');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/item', reviewRouter);

module.exports = app;
