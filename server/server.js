const express = require('express');
const bodyParser = require('body-parser');
const reviewRouter = require('./routes.js');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost/reviews');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/item', reviewRouter);

app.listen(1337, () => {
  console.log('listening on port 1337');
});
