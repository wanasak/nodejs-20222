const express = require('express');
const bookRouter = express.Router();

bookRouter
  .route('/')
  .get((req, res) => {
    res.send('All books');
  })
  .post((req, res) => {
    res.send('Book is stored');
  });

bookRouter
  .route('/:id')
  .get((req, res) => {
    res.send(`Single book ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`Update single book ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete single book ${req.params.id}`);
  });

module.exports = bookRouter;
