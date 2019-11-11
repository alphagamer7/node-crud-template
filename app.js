const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.ENV === 'Test') {
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost/bookAPI_Test');
} else {
  console.log('This is for real');
  const db = mongoose.connect('mongodb://localhost/bookAPI');
}


const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const Author = require('./models/AuthorModel');
const bookRouter = require('./routes/bookRouter')(Book);
const authorRouter = require('./routes/authorRoutes')(Author);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);
app.use('/api', authorRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
