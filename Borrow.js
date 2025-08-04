const mongoose = require("mongoose");

const BorrowSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  borrowDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Borrow", BorrowSchema);