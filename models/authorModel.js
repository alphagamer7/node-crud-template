const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorModel = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    gender: { type: String }
  }
);

module.exports = mongoose.model('Author', authorModel);
