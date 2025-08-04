const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const auth = require("../middleware/auth");

router.post("/", auth, addBook);           // Add book (protected)
router.get("/", getBooks);                 // Get all books
router.put("/:id", auth, updateBook);      // Update book by ID
router.delete("/:id", auth, deleteBook);   // Delete book by ID

module.exports = router;