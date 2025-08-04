const Book = require("../models/Book");

// Add a book
exports.addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).send("Book added");
  } catch (err) {
    res.status(500).send("Error adding book");
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send("Error fetching books");
  }
};

// Update book by ID
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(book);
  } catch (err) {
    res.status(500).send("Error updating book");
  }
};

// Delete book by ID
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.send("Book deleted");
  } catch (err) {
    res.status(500).send("Error deleting book");
  }
};