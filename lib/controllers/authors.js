const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .get('/', async (req, res) => {
    const authors = await Author.getAllAuthors();
    res.json(authors);
  })
  .get('/:id', async (req, res) => {
    const authors = await Author.getAuthorById(req.params.id);
    await authors.getBooks();
    res.json(authors);
  });

