const { ObjectId } = require('mongodb');
const Book = require('../models/Book');

exports.index = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.create = async (req, res) => {
  try {
    await Book.create(req.body);
    res.status(201).json({
      message: 'Book is stored',
    });
  } catch (error) {
    res.status(500).json(error.errors);
  }
};

exports.get = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.updateOne({ _id }, { $set: req.body });
  res.json({
    message: 'book is updated successfully',
  });
};

exports.remove = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.deleteOne({ _id });
  res.status(204).json();
};
