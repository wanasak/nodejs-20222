const express = require('express');
const { ObjectId } = require('mongodb');
const bookController = require('../controllers/BookController');
const bookRouter = express.Router();

bookRouter.route('/').get(bookController.index).post(bookController.create);

bookRouter
  .route('/:id')
  .get(bookController.get)
  .patch(bookController.update)
  .delete(bookController.remove);

module.exports = bookRouter;
