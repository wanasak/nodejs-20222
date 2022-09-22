const express = require('express');
const auth = require('../middleware/auth');
const bookController = require('../controllers/BookController');
const bookRouter = express.Router();

bookRouter
  .use(auth)
  .route('/')
  .get(bookController.index)
  .post(bookController.create);

bookRouter
  .route('/:id')
  .get(bookController.get)
  .patch(bookController.update)
  .delete(bookController.remove);

module.exports = bookRouter;
