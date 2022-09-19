const express = require('express');
const router = express.Router();
const bookRouter = require('./book');
const path = require('path');

router.get('/', (req, res) => {
  res.render('home', { name: 'Smudger' });
});

router.use('/books/', bookRouter);

router.all('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../pages/404.html'));
});

module.exports = router;
