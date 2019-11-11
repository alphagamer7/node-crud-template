const express = require('express');
const authorController = require('../controllers/authorController');

function routes(Author) {
  const authorRouter = express.Router();
  const controller = authorController(Author);
  authorRouter.route('/authors')
    .post(controller.post)
    .get(controller.get);
    return authorRouter;
  }
  
  module.exports = routes;