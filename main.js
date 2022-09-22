const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const routes = require('./routes/index');
const connect = require('./database/db');

require('dotenv').config();

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(routes);

connect().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
});
