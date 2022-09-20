const { default: mongoose } = require('mongoose');

async function connect() {
  await mongoose.connect('mongodb://localhost:27017/nodejs-2022');
}

module.exports = connect;
