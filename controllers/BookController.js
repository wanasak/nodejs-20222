const { ObjectId } = require('mongodb');
const connect = require('../database/db');

exports.index = async (req, res) => {
  const db = await connect();
  const books = await db.collection('books').find().toArray();
  res.json(books);
};

exports.create = async (req, res) => {
  const db = await connect();
  await db.collection('books').insertOne(req.body);
  res.status(201).send('Book is stored');
};

exports.get = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  const book = await db.collection('books').find({ _id }).toArray();
  res.json(book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  await db.collection('books').updateOne({ _id }, { $set: req.body });
  res.json({
    message: 'book is updated successfully',
  });
};

exports.remove = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  await db.collection('books').deleteOne({ _id });
  res.status(204).json();
};
