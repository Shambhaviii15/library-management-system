const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

// Borrow a book
exports.borrowBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;

    const book = await Book.findById(bookId);
    if (!book || book.copiesAvailable < 1) {
      return res.status(400).send("Book not available");
    }

    const borrow = new Borrow({ userId, bookId });
    await borrow.save();

    book.copiesAvailable -= 1;
    await book.save();

    res.send("Book borrowed successfully");
  } catch (err) {
    res.status(500).send("Error borrowing book");
  }
};

// Return a book
exports.returnBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;

    const borrow = await Borrow.findOne({
      userId,
      bookId,
      returnDate: { $exists: false },
    });

    if (!borrow) {
      return res.status(404).send("No borrow record found");
    }

    borrow.returnDate = new Date();
    await borrow.save();

    const book = await Book.findById(bookId);
    book.copiesAvailable += 1;
    await book.save();

    res.send("Book returned successfully");
  } catch (err) {
    res.status(500).send("Error returning book");
  }
};