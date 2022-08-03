const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
  })
  .get('/:id', async (req, res) => {
    const books = await Book.getBookById(req.params.id);
    await books.getAuthors();
    res.json(books);
  });
